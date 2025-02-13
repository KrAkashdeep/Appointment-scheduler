import {
  ChartBarIcon,
  CalendarIcon,
  ClockIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

export default function Sidebar({ selectedView, setSelectedView }) {
  return (
    <aside className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-40">
      <div className="p-6 border-b">
        <h2 className="text-xl font-semibold">Admin Dashboard</h2>
      </div>
      <nav className="p-4 space-y-2">
        {[
          { id: "dashboard", icon: ChartBarIcon, label: "Analytics" },
          { id: "appointments", icon: CalendarIcon, label: "Appointments" },
          { id: "schedule", icon: ClockIcon, label: "Working Hours" },
          { id: "staff", icon: UserGroupIcon, label: "Staff" },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedView(item.id)}
            className={`w-full flex items-center p-3 rounded-lg ${
              selectedView === item.id
                ? "bg-blue-50 text-blue-600"
                : "hover:bg-gray-100"
            }`}
          >
            <item.icon className="w-5 h-5 mr-3" />
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
