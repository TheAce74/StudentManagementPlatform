import { useLocation } from "react-router-dom";

function Profile() {
  const { state } = useLocation();
  console.log(state);
  return (
    <section className="profile">
      <h1>Profile</h1>
    </section>
  );
}

export default Profile;
