import logo from "../../assets/logo.png";
import { Link, Outlet, useLocation } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { FaUser, FaBell } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { BsFillClipboard2DataFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import { useState } from "react";

function SharedDashboard() {
  const { state } = useLocation();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleLogOut = () => {
    sessionStorage.removeItem("key");
  };

  return (
    <div className="dashboard-grid">
      <button className="menu" onClick={handleOpen}>
        {!open ? <AiOutlineMenu /> : <CgClose />}
      </button>
      <div className={open ? "open" : ""}>
        <div className="dashboard-grid__logo">
          <img src={logo} alt="" />
          <h2>FUTO</h2>
        </div>
        <div>
          <Link to="/dashboard" state={state} data-title="Dashboard">
            <MdSpaceDashboard />
            <span>Dashboard</span>
          </Link>
          <Link to="/dashboard/profile" state={state} data-title="Profile">
            <FaUser />
            <span>Profile</span>
          </Link>
          <Link to="/dashboard/messages" state={state} data-title="Messages">
            <IoMail />
            <span>Messages</span>
          </Link>
          <Link
            to="/dashboard/notifications"
            state={state}
            data-title="Notifications"
          >
            <FaBell />
            <span>Notifications</span>
          </Link>
          <Link to="/dashboard/results" state={state} data-title="Results">
            <BsFillClipboard2DataFill />
            <span>Results</span>
          </Link>
        </div>
        <Link
          to="/"
          className="logout"
          data-title="Logout"
          onClick={handleLogOut}
        >
          <FiLogOut />
          <span>Logout</span>
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default SharedDashboard;
