import React from "react";

const testimonials = [
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

const TestimonialAbout = () => {
  return (
    <div
      className="py-20 bg-cover bg-center w-full"
      style={{ backgroundImage: "url('/bgtesti.png')" }}
    >
      <div className="container mx-auto text-center mb-16">
        <h3 className="text-yellow-500 text-xl mb-2">Our Testimonials</h3>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">What They Say</h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 flex flex-col items-center text-center"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full object-cover mb-6"
            />
            <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
            <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
            <span className="text-sm text-green-600 mt-1">{testimonial.role}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialAbout;
