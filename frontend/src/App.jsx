/* eslint-disable react/prop-types */
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

import WelcomePage from "./pages/WelcomePage";
import GuidePage from "./pages/GuidePage";
import SessionPage from "./pages/SessionPage";
import StatsPage from "./pages/StatsPage";
import HistoricPage from "./pages/HistoricPage";
import SettingPage from "./pages/SettingPage";
import RecapPage from "./pages/RecapPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ErrorPage from "./pages/ErrorPage";

import LoaderContainer from "./components/common/LoaderContainer";

import NoNavbarLayout from "./layouts/NoNavbarLayout";
import MainLayout from "./layouts/MainLayout";

import AccountSettings from "./components/settings/subPages/AccountSettings";

function App() {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth && !authUser) {
    return <LoaderContainer />;
  }

  return (
    <div className="bg-pink-100">
      <Routes>
        {/* NO NAVBAR LAYOUT */}
        <Route element={<NoNavbarLayout />}>
          <Route path="/" element={<WelcomePage />} />

          <Route
            path="*"
            element={
              <ProtectedRoute>
                <ErrorPage />
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
        </Route>

        {/* MAIN LAYOUT */}
        <Route element={<MainLayout />}>
          <Route
            path="/session"
            element={
              // <ProtectedRoute>
                <SessionPage />
              // </ProtectedRoute>
            }
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
            path="/settings/account"
            element={
              // <ProtectedRoute>
                <AccountSettings />
              // </ProtectedRoute>
            }
          />
          <Route
            path="/stats"
            element={
              // <ProtectedRoute>
                <StatsPage />
              // </ProtectedRoute>
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
            path="/guide"
            element={
              // <ProtectedRoute>
                <GuidePage />
              // </ProtectedRoute>
            }
          />
          {/* <Route
            path="/settings"
            element={authUser ? <SettingPage /> : <Navigate to={"/"} />}
          /> */}
          <Route
            path="/settings"
            element={<SettingPage />}
          />
        </Route>
      </Routes>
      <Toaster />
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
