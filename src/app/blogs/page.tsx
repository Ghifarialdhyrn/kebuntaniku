import HeroBlogs from "@/components/blogs/hero.blogs";
import ListBlog from "@/components/blogs/list.blog";
import Footer from "@/ui/footer";
import ScrollToTopButton from "@/ui/scrollup";
import NavbarSSR from "@/ui/navbar";
import { createClient, Asset, Entry } from "contentful";
import { TypeBlogKebunTanikuSkeleton } from "@/contentful/types/blogKebunTaniku.type";

// ❌ HAPUS type BlogsPageProps, biarkan Next yang handle PageProps

export default async function BlogsPage({ searchParams }: any) {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || "",
  });

  // Ambil query params (search, filter, sort, page)
  const search =
    typeof searchParams?.search === "string" ? searchParams.search : "";
  const filter =
    typeof searchParams?.filter === "string" ? searchParams.filter : "All";
  const sort =
    typeof searchParams?.sort === "string" ? searchParams.sort : "name";
  const pageParam =
    typeof searchParams?.page === "string"
      ? parseInt(searchParams.page, 10)
      : 1;

  const ITEMS_PER_PAGE = 6;

  // Fetch posts dengan tipe skeleton yang benar
  const blogRes = await client.getEntries<TypeBlogKebunTanikuSkeleton>({
    content_type: "blogKebunTaniku",
  });

  // Mapping posts (pakai pola yang sama dengan ListBlog CSR kamu)
  const allPosts = blogRes.items.map(
    (item: Entry<TypeBlogKebunTanikuSkeleton>) => {
      const banner = item.fields.banner as Asset | undefined;
      const imageUrl = banner?.fields?.file?.url
        ? `https:${banner.fields.file.url}`
        : "/default-image.jpg";

      return {
        title:
          typeof item.fields.title === "string"
            ? item.fields.title
            : Object.values(item.fields.title)[0] || "",
        author:
          typeof item.fields.author === "string"
            ? item.fields.author
            : Object.values(item.fields.author)[0] || "",
        date:
          typeof item.fields.date === "string"
            ? item.fields.date
            : Object.values(item.fields.date)[0] || "",
        category:
          typeof item.fields.categories === "string"
            ? item.fields.categories
            : Object.values(item.fields.categories)[0] || "",
        image: imageUrl,
        slug:
          typeof item.fields.slug === "string"
            ? item.fields.slug
            : Object.values(item.fields.slug)[0] || "",
      };
    }
  );

  // Filtering
  let filtered = allPosts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  if (filter !== "All") {
    filtered = filtered.filter((post) => post.category === filter);
  }

  // Sorting
  if (sort === "name") {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sort === "date") {
    filtered.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  }

  // Pagination
  const totalPages = Math.max(
    1,
    Math.ceil(filtered.length / ITEMS_PER_PAGE || 1)
  );
  const currentPage =
    isNaN(pageParam) || pageParam < 1
      ? 1
      : pageParam > totalPages
      ? totalPages
      : pageParam;

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginated = filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Recent articles untuk footer (ambil dari allPosts)
  const recentArticles = allPosts.slice(0, 2).map((p) => ({
    title: p.title,
    slug: p.slug,
    date: new Date(p.date).toISOString(),
  }));

  return (
    <div className="flex flex-col min-h-screen">
      <NavbarSSR currentPath="/blogs" />

      <div className="flex flex-grow justify-center items-center mb-10">
        <HeroBlogs />
      </div>

      <div className="flex flex-grow justify-center items-center mb-20">
        <ListBlog
          posts={paginated}
          search={search}
          filter={filter}
          sort={sort}
          page={currentPage}
          totalPages={totalPages}
        />
      </div>

      <Footer articles={recentArticles} />
      <ScrollToTopButton />
    </div>
  );
}
