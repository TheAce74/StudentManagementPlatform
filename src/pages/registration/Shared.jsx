import logo from "../../assets/logo.png";
import { Outlet } from "react-router-dom";

function Shared() {
  return (
    <>
      <header className="header">
        <img src={logo} alt="" className="logo" />
        <h2>Federal University of Technology Owerri</h2>
      </header>
      <Outlet />
    </>
  );
}

export default Shared;
