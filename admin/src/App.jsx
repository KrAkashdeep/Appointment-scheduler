import { useState } from "react";
import {
  ChartBarIcon,
  CalendarIcon,
  ClockIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

export default function AdminPanel() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedView, setSelectedView] = useState("dashboard");
  const [workingHours, setWorkingHours] = useState({
    start: "09:00",
    end: "17:00",
    days: [true, true, true, true, true, false, false],
  });

  // Demo data
  const appointments = [
    {
      id: 1,
      client: "John Doe",
      time: "2024-03-20 14:30",
      status: "confirmed",
      service: "Haircut",
    },
    {
      id: 2,
      client: "Jane Smith",
      time: "2024-03-21 10:00",
      status: "pending",
      service: "Coloring",
    },
  ];

  const staffMembers = [
    { id: 1, name: "Sarah Johnson", role: "Stylist", appointments: 15 },
    { id: 2, name: "Mike Chen", role: "Barber", appointments: 22 },
  ];

  const analytics = {
    totalAppointments: 37,
    revenue: 2840,
    peakHours: ["10:00", "14:00"],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Sidebar Toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="md:hidden p-4 fixed left-0 top-0 z-50"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform z-40`}
      >
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">Admin Dashboard</h2>
        </div>
        <nav className="p-4 space-y-2">
          <button
            onClick={() => setSelectedView("dashboard")}
            className={`w-full flex items-center p-3 rounded-lg ${
              selectedView === "dashboard"
                ? "bg-blue-50 text-blue-600"
                : "hover:bg-gray-100"
            }`}
          >
            <ChartBarIcon className="w-5 h-5 mr-3" />
            Analytics
          </button>
          <button
            onClick={() => setSelectedView("appointments")}
            className={`w-full flex items-center p-3 rounded-lg ${
              selectedView === "appointments"
                ? "bg-blue-50 text-blue-600"
                : "hover:bg-gray-100"
            }`}
          >
            <CalendarIcon className="w-5 h-5 mr-3" />
            Appointments
          </button>
          <button
            onClick={() => setSelectedView("schedule")}
            className={`w-full flex items-center p-3 rounded-lg ${
              selectedView === "schedule"
                ? "bg-blue-50 text-blue-600"
                : "hover:bg-gray-100"
            }`}
          >
            <ClockIcon className="w-5 h-5 mr-3" />
            Working Hours
          </button>
          <button
            onClick={() => setSelectedView("staff")}
            className={`w-full flex items-center p-3 rounded-lg ${
              selectedView === "staff"
                ? "bg-blue-50 text-blue-600"
                : "hover:bg-gray-100"
            }`}
          >
            <UserGroupIcon className="w-5 h-5 mr-3" />
            Staff Management
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="md:ml-64 p-6">
        {/* Analytics Dashboard */}
        {selectedView === "dashboard" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-gray-500 text-sm font-medium">
                Total Appointments
              </h3>
              <p className="text-3xl font-semibold mt-2">
                {analytics.totalAppointments}
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-gray-500 text-sm font-medium">
                Monthly Revenue
              </h3>
              <p className="text-3xl font-semibold mt-2">
                ${analytics.revenue}
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-gray-500 text-sm font-medium">Peak Hours</h3>
              <p className="text-xl font-semibold mt-2">
                {analytics.peakHours.join(", ")}
              </p>
            </div>

            <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-4">
                Appointments by Day
              </h3>
              <div className="h-64 bg-gray-50 rounded-lg"></div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Weekly Trends</h3>
              <div className="h-64 bg-gray-50 rounded-lg"></div>
            </div>
          </div>
        )}

        {/* Appointments Management */}
        {selectedView === "appointments" && (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold">Appointment Management</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                      Client
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                      Time
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                      Service
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {appointments.map((appointment) => (
                    <tr key={appointment.id}>
                      <td className="px-6 py-4">{appointment.client}</td>
                      <td className="px-6 py-4">
                        {new Date(appointment.time).toLocaleString()}
                      </td>
                      <td className="px-6 py-4">{appointment.service}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-2 py-1 rounded-full text-sm ${
                            appointment.status === "confirmed"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {appointment.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 space-x-2">
                        <button className="text-blue-600 hover:text-blue-800">
                          Edit
                        </button>
                        <button className="text-red-600 hover:text-red-800">
                          Cancel
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Working Hours Management */}
        {selectedView === "schedule" && (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6">
              Working Hours Configuration
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-4">Daily Schedule</h3>
                <div className="space-y-4">
                  {[
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ].map((day, index) => (
                    <div
                      key={day}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={workingHours.days[index]}
                          onChange={(e) => {
                            const newDays = [...workingHours.days];
                            newDays[index] = e.target.checked;
                            setWorkingHours({ ...workingHours, days: newDays });
                          }}
                          className="rounded text-blue-600"
                        />
                        <span>{day}</span>
                      </label>
                      {workingHours.days[index] && (
                        <div className="flex space-x-2">
                          <input
                            type="time"
                            value={workingHours.start}
                            onChange={(e) =>
                              setWorkingHours({
                                ...workingHours,
                                start: e.target.value,
                              })
                            }
                            className="border rounded p-1"
                          />
                          <span>-</span>
                          <input
                            type="time"
                            value={workingHours.end}
                            onChange={(e) =>
                              setWorkingHours({
                                ...workingHours,
                                end: e.target.value,
                              })
                            }
                            className="border rounded p-1"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-4">Preview</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  {/* Calendar preview component would go here */}
                </div>
              </div>
            </div>
            <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Save Schedule
            </button>
          </div>
        )}

        {/* Staff Management */}
        {selectedView === "staff" && (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b flex justify-between items-center">
              <h2 className="text-xl font-semibold">Staff Management</h2>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Add New Staff
              </button>
            </div>
            <div className="divide-y divide-gray-200">
              {staffMembers.map((staff) => (
                <div
                  key={staff.id}
                  className="p-6 flex items-center justify-between hover:bg-gray-50"
                >
                  <div>
                    <h3 className="font-medium">{staff.name}</h3>
                    <p className="text-gray-600">{staff.role}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-500">
                      {staff.appointments} appointments
                    </span>
                    <button className="text-blue-600 hover:text-blue-800">
                      Edit
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
