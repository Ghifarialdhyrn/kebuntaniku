import {
  FaRegHandshake,
  FaFlask,
  FaBuilding,
  FaRegCreditCard,
  FaUsers,
} from "react-icons/fa";

const farmers = [
  {
    name: "Nasmi Malika G",
    role: "Public Relations",
    image: "/nasmi.jpeg",
    icon: <FaRegHandshake className="h-6 w-6 text-green-600" />,
  },
  {
    name: "Gradishar Ghiffari",
    role: "Research Study",
    image: "/inun.jpeg",
    icon: <FaFlask className="h-6 w-6 text-green-600" />,
  },
  {
    name: "Ghifarialdhy R N",
    role: "Founder",
    image: "/ghifari.jpeg",
    icon: <FaBuilding className="h-6 w-6 text-green-600" />,
  },
  {
    name: "Mahesa Diva N",
    role: "Internal",
    image: "/mahes.png",
    icon: <FaUsers className="h-6 w-6 text-green-600" />,
  },
  {
    name: "Hafidh Kausar A",
    role: "Finance",
    image: "/ngkus.jpg",
    icon: <FaRegCreditCard className="h-6 w-6 text-green-600" />,
  },
];

export default function TeamMembers() {
  return (
    <div className="py-16 text-center px-4 sm:px-6 lg:px-8">
      <h2 className="text-yellow-600 text-xl font-semibold">Team Members</h2>
      <h1 className="text-4xl font-bold mt-2 mb-12">Meet Our Farmers</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 justify-items-center">
        {farmers.map((farmer, index) => (
          <div
            key={index}
            className="relative bg-white shadow-lg rounded-xl overflow-hidden w-full max-w-xs sm:max-w-sm md:max-w-md transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={farmer.image}
              alt={farmer.name}
              width={500}
              height={320}
              className="w-full h-64 sm:h-72 md:h-80 object-cover"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4 flex justify-center items-center">
              <div className="flex items-center gap-4">
                {farmer.icon}
                <div>
                  <h3 className="text-lg font-bold text-white">{farmer.name}</h3>
                  <p className="text-gray-300">{farmer.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
