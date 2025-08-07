type Testimonial = {
  name: string;
  role: string;
  text: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Rina Saputri",
    role: "Ibu Rumah Tangga",
    text: "Sejak belanja di Kebun Taniku, saya merasa lebih tenang memberikan sayuran organik untuk keluarga. Produknya segar, pengirimannya cepat, dan harganya pun sangat bersahabat!",
    image: "/hijab.png",
  },
  {
    name: "Dedi Pratama",
    role: "Petani Lokal",
    text: "Berkat Kebun Taniku, hasil panen saya bisa langsung sampai ke tangan konsumen tanpa perantara. Penghasilan saya jadi lebih stabil dan saya merasa lebih dihargai sebagai petani.",
    image: "/boss.png",
  },
  {
    name: "Andi Wijaya",
    role: "Pengusaha Kafe Sehat",
    text: "Kami butuh pasokan buah dan sayuran organik setiap hari. Kebun Taniku selalu memberikan kualitas terbaik, membuat menu di kafe kami semakin dipercaya pelanggan.",
    image: "/boss.png",
  },
  {
    name: "Maya Lestari",
    role: "Mahasiswa Pecinta Lingkungan",
    text: "Kebun Taniku bukan cuma soal belanja produk segar, tapi juga soal mendukung gerakan lokal dan keberlanjutan. Saya bangga jadi bagian dari perubahan ini.",
    image: "/woman.png",
  },
  {
    name: "Siti Aisyah",
    role: "Pengusaha Catering Sehat",
    text: "Kebun Taniku selalu menyediakan bahan makanan organik yang berkualitas. Ini sangat membantu kami dalam menyediakan makanan sehat bagi pelanggan kami.",
    image: "/hijab.png",
  },
  {
    name: "Budi Santoso",
    role: "Ahli Gizi",
    text: "Sebagai ahli gizi, saya selalu merekomendasikan produk organik. Kebun Taniku memberikan sayuran dan buah yang tidak hanya sehat, tetapi juga berkualitas tinggi.",
    image: "/boss.png",
  },
];

interface TestimonialAboutProps {
  page?: number;
  perPage?: number;
}

const TestimonialAbout = ({ page = 1, perPage = 3 }: TestimonialAboutProps) => {
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const paginated = testimonials.slice(start, end);
  const totalPages = Math.ceil(testimonials.length / perPage);

  return (
    <div
      className="py-16 md:py-20 bg-cover bg-center w-full"
      style={{ backgroundImage: "url('/bgtesti.png')" }}
    >
      <div className="container mx-auto text-center mb-12 md:mb-16 px-4">
        <h3 className="text-yellow-500 text-lg md:text-xl mb-2">Our Testimonials</h3>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800">What They Say</h2>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginated.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 flex flex-col items-center text-center"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              width={96}
              height={96}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover mb-5 sm:mb-6"
            />
            <p className="text-gray-600 mb-5 sm:mb-6 italic text-sm sm:text-base">
              &quot;{testimonial.text}&quot;
            </p>
            <h4 className="text-md sm:text-lg font-bold text-gray-900">{testimonial.name}</h4>
            <span className="text-xs sm:text-sm text-green-600 mt-1">{testimonial.role}</span>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10 space-x-2">
        {Array.from({ length: totalPages }).map((_, i) => {
          const isActive = i + 1 === page;
          return (
            <a
              key={i}
              href={`?page=${i + 1}#testimonials`}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                isActive
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {i + 1}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default TestimonialAbout;
