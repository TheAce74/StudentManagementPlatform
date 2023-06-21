// import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Profile() {
  // const { state } = useLocation();

  const navigate = useNavigate();

  const key = sessionStorage.getItem("key");

  if (!key) {
    navigate("/login");
  }

  return (
    <section className="profile">
      <h1>Profile</h1>
    </section>
  );
}

export default Profile;
