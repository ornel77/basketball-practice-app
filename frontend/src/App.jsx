import { Route, Routes } from "react-router-dom";
import SessionPage from "./pages/SessionPage";
import StatsPage from "./pages/StatsPage";
import HelpPage from "./pages/HelpPage";
import HistoricPage from "./pages/HistoricPage";
import SettingPage from "./pages/SettingPage";
import MainNavbar from "./components/common/MainNavbar";
import RecapPage from "./pages/RecapPage";
import AccountSettings from "./components/settings/subPages/AccountSettings";


function App() {
  return (
    <div className="bg-pink-100">
      <Routes>
        <Route path="/" element={<SessionPage />} />
        <Route path="/recap" element={<RecapPage />} />
        <Route path="/setting/account" element={<AccountSettings />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/historic" element={<HistoricPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/setting" element={<SettingPage />} />
      </Routes>
      <MainNavbar />
    </div>
  );
}

export default App;
