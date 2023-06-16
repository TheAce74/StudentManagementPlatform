import logo from "../../assets/logo.png";
import { Link, Outlet } from "react-router-dom";

function SharedRegistration() {
  return (
    <>
      <header className="header">
        <Link to="/" title="Go to home">
          <img src={logo} alt="go to home" className="header__logo" />
        </Link>
        <h2>Federal University of Technology Owerri</h2>
      </header>
      <Outlet />
    </>
  );
}

export default SharedRegistration;
