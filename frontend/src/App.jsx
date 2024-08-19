import { Route, Routes } from "react-router-dom"
import SessionPage from "./pages/SessionPage"
import StatsPage from "./pages/StatsPage"
import HelpPage from "./pages/HelpPage"
import HistoricPage from './pages/HistoricPage'
import SettingPage from './pages/SettingPage'
import MainNavbar from "./components/common/MainNavbar"

function App() {
 

  return (
    <>
      <Routes>
        <Route path="/" element={ <SessionPage /> }/>
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/historic" element={<HistoricPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/setting" element={<SettingPage />} />
      </Routes>
      <MainNavbar />
    </>
  )
}

export default App
