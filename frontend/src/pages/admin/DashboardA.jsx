// frontend/src/pages/admin/DashboardA.jsx
import {
  FiUsers,
  FiCalendar,
  FiSettings,
  FiLogOut,
  FiHome,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "../../components/Modal";

function DashboardA() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("dashboard");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    subject: "",
    description: "",
    startTime: "",
    availabilityTime: "",
    availableWeek: "",
    personName: "",
  });
  const [appointments, setAppointments] = useState([]);
  const [patients, setPatients] = useState([
    {
      id: 1,
      name: "John Doe",
      description: "Regular check-up",
      timeSlot: "09:00 AM",
      date: "2023-10-10",
      state: "active",
    },
    {
      id: 2,
      name: "Jane Smith",
      description: "Follow-up appointment",
      timeSlot: "10:30 AM",
      date: "2023-10-11",
      state: "pending",
    },
    {
      id: 3,
      name: "Alice Johnson",
      description: "Emergency visit",
      timeSlot: "02:15 PM",
      date: "2023-10-12",
      state: "reject",
    },
    {
      id: 4,
      name: "Bob Brown",
      description: "Routine check-up",
      timeSlot: "03:45 PM",
      date: "2023-10-13",
      state: "reschedule",
    },
  ]);

  const stats = [
    {
      title: "Total Patients",
      value: "2,845",
      icon: <FiUsers className="text-4xl" />,
    },
    {
      title: "Today's Appointments",
      value: "24",
      icon: <FiCalendar className="text-4xl" />,
    },
    {
      title: "Pending Requests",
      value: "12",
      icon: <FiUsers className="text-4xl" />,
    },
  ];

  const recentAppointments = [
    { id: 1, patient: "Sarah Johnson", time: "09:00 AM", status: "Confirmed" },
    { id: 2, patient: "Mike Peters", time: "10:30 AM", status: "Pending" },
    { id: 3, patient: "Emma Davis", time: "02:15 PM", status: "Confirmed" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the new appointment to the state
    setAppointments([...appointments, formData]);
    // Clear the form data
    setFormData({
      subject: "",
      description: "",
      startTime: "",
      availabilityTime: "",
      availableWeek: "",
      personName: "",
    });
    // Close the modal
    setIsModalOpen(false);
  };

  const handleStateChange = (id, newState) => {
    setPatients(
      patients.map((patient) =>
        patient.id === id ? { ...patient, state: newState } : patient
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex h-full">
        {/* Sidebar */}
        <div className="bg-white w-64 min-h-screen shadow-lg p-4">
          <div className="mb-8 ">
            <h2 className="text-2xl font-bold text-gray-800">Admin Panel</h2>
          </div>

          <nav>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setActiveSection("dashboard")}
                  className={`w-full flex items-center space-x-2 p-3 hover:bg-blue-50 rounded-lg ${
                    activeSection === "dashboard" ? "bg-blue-50" : ""
                  }`}
                >
                  <FiHome className="text-lg" />
                  <span>Dashboard</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveSection("appointments")}
                  className={`w-full flex items-center space-x-2 p-3 hover:bg-blue-50 rounded-lg ${
                    activeSection === "appointments" ? "bg-blue-50" : ""
                  }`}
                >
                  <FiCalendar className="text-lg" />
                  <span>Appointments</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveSection("patients")}
                  className={`w-full flex items-center space-x-2 p-3 hover:bg-blue-50 rounded-lg ${
                    activeSection === "patients" ? "bg-blue-50" : ""
                  }`}
                >
                  <FiUsers className="text-lg" />
                  <span>Patients</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveSection("settings")}
                  className={`w-full flex items-center space-x-2 p-3 hover:bg-blue-50 rounded-lg ${
                    activeSection === "settings" ? "bg-blue-50" : ""
                  }`}
                >
                  <FiSettings className="text-lg" />
                  <span>Settings</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/")}
                  className="w-full flex items-center space-x-2 p-3 hover:bg-red-50 text-red-600 rounded-lg"
                >
                  <FiLogOut className="text-lg" />
                  <span>Logout</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {activeSection === "dashboard" && (
            <>
              <h1 className="text-3xl font-bold bg-white p-6 rounded-xl shadow-sm text-gray-800 mb-8">
                Dashboard
              </h1>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-500 text-sm">{stat.title}</p>
                        <p className="text-3xl font-bold mt-2">{stat.value}</p>
                      </div>
                      <div className="text-blue-500">{stat.icon}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Appointments Table */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">
                  Upcoming Appointments
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-gray-500 border-b">
                        <th className="pb-3">Patient</th>
                        <th className="pb-3">Time</th>
                        <th className="pb-3">Status</th>
                        <th className="pb-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentAppointments.map((appointment) => (
                        <tr
                          key={appointment.id}
                          className="border-b last:border-b-0"
                        >
                          <td className="py-4">{appointment.patient}</td>
                          <td className="py-4">{appointment.time}</td>
                          <td className="py-4">
                            <span
                              className={`px-3 py-1 rounded-full text-sm ${
                                appointment.status === "Confirmed"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {appointment.status}
                            </span>
                          </td>
                          <td className="py-4">
                            <button className="text-blue-500 hover:text-blue-700 mr-3">
                              View
                            </button>
                            <button className="text-gray-500 hover:text-gray-700">
                              Edit
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">New appointment scheduled</p>
                      <p className="text-sm text-gray-500">
                        Sarah Johnson - 09:00 AM
                      </p>
                    </div>
                    <span className="text-sm text-gray-500">2h ago</span>
                  </div>
                  <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">Patient profile updated</p>
                      <p className="text-sm text-gray-500">Mike Peters</p>
                    </div>
                    <span className="text-sm text-gray-500">4h ago</span>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeSection === "appointments" && (
            <div>
              <h1 className="text-3xl font-bold bg-white p-6 rounded-xl shadow-sm text-gray-800 mb-8">
                Appointments
              </h1>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4"
              >
                Create Appointment
              </button>
              {/* Display the list of appointments */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">
                  Appointments List
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-gray-500 border-b">
                        <th className="pb-3">Subject</th>
                        <th className="pb-3">Description</th>
                        <th className="pb-3">Start Time</th>
                        <th className="pb-3">Availability Time</th>
                        <th className="pb-3">Available Week</th>
                        <th className="pb-3">Person Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      {appointments.map((appointment, index) => (
                        <tr key={index} className="border-b last:border-b-0">
                          <td className="py-4">{appointment.subject}</td>
                          <td className="py-4">{appointment.description}</td>
                          <td className="py-4">{appointment.startTime}</td>
                          <td className="py-4">
                            {appointment.availabilityTime}
                          </td>
                          <td className="py-4">{appointment.availableWeek}</td>
                          <td className="py-4">{appointment.personName}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeSection === "patients" && (
            <div>
              <h1 className="text-3xl font-bold bg-white p-6 rounded-xl shadow-sm text-gray-800 mb-8">
                Patients
              </h1>
              {/* Display the list of patients */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">Patient List</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-gray-500 border-b">
                        <th className="pb-3">Name</th>
                        <th className="pb-3">Description</th>
                        <th className="pb-3">Time Slot</th>
                        <th className="pb-3">Date</th>
                        <th className="pb-3">State</th>
                        <th className="pb-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {patients.map((patient) => (
                        <tr
                          key={patient.id}
                          className="border-b last:border-b-0"
                        >
                          <td className="py-4">{patient.name}</td>
                          <td className="py-4">{patient.description}</td>
                          <td className="py-4">{patient.timeSlot}</td>
                          <td className="py-4">{patient.date}</td>
                          <td className="py-4">
                            <span
                              className={`px-3 py-1 rounded-full text-sm ${
                                patient.state === "active"
                                  ? "bg-green-100 text-green-800"
                                  : patient.state === "pending"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : patient.state === "reject"
                                  ? "bg-red-100 text-red-800"
                                  : "bg-blue-100 text-blue-800"
                              }`}
                            >
                              {patient.state}
                            </span>
                          </td>
                          <td className="py-4">
                            <select
                              value={patient.state}
                              onChange={(e) =>
                                handleStateChange(patient.id, e.target.value)
                              }
                              className="border rounded px-2 py-1"
                            >
                              <option value="active">Active</option>
                              <option value="pending">Pending</option>
                              <option value="reject">Reject</option>
                              <option value="reschedule">Reschedule</option>
                            </select>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeSection === "settings" && (
            <div>
              <h1 className="text-3xl font-bold bg-white p-6 rounded-xl shadow-sm text-gray-800 mb-8">
                Settings
              </h1>
              {/* Add settings content here */}
            </div>
          )}
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
      >
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-gray-700">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg"
            ></textarea>
          </div>
          <div>
            <label className="block text-gray-700">Start Time</label>
            <input
              type="time"
              name="startTime"
              value={formData.startTime}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-gray-700">Availability Time</label>
            <input
              type="time"
              name="availabilityTime"
              value={formData.availabilityTime}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-gray-700">Available Week</label>
            <input
              type="text"
              name="availableWeek"
              value={formData.availableWeek}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-gray-700">Person Name</label>
            <input
              type="text"
              name="personName"
              value={formData.personName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default DashboardA;
