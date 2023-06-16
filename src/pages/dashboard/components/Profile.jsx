import { useLocation } from "react-router-dom";

function Profile() {
  const { state } = useLocation();
  console.log(state);
  return <h1>Profile</h1>;
}

export default Profile;
