// import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Messages() {
  // const { state } = useLocation();

  const navigate = useNavigate();

  const key = sessionStorage.getItem("key");

  if (!key) {
    navigate("/login");
  }

  return (
    <section className="messages">
      <h1>Messages</h1>
    </section>
  );
}

export default Messages;
