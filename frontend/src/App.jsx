import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";

import { useTheme } from "./hooks/useTheme";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import UserProfile from "./components/UserProfile";
import Landing from "./pages/Landing";
import TodoApp from "./pages/TodoApp";

export default function App() {
  const { isDark, toggleTheme } = useTheme();
  const [filters, setFilters] = useState({
    status: "all",
    priority: "all",
    category: "",
  });

  return (
    <Router>
      <MainLayout
        isDark={isDark}
        toggleTheme={toggleTheme}
        filters={filters}
        setFilters={setFilters}
      />
    </Router>
  );
}

function MainLayout({ isDark, toggleTheme, filters, setFilters }) {
  const location = useLocation();
  const isLanding = location.pathname === "/";

  return (
    <div
      className={`min-h-screen ${
        isDark
          ? "bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white"
          : "bg-gradient-to-br from-gray-50 via-white to-gray-50 text-gray-900"
      } transition-colors duration-300`}
    >
      <div className="container mx-auto px-4 py-8 ">
        {!isLanding && (
          <div className="flex justify-between items-center mb-4">
            <Header isDark={isDark} onThemeToggle={toggleTheme} />
            <UserProfile />
          </div>
        )}

        <Routes>
          <Route path="/" element={<Landing isDark={isDark} />} />
          <Route path="/signup" element={<Signup isDark={isDark} />} />
          <Route path="/login" element={<Login isDark={isDark} />} />
          <Route
            path="/todos"
            element={
              <ProtectedRoute>
                <TodoApp
                  isDark={isDark}
                  filters={filters}
                  setFilters={setFilters}
                />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
}
