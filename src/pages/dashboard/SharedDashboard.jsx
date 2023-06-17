import logo from "../../assets/logo.png";
import { Link, Outlet, useLocation } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { FaUser, FaBell } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { BsFillClipboard2DataFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";

function SharedDashboard() {
  const { state } = useLocation();

  return (
    <div className="dashboard-grid">
      <div>
        <div className="dashboard-grid__logo">
          <img src={logo} alt="" />
          <h2>FUTO</h2>
        </div>
        <div>
          <Link to="/dashboard" state={state}>
            <MdSpaceDashboard />
            <span>Dashboard</span>
          </Link>
          <Link to="/dashboard/profile" state={state}>
            <FaUser />
            <span>Profile</span>
          </Link>
          <Link to="/dashboard/messages" state={state}>
            <IoMail />
            <span>Messages</span>
          </Link>
          <Link to="/dashboard/notifications" state={state}>
            <FaBell />
            <span>Notifications</span>
          </Link>
          <Link to="/dashboard/results" state={state}>
            <BsFillClipboard2DataFill />
            <span>Results</span>
          </Link>
        </div>
        <Link to="/" className="logout">
          <FiLogOut />
          <span>Logout</span>
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default SharedDashboard;
