import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/global/sidebar/Sidebar";
import ProtectedRoute from "./components/ProtectedRoute";
import { ToastContainer } from "react-toastify";

import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import CatchAllPage from "./pages/CatchAllPage";

export default function App() {
  return (
    <Router>
      <Sidebar />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<DashboardPage />} />
          </Route>

          <Route path="*" element={<CatchAllPage />} />
        </Routes>
        <ToastContainer />
    </Router>
  );
}
