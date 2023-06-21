// import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Notifications() {
  // const { state } = useLocation();

  const navigate = useNavigate();

  const key = sessionStorage.getItem("key");

  if (!key) {
    navigate("/login");
  }

  return (
    <section className="notifications">
      <h1>Notifications</h1>
    </section>
  );
}

export default Notifications;
