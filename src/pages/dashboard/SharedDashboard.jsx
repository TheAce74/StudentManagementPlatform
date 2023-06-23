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
  const [currentLink, setCurrentLink] = useState(0);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleLogOut = () => {
    sessionStorage.removeItem("key");
  };

  const handleChangeCurrentLink = (value) => {
    setCurrentLink(value);
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
          <Link
            to="/dashboard"
            state={state}
            data-title="Dashboard"
            className={currentLink === 0 ? "active" : ""}
            onClick={() => handleChangeCurrentLink(0)}
          >
            <MdSpaceDashboard />
            <span>Dashboard</span>
          </Link>
          <Link
            to="/dashboard/profile"
            state={state}
            data-title="Profile"
            className={currentLink === 1 ? "active" : ""}
            onClick={() => handleChangeCurrentLink(1)}
          >
            <FaUser />
            <span>Profile</span>
          </Link>
          <Link
            to="/dashboard/messages"
            state={state}
            data-title="Messages"
            className={currentLink === 2 ? "active" : ""}
            onClick={() => handleChangeCurrentLink(2)}
          >
            <IoMail />
            <span>Messages</span>
          </Link>
          <Link
            to="/dashboard/notifications"
            state={state}
            data-title="Notifications"
            className={currentLink === 3 ? "active" : ""}
            onClick={() => handleChangeCurrentLink(3)}
          >
            <FaBell />
            <span>Notifications</span>
          </Link>
          <Link
            to="/dashboard/results"
            state={state}
            data-title="Results"
            className={currentLink === 4 ? "active" : ""}
            onClick={() => handleChangeCurrentLink(4)}
          >
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
