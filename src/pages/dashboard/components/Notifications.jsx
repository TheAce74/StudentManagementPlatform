import { useLocation } from "react-router-dom";

function Notifications() {
  const { state } = useLocation();
  console.log(state);
  return (
    <section className="notifications">
      <h1>Notifications</h1>
    </section>
  );
}

export default Notifications;
