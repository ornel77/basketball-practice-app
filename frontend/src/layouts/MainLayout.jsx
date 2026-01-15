import { Outlet } from "react-router-dom"
import MainNavbar from "../components/common/MainNavbar"

const MainLayout = () => {
  return (
    <>
      <Outlet />
      <MainNavbar />
    </>
  )
}
export default MainLayout