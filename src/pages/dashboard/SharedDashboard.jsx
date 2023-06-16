import logo from "../../assets/logo.png";
import { Link, Outlet } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { FaUser, FaBell } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { BsFillClipboard2DataFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";

function SharedDashboard() {
  return (
    <div className="dashboard-grid">
      <div>
        <div>
          <img src={logo} alt="" />
          <h2>FUTO</h2>
        </div>
        <div>
          <Link to="/dashboard">
            <MdSpaceDashboard />
            <span>Dashboard</span>
          </Link>
          <Link to="/dashboard/profile">
            <FaUser />
            <span>Profile</span>
          </Link>
          <Link to="/dashboard/messages">
            <IoMail />
            <span>Messages</span>
          </Link>
          <Link to="/dashboard/notifications">
            <FaBell />
            <span>Notifications</span>
          </Link>
          <Link to="/dashboard/results">
            <BsFillClipboard2DataFill />
            <span>Results</span>
          </Link>
        </div>
        <Link to="/">
          <FiLogOut />
          <span>Logout</span>
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default SharedDashboard;
