// import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Messages() {
  // const { state } = useLocation();

  const navigate = useNavigate();

  const key = sessionStorage.getItem("key");

  useEffect(() => {
    if (!key) {
      navigate("/login");
    }
  }, [key, navigate]);

  return (
    <section className="messages">
      <h1>Messages</h1>
    </section>
  );
}

export default Messages;
