import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shared from "./pages/registration/Shared";
import Login from "./pages/registration/components/Login";
import Signup from "./pages/registration/components/Signup";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Shared />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
        {/* error page */}
        <Route path="*" element={<div />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
