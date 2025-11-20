import Link from "next/link";

type ListProductsProps = {
  products: any[];
  search: string;
  category: string;
  page: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
};

function buildQuery({
  page,
  search,
  category,
}: {
  page: number;
  search: string;
  category: string;
}) {
  const params = new URLSearchParams();
  if (search) params.set("search", search);
  if (category) params.set("category", category);
  params.set("page", String(page));
  return `?${params.toString()}`;
}

const ListProducts = ({
  products,
  search,
  category,
  page,
  totalPages,
  totalItems,
  itemsPerPage,
}: ListProductsProps) => {
  const hasPrev = page > 1;
  const hasNext = page < totalPages;

  return (
    <div className="bg-[#E9F1EE] w-full min-h-screen py-10 px-4 sm:px-10 lg:px-20">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8">
        Featured Products
      </h2>

      {/* Form GET untuk search & filter */}
      <form
        method="GET"
        className="flex flex-col sm:flex-row justify-center gap-4 mb-6"
      >
        <input
          type="text"
          name="search"
          placeholder="Search..."
          defaultValue={search}
          className="p-3 w-full sm:w-64 bg-white border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <select
          name="category"
          defaultValue={category}
          className="p-3 w-full sm:w-64 bg-white border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="">All Categories</option>
          <option value="Sayuran Daun">Sayuran Daun</option>
          <option value="Sayuran Bumbu">Sayuran Bumbu</option>
          <option value="Buah">Buah</option>
          <option value="Kacang-Kacangan">Kacang-Kacangan</option>
          <option value="Umbi">Umbi</option>
          <option value="Sayuran Buah">Sayuran Buah</option>
        </select>

        {/* Supaya kalau ganti search/category, page balik ke 1 */}
        <input type="hidden" name="page" value="1" />

        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition w-full sm:w-auto"
        >
          Apply
        </button>
      </form>

      {/* Kalau tidak ada produk */}
      {totalItems === 0 ? (
        <p className="text-center text-gray-600 mt-8">
          No products found.
        </p>
      ) : (
        <>
          {/* Grid produk */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.sys.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105"
              >
                <img
                  src={product.fields.image.fields.file.url}
                  alt={product.fields.productName}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                    {product.fields.productName}
                  </h3>
                  <p className="text-gray-500 text-sm sm:text-base">
                    {product.fields.categories}
                  </p>

                  <div className="flex items-baseline justify-center gap-2 mt-2">
                    <p className="text-green-600 font-bold text-base sm:text-lg">
                      {product.fields.price
                        ? `Rp ${product.fields.price
                            .toFixed(0)
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`
                        : "Rp 0"}
                    </p>
                  </div>

                  <div className="flex items-baseline justify-center gap-2 mt-2">
                    <p className="text-gray-500 font-bold text-sm sm:text-base">
                      {product.fields.soldItems ?? "0"} Sold
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Placeholder biar grid tetap rapi kalau item kurang dari itemsPerPage */}
            {Array.from({
              length: Math.max(0, itemsPerPage - products.length),
            }).map((_, index) => (
              <div
                key={`placeholder-${index}`}
                className="bg-transparent rounded-xl"
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 items-center">
            {/* Previous */}
            {hasPrev ? (
              <Link
                href={buildQuery({
                  page: page - 1,
                  search,
                  category,
                })}
                className="px-4 py-2 rounded-lg text-white bg-green-500 hover:bg-green-600 transition w-full sm:w-auto text-center"
              >
                Previous
              </Link>
            ) : (
              <button
                disabled
                className="px-4 py-2 rounded-lg text-white bg-gray-300 w-full sm:w-auto"
              >
                Previous
              </button>
            )}

            <span className="text-gray-600 font-semibold text-center">
              Page {page} of {totalPages}
            </span>

            {/* Next */}
            {hasNext ? (
              <Link
                href={buildQuery({
                  page: page + 1,
                  search,
                  category,
                })}
                className="px-4 py-2 rounded-lg text-white bg-green-500 hover:bg-green-600 transition w-full sm:w-auto text-center"
              >
                Next
              </Link>
            ) : (
              <button
                disabled
                className="px-4 py-2 rounded-lg text-white bg-gray-300 w-full sm:w-auto"
              >
                Next
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ListProducts;
