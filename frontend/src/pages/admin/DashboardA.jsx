import { FiUsers, FiCalendar, FiSettings, FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function DashboardA() {
  const navigate = useNavigate();

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
                <button className="w-full flex items-center space-x-2 p-3 hover:bg-blue-50 rounded-lg">
                  <FiCalendar className="text-lg" />
                  <span>Appointments</span>
                </button>
              </li>
              <li>
                <button className="w-full flex items-center space-x-2 p-3 hover:bg-blue-50 rounded-lg">
                  <FiUsers className="text-lg" />
                  <span>Patients</span>
                </button>
              </li>
              <li>
                <button className="w-full flex items-center space-x-2 p-3 hover:bg-blue-50 rounded-lg">
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
          <h1 className="text-3xl font-bold bg-white p-6 rounded-xl shadow-sm text-gray-800 mb-8">
            Dashboard
          </h1>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
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
        </div>
      </div>
    </div>
  );
}

export default DashboardA;
