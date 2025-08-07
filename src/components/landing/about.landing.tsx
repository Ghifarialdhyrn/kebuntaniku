import Image from "next/image";

export default function AboutHome() {
  return (
    <section className="w-full max-w-screen-xl mx-auto mb-24 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row rounded-xl shadow-lg overflow-hidden bg-white">
        {/* Gambar */}
        <div className="w-full md:w-1/2 h-64 md:h-auto relative">
          <Image
            src="/hero3.jpg"
            alt="About Us"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Deskripsi */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            About Us
          </h2>
          <p className="text-gray-600 mb-6 text-sm sm:text-base text-justify leading-relaxed">
            Kebun Taniku adalah sebuah inisiatif yang bertujuan untuk menjembatani
            antara petani lokal dan masyarakat Kota Bandung dalam mendistribusikan
            sayuran dan buah segar yang berkualitas. Didirikan oleh lima pemuda
            asal Bandung, Kebun Taniku hadir untuk membantu petani dalam
            memasarkan hasil tani mereka secara langsung kepada konsumen, sehingga
            proses distribusi menjadi lebih efisien dan menguntungkan bagi kedua
            belah pihak. Selain itu, Kebun Taniku juga berkomitmen untuk
            menyediakan sayuran organik yang baik untuk kesehatan, memberikan
            kemudahan bagi masyarakat dalam mengakses produk pertanian yang segar,
            sehat, dan berkualitas tinggi.
          </p>
          <a href="/about">
            <button className="px-5 py-3 bg-[#5ECDCF] text-black cursor-pointer text-base font-semibold rounded-lg hover:bg-[#54b8ba] hover:text-white transition">
              Read More
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
