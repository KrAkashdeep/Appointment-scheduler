import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function DashboardC() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  // Mock services data
  const services = [
    {
      id: 1,
      name: "General Checkup",
      description: "Routine health examination",
      price: 100,
      duration: "30 mins",
    },
    {
      id: 2,
      name: "Dental Care",
      description: "Teeth cleaning and examination",
      price: 150,
      duration: "45 mins",
    },
    {
      id: 3,
      name: "Eye Exam",
      description: "Complete vision assessment",
      price: 120,
      duration: "40 mins",
    },
  ];

  const filteredServices = services.filter(
    (service) =>
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Welcome, Akash</h1>
          <div className="flex gap-4">
            <button
              onClick={() => navigate("/profile")}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Profile
            </button>
            <button
              onClick={() => navigate("/")}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Search and Services Grid */}
        <div className="mb-8 relative">
          <input
            type="text"
            placeholder="Search services..."
            className="w-full p-4 rounded-lg border border-gray-200 pl-12"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FiSearch className="absolute left-4 top-5 text-gray-400 text-xl" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>${service.price}</span>
                <span>{service.duration}</span>
              </div>
              <button className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                Book Appointment
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DashboardC;
