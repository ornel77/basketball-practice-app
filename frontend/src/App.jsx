import { Route, Routes } from "react-router-dom"
import SessionPage from "./pages/SessionPage"
import StatsPage from "./pages/StatsPage"
import HelpPage from "./pages/HelpPage"
import HistoricPage from './pages/HistoricPage'
import SettingPage from './pages/SettingPage'
import MainNavbar from "./components/common/MainNavbar"
import FirstAngle from "./components/session/angles/FirstAngle"
import SecondAngle from "./components/session/angles/SecondAngle"
import ThirdAngle from "./components/session/angles/ThirdAngle"
import FourthAngle from "./components/session/angles/FourthAngle"
import FifthAngle from "./components/session/angles/FifthAngle"

function App() {
 

  return (
    <div className="bg-pink-100">
      <Routes>
        <Route path="/" element={ <SessionPage /> }/>
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/historic" element={<HistoricPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/setting" element={<SettingPage />} />

        <Route path="/first" element={<FirstAngle />} />
          <Route path="/second" element={<SecondAngle />} />
          <Route path="/third" element={<ThirdAngle />} />
          <Route path="/fourth" element={<FourthAngle />} />
          <Route path="/fifth" element={<FifthAngle />} />
      </Routes>
      <MainNavbar />
    </div>
  )
}

export default App
