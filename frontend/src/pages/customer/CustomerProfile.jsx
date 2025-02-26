import { useState } from "react";
import { FiUser, FiLock, FiCalendar, FiUpload, FiSave } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function CustomerProfile() {
  const navigate = useNavigate();
  const [editMode, setEditMode] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");
  const [profileImage, setProfileImage] = useState(null);
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 234 567 890",
    address: "123 Main St, City",
    password: "",
  });

  const appointments = [
    {
      id: 1,
      service: "Dental Checkup",
      date: "2024-03-20",
      time: "10:00 AM",
      status: "Confirmed",
    },
    {
      id: 2,
      service: "Eye Exam",
      date: "2024-03-22",
      time: "2:30 PM",
      status: "Pending",
    },
  ];

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode(false);
    // Add profile update logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">My Profile</h1>
          <button
            onClick={() => navigate("/customer")}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
          >
            Back to Dashboard
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          {/* Profile Header */}
          <div className="flex items-center mb-8">
            <div className="relative group">
              <img
                src={profileImage || "/default-avatar.png"}
                className="w-24 h-24 rounded-full border-4 border-blue-100"
                alt="Profile"
              />
              {editMode && (
                <label className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full cursor-pointer">
                  <FiUpload className="text-white" />
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                </label>
              )}
            </div>
            <div className="ml-6">
              <h2 className="text-2xl font-bold">{userData.name}</h2>
              <p className="text-gray-600">{userData.email}</p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b mb-6">
            <button
              className={`px-4 py-2 flex items-center ${
                activeTab === "profile" ? "border-b-2 border-blue-500" : ""
              }`}
              onClick={() => setActiveTab("profile")}
            >
              <FiUser className="mr-2" /> Personal Info
            </button>
            <button
              className={`px-4 py-2 flex items-center ${
                activeTab === "security" ? "border-b-2 border-blue-500" : ""
              }`}
              onClick={() => setActiveTab("security")}
            >
              <FiLock className="mr-2" /> Security
            </button>
            <button
              className={`px-4 py-2 flex items-center ${
                activeTab === "appointments" ? "border-b-2 border-blue-500" : ""
              }`}
              onClick={() => setActiveTab("appointments")}
            >
              <FiCalendar className="mr-2" /> Appointments
            </button>
          </div>

          {/* Profile Content */}
          {activeTab === "profile" && (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    value={userData.name}
                    onChange={(e) =>
                      setUserData({ ...userData, name: e.target.value })
                    }
                    className="w-full p-3 border border-gray-200 rounded-lg"
                    disabled={!editMode}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={userData.email}
                    onChange={(e) =>
                      setUserData({ ...userData, email: e.target.value })
                    }
                    className="w-full p-3 border border-gray-200 rounded-lg"
                    disabled={!editMode}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={userData.phone}
                    onChange={(e) =>
                      setUserData({ ...userData, phone: e.target.value })
                    }
                    className="w-full p-3 border border-gray-200 rounded-lg"
                    disabled={!editMode}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Address</label>
                  <input
                    type="text"
                    value={userData.address}
                    onChange={(e) =>
                      setUserData({ ...userData, address: e.target.value })
                    }
                    className="w-full p-3 border border-gray-200 rounded-lg"
                    disabled={!editMode}
                  />
                </div>
              </div>

              <div className="mt-6 flex justify-end gap-4">
                {editMode ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setEditMode(false)}
                      className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 flex items-center"
                    >
                      <FiSave className="mr-2" /> Save Changes
                    </button>
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={() => setEditMode(true)}
                    className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
                  >
                    Edit Profile
                  </button>
                )}
              </div>
            </form>
          )}

          {/* Security Tab */}
          {activeTab === "security" && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Change Password</h3>
                <div className="space-y-4">
                  <input
                    type="password"
                    placeholder="Current Password"
                    className="w-full p-3 border border-gray-200 rounded-lg"
                  />
                  <input
                    type="password"
                    placeholder="New Password"
                    className="w-full p-3 border border-gray-200 rounded-lg"
                  />
                  <input
                    type="password"
                    placeholder="Confirm New Password"
                    className="w-full p-3 border border-gray-200 rounded-lg"
                  />
                  <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
                    Update Password
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Appointments Tab */}
          {activeTab === "appointments" && (
            <div className="space-y-4">
              {appointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className="p-4 border rounded-lg hover:bg-gray-50"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold">{appointment.service}</h4>
                      <p className="text-gray-600">
                        {appointment.date} at {appointment.time}
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        appointment.status === "Confirmed"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {appointment.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CustomerProfile;
