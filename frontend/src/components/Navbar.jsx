import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center pt-5 position-sticky top-0 z-10">
      <div className=" flex justify-between align-middle bg-gray-100 w-350 rounded-lg backdrop-blur-md">
        <div className="p-3">Logo</div>
        <div>
          <ul className="flex space-x-4 justify-end p-3">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>
              <button
                onClick={() => navigate("/login")}
                className="bg-blue-500 text-white px-2 pb-1 cursor-pointer rounded"
              >
                Login
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
