import { useLocation } from "react-router-dom";

function Notifications() {
  const { state } = useLocation();
  console.log(state);
  return <h1>Notifications</h1>;
}

export default Notifications;
