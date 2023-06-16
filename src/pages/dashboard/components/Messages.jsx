import { useLocation } from "react-router-dom";

function Messages() {
  const { state } = useLocation();
  console.log(state);
  return <h1>Messages</h1>;
}

export default Messages;
