/* eslint-disable react/prop-types */
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import SessionPage from "./pages/SessionPage";
import StatsPage from "./pages/StatsPage";
import HelpPage from "./pages/HelpPage";
import HistoricPage from "./pages/HistoricPage";
import SettingPage from "./pages/SettingPage";
import MainNavbar from "./components/common/MainNavbar";
import RecapPage from "./pages/RecapPage";
import AccountSettings from "./components/settings/subPages/AccountSettings";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";
import WelcomePage from "./pages/WelcomePage";

function App() {
  const location = useLocation();
  const HIDE_NAVBAR_ROUTES = ["/login", "/signup", "/"];
  const hideNavbar = HIDE_NAVBAR_ROUTES.includes(location.pathname);

  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <div className="bg-pink-100">
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route
          path="/session"
          element={
            <ProtectedRoute>
              <SessionPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={!authUser ? <LoginPage /> : <Navigate to={"/session"} />}
        />
        <Route
          path="/signup"
          element={!authUser ? <SignUpPage /> : <Navigate to={"/session"} />}
        />
        <Route
          path="/recap"
          element={
            <ProtectedRoute>
              <RecapPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/setting/account"
          element={
            <ProtectedRoute>
              <AccountSettings />
            </ProtectedRoute>
          }
        />
        <Route
          path="/stats"
          element={
            <ProtectedRoute>
              <StatsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/historic"
          element={
            <ProtectedRoute>
              <HistoricPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/help"
          element={
            <ProtectedRoute>
              <HelpPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/setting"
          element={authUser ? <SettingPage /> : <Navigate to={"/"} />}
        />
      </Routes>
      {!hideNavbar && <MainNavbar />}
    </div>
  );
}

export default App;

const ProtectedRoute = ({ children }) => {
  const { authUser } = useAuthStore();

  if (!authUser) {
    return <Navigate to={"/login"} />;
  }

  return children;
};
