import React from "react";
import Image from "next/image";

const services = [
  { title: "Harvesting", icon: "🌾", bgColor: "bg-[#4BAF47]" },
  { title: "Maintenance", icon: "🛠️", bgColor: "bg-[#C5CE38]" },
  { title: "Fencing", icon: "🚧", bgColor: "bg-[#EEC044]" },
];

const ActivitiesService: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16 font-sans">
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <Image
            src="/service-05.png"
            alt="Agriculture Image"
            width={400}
            height={100}
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What We Do
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-green-700 mb-6">
            Healthy Food for Good Growth
          </h2>
          <p className="text-gray-700 text-base leading-relaxed mb-4 text-justify">
            Kebun Taniku adalah sebuah inisiatif yang bertujuan untuk
            menjembatani antara petani lokal dan masyarakat Kota Bandung dalam
            mendistribusikan sayuran dan buah segar yang berkualitas. Kami hadir
            untuk membantu petani dalam memasarkan hasil tani mereka secara
            langsung kepada konsumen, sehingga proses distribusi menjadi lebih
            efisien dan menguntungkan bagi kedua belah pihak.
          </p>
          <p className="text-gray-700 text-base leading-relaxed text-justify">
            Kami berkomitmen untuk menyediakan sayuran organik yang baik untuk
            kesehatan, serta memberikan kemudahan bagi masyarakat dalam
            mengakses produk pertanian yang segar, sehat, dan berkualitas
            tinggi. Melalui platform ini, diharapkan tercipta ekosistem yang
            saling mendukung antara petani dan konsumen, sekaligus mendorong
            gaya hidup sehat di masyarakat.
          </p>

          {/* Service Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={`shadow-md w-full h-24 rounded-xl flex flex-col items-center justify-center ${service.bgColor}`}
              >
                <div className="text-3xl mb-2">{service.icon}</div>
                <h3 className="text-sm font-bold text-white">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesService;
