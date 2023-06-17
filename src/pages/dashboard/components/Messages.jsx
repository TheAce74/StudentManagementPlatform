import { useLocation } from "react-router-dom";

function Messages() {
  const { state } = useLocation();
  console.log(state);
  return (
    <section className="messages">
      <h1>Messages</h1>
    </section>
  );
}

export default Messages;
