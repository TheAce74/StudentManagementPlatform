import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedRegistration from "./pages/registration/SharedRegistration";
import Login from "./pages/registration/components/Login";
import Home from "./pages/registration/components/Home";
import SharedDashboard from "./pages/dashboard/SharedDashboard";
import Dashboard from "./pages/dashboard/components/Dashboard";
import Profile from "./pages/dashboard/components/Profile";
import Messages from "./pages/dashboard/components/Messages";
import Notifications from "./pages/dashboard/components/Notifications";
import Results from "./pages/dashboard/components/Results";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedRegistration />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="dashboard" element={<SharedDashboard />}>
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="messages" element={<Messages />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="results" element={<Results />} />
        </Route>
        {/* error page */}
        <Route path="*" element={<div />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
