import Link from "next/link";

export default function ListBlog({
  posts,
  search,
  filter,
  sort,
  page,
  totalPages,
}: any) {
  function buildQuery(params: any) {
    const q = new URLSearchParams({
      search,
      filter,
      sort,
      page: String(params.page),
    });

    return `?${q.toString()}`;
  }

  return (
    <div className="w-full flex flex-col items-center mx-auto px-4 sm:px-6 py-6 max-w-7xl">
      {/* FILTER FORM (GET) */}
      <form
        method="GET"
        className="flex flex-col sm:flex-row flex-wrap gap-2 justify-center mb-6 w-full"
      >
        <input
          type="text"
          name="search"
          defaultValue={search}
          placeholder="Search by title..."
          className="border border-gray-300 rounded-lg p-2 w-full sm:w-64 shadow-md"
        />

        <select
          name="filter"
          defaultValue={filter}
          className="border border-gray-300 rounded-lg p-2 w-full sm:w-auto shadow-md"
        >
          <option value="All">All Categories</option>
          <option value="Urban Farming">Urban Farming</option>
          <option value="Technology">Technology</option>
          <option value="Agronomy">Agronomy</option>
          <option value="Organic Farming">Organic Farming</option>
          <option value="Livestock">Livestock</option>
          <option value="Harvest">Harvest</option>
        </select>

        <select
          name="sort"
          defaultValue={sort}
          className="border border-gray-300 rounded-lg p-2 w-full sm:w-auto shadow-md"
        >
          <option value="name">Name</option>
          <option value="date">Release Date</option>
        </select>

        <input type="hidden" name="page" value="1" />

        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded-lg shadow"
        >
          Apply
        </button>
      </form>

      {/* BLOG GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {posts.map((post: any, index: number) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transition-transform hover:scale-105 hover:shadow-xl duration-300"
          >
            <div className="relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 text-sm rounded-md">
                {post.category}
              </div>
            </div>
            <div className="p-3">
              <p className="text-gray-500 text-sm">
                {new Date(post.date).toLocaleDateString("id-ID")}
              </p>
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="text-gray-600 text-sm">by {post.author}</p>
              <Link
                href={`/blogs/${post.slug}`}
                className="text-green-600 font-medium mt-2 text-right text-sm block hover:underline underline-offset-2 transition-all duration-200"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex flex-wrap justify-center mt-6 gap-2 w-full">
        {/* Prev */}
        {page > 1 ? (
          <Link
            href={buildQuery({ page: page - 1 })}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Previous
          </Link>
        ) : (
          <button className="px-4 py-2 bg-gray-300 text-gray-500 rounded-lg">
            Previous
          </button>
        )}

        {/* Page numbers */}
        {[...Array(totalPages)].map((_, i) => (
          <Link
            key={i}
            href={buildQuery({ page: i + 1 })}
            className={`px-4 py-2 rounded-lg ${
              i + 1 === page
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-green-400 hover:text-white"
            }`}
          >
            {i + 1}
          </Link>
        ))}

        {/* Next */}
        {page < totalPages ? (
          <Link
            href={buildQuery({ page: page + 1 })}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Next
          </Link>
        ) : (
          <button className="px-4 py-2 bg-gray-300 text-gray-500 rounded-lg">
            Next
          </button>
        )}
      </div>
    </div>
  );
}
