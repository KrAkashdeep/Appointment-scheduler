import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import DashboardC from "./pages/customer/DashboardC";
import DashboardA from "./pages/admin/DashboardA";
import CustomerProfile from "./pages/customer/CustomerProfile";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/customer" element={<DashboardC />}></Route>
          <Route path="/admin" element={<DashboardA />}></Route>
          <Route path="/profile" element={<CustomerProfile />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
