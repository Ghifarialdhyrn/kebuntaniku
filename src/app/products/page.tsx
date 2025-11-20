import HeroProducts from "@/components/products/hero.products";
import ListProducts from "@/components/products/listproducts";
import Footer from "@/ui/footer";
import ScrollToTopButton from "@/ui/scrollup";
import { createClient } from "contentful";
import NavbarSSR from "@/ui/navbar";

type RecentArticle = {
  title: string;
  date: string;
  slug: string;
};

// ❗ Perbaiki tipe: searchParams sekarang Promise, mengikuti PageProps Next.js
type ProductsPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function Products({ searchParams }: ProductsPageProps) {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || "",
  });

  let recentArticles: RecentArticle[] = [];
  let products: any[] = [];

  // ✅ Tunggu Promise searchParams, lalu jadikan object biasa
  const sp =
    (searchParams
      ? await searchParams
      : {}) as Record<string, string | string[] | undefined>;

  // Ambil query dari URL
  const search =
    typeof sp.search === "string" ? sp.search : "";
  const category =
    typeof sp.category === "string" ? sp.category : "";
  const pageParam =
    typeof sp.page === "string" ? parseInt(sp.page, 10) : 1;

  const itemsPerPage = 8;

  try {
    const [blogRes, productRes] = await Promise.all([
      client.getEntries({
        content_type: "blogKebunTaniku",
        order: ["-fields.date"],
      }),
      client.getEntries({
        content_type: "productsKebunTaniku",
      }),
    ]);

    recentArticles = blogRes.items.slice(0, 2).map((item: any) => ({
      title: item.fields.title || "",
      slug: item.fields.slug || "",
      date: new Date(item.fields.date).toISOString(),
    }));

    products = productRes.items;
  } catch (error) {
    console.error("SSR fetch error (Products):", error);
  }

  // Filtering di server
  const filteredProducts = products
    .filter((product) =>
      product.fields.productName
        .toLowerCase()
        .includes(search.toLowerCase())
    )
    .filter((product) =>
      category ? product.fields.categories.includes(category) : true
    );

  const totalItems = filteredProducts.length;
  const totalPages = Math.max(
    1,
    Math.ceil(totalItems / itemsPerPage || 1)
  );

  const currentPage =
    isNaN(pageParam) || pageParam < 1
      ? 1
      : pageParam > totalPages
      ? totalPages
      : pageParam;

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex flex-col min-h-screen">
      <NavbarSSR currentPath="/products" />

      <div className="flex flex-grow justify-center items-center">
        <HeroProducts />
      </div>

      <div className="w-full flex flex-grow justify-center items-center">
        <ListProducts
          products={paginatedProducts}
          search={search}
          category={category}
          page={currentPage}
          totalPages={totalPages}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
        />
      </div>

      <Footer articles={recentArticles} />
      <ScrollToTopButton />
    </div>
  );
}
