import Link from "next/link";
import { Asset } from "contentful";

interface BlogProps {
  blogs: any[];
}

export default function BlogSectionHome({ blogs }: BlogProps) {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const getImageUrl = (banner: Asset | undefined) => {
    return banner?.fields?.file?.url ? `https:${banner.fields.file.url}` : "/default-image.jpg";
  };

  const renderCard = (blog: any, index: number) => {
    const fields = blog.fields;
    const date = new Date(fields.date);
    const day = date.getDate();
    const monthYear = date.toLocaleString("default", { month: "short", year: "numeric" });

    return (
      <div
        key={index}
        className={`bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl ${
          index > 1 ? "hidden sm:block" : ""
        }`}
      >
        <div className="relative w-full h-48 sm:h-56">
          <img
            src={getImageUrl(fields.banner)}
            alt={fields.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute top-3 left-3 bg-[#5ECDCF] text-white p-2 rounded-md text-center">
            <p className="text-xl font-bold">{day}</p>
            <p className="text-xs sm:text-sm bg-green-600 text-white px-2 py-1 rounded-b-md">
              {monthYear}
            </p>
          </div>
        </div>
        <div className="p-4 sm:p-6">
          <p className="text-gray-500 text-xs sm:text-sm mb-1 sm:mb-2">
            {fields.author} • {formatDate(fields.date)}
          </p>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
            {fields.title}
          </h3>
          <Link
            href={`/blogs/${fields.slug}`}
            className="mt-3 inline-block text-green-600 font-semibold hover:underline transition duration-200 text-sm sm:text-base"
          >
            CONTINUE READING →
          </Link>
        </div>
      </div>
    );
  };

  return (
    <section className="pb-20 -mt-28 sm:pb-0 text-center px-4 sm:px-8 max-w-screen-xl mx-auto">
      <h3 className="text-green-500 text-lg mt-10">Latest News</h3>
      <h2 className="text-2xl sm:text-3xl font-bold mt-2">
        Check out our blog posts
      </h2>

      {/* Grid layout for both mobile & desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 mt-8">
        {blogs.map((blog, index) => renderCard(blog, index))}
      </div>

      <Link href="/blogs">
        <button className="mt-8 mb-4 sm:mt-16 px-5 py-3 bg-[#5ECDCF] text-black text-base sm:text-lg font-semibold rounded-lg hover:bg-[#5ECDCF] hover:text-white hover:cursor-pointer transition">
          See More
        </button>
      </Link>
    </section>
  );
}
