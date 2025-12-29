import { Route, Routes, useLocation } from "react-router-dom";
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


function App() {
  const location = useLocation()
  const HIDE_NAVBAR_ROUTES = ["/login", "/signup"]
  const hideNavbar = HIDE_NAVBAR_ROUTES.includes(location.pathname)
  return (
    
    <div className="bg-pink-100">
      <Routes>
        <Route path="/" element={<SessionPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/recap" element={<RecapPage />} />
        <Route path="/setting/account" element={<AccountSettings />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/historic" element={<HistoricPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/setting" element={<SettingPage />} />
      </Routes>
      {!hideNavbar && <MainNavbar />}
    </div>
  );
}

export default App;
