import Image from "next/image";

export default function AboutHome() {
  return (
    <section className="w-full h-[500px] flex mx-auto mb-40 rounded-lg shadow-lg overflow-hidden">
      {/* Bagian Gambar */}
      <div className="w-[50%] flex justify-center items-center">
        <Image
          src="/hero3.jpg" // Ganti dengan gambar yang sesuai
          alt="About Us"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Bagian Deskripsi */}
      <div className="w-[50%] flex flex-col justify-center items-start p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
        <p className="text-gray-600 mb-6 text-justify leading-7">
          Kebun Taniku adalah sebuah inisiatif yang bertujuan untuk menjembatani
          antara petani lokal dan masyarakat Kota Bandung dalam mendistribusikan
          sayuran dan buah segar yang berkualitas. Didirikan oleh lima pemuda
          asal Bandung, Kebun Taniku hadir untuk membantu petani dalam
          memasarkan hasil tani mereka secara langsung kepada konsumen, sehingga
          proses distribusi menjadi lebih efisien dan menguntungkan bagi kedua
          belah pihak. Selain itu, Kebun Taniku juga berkomitmen untuk
          menyediakan sayuran organik yang baik untuk kesehatan, memberikan
          kemudahan bagi masyarakat dalam mengakses produk pertanian yang segar,
          sehat, dan berkualitas tinggi. Melalui platform ini, diharapkan dapat
          tercipta ekosistem yang saling mendukung antara petani dan konsumen,
          sekaligus mendorong gaya hidup sehat di masyarakat.
        </p>
        <a href="/about">
          <button className="px-6 py-3 bg-[#5ECDCF] text-black text-lg font-semibold rounded-lg hover:bg-[#5ECDCF] hover:text-white hover:cursor-pointer transition">
            Read More
          </button>
        </a>
      </div>
    </section>
  );
}
