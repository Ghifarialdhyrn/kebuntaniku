import React from "react";

const LocationAbout = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        <div className="flex flex-col gap-6">
          <div className="bg-lime-400 text-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold">Contact</h3>
            <p>+62 859 5181 6788</p>
            <p>kebuntaniku@gmail.com</p>
            <p>Mon - Fri: 9:00 am - 4:00 pm</p>
          </div>
          <div className="bg-yellow-400 text-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold">Address</h3>
            <p>Antapani</p>
            <p>Bandung, Indonesia</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-yellow-500 text-xl">Contact Us</h3>
          <h2 className="text-4xl font-bold">Write a Message</h2>

          <form
            method="GET"
            action="https://wa.me/6285951816788"
            className="mt-6 space-y-4"
            target="_blank"
          >
            <div className="flex gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full p-3 rounded-md border border-gray-300"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full p-3 rounded-md border border-gray-300"
              />
            </div>

            <textarea
              name="text"
              placeholder="Write a Message"
              className="w-full p-3 rounded-md border border-gray-300 h-32"
              required
            ></textarea>

            <input type="hidden" name="text" />

            <button
              type="submit"
              className="w-full py-3 bg-green-500 text-white rounded-md hover:bg-green-600 cursor-pointer"
            >
              Send a Message via WhatsApp
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12">
        <iframe
          className="w-full h-96 rounded-xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8314539899097!2d107.6513093753411!3d-6.910746967636004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e70019e60c05%3A0x6b98300c783afba1!2sKosan%20Hazz!5e0!3m2!1sen!2sid!4v1754545840421!5m2!1sen!2sid"
          allowFullScreen
          loading="lazy"
          title="Map"
        ></iframe>
      </div>
    </div>
  );
};

export default LocationAbout;
