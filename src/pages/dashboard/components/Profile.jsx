// import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Profile() {
  // const { state } = useLocation();

  const navigate = useNavigate();

 const key = sessionStorage.getItem("key");

 useEffect(() => {
   if (!key) {
     navigate("/login");
   }
 }, [key, navigate]);

  return (
    <section className="profile">
      <h1>Profile</h1>
    </section>
  );
}

export default Profile;
