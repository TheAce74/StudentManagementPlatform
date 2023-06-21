// import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Notifications() {
  // const { state } = useLocation();

  const navigate = useNavigate();

 const key = sessionStorage.getItem("key");

 useEffect(() => {
   if (!key) {
     navigate("/login");
   }
 }, [key, navigate]);

  return (
    <section className="notifications">
      <h1>Notifications</h1>
    </section>
  );
}

export default Notifications;
