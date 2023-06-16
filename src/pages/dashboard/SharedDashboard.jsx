import logo from "../../assets/logo.png";
import { Link, Outlet } from "react-router-dom";

function SharedDashboard() {
  return (
    <div className="dashboard-grid">
      <div>
        <div>
          <img src={logo} alt="" />
          <h2>FUTO</h2>
        </div>
        <div>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/dashboard/profile">Profile</Link>
          <Link to="/dashboard/messages">Messages</Link>
          <Link to="/dashboard/notifications">Notifications</Link>
          <Link to="/dashboard/results">Results</Link>
        </div>
        <Link to="/">Logout</Link>
      </div>
      <Outlet />
    </div>
  );
}

export default SharedDashboard;
