const BannerAbout = () => {
  const stats = [
    "Agriculture Products",
    "Projects Completed",
    "Satisfied Clients",
    "Experts Farmers",
  ];

  return (
    <div
      className="relative w-full h-[600px] bg-cover bg-center"
      style={{ backgroundImage: "url('/bannerabout.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Main Title */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-20 sm:mb-20 -mt-8">
          ECO-Friendly Products can be Made from Scratch
        </h1>
      </div>

      {/* Stats Grid Only */}
      <div className="absolute bottom-0 w-full py-8 bg-black bg-opacity-90 text-white">
        <div className="container mx-auto relative text-gray-400 px-4">
          <div className="flex flex-wrap justify-center items-center gap-x-40">
            {stats.map((item, idx) => (
              <div
                key={idx}
                className="min-w-[150px] text-base sm:text-lg text-center"
              >
                <h2>{item}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerAbout;
