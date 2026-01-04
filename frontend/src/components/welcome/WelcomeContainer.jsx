import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";


const WelcomeContainer = () => {
  const {authUser} = useAuthStore()
  const navigate = useNavigate()
  const handleEnterHomepage = () => {
    if(authUser) {
      navigate('/homepage')
    } else {
      navigate("/login")
    }
  }
  return (
    <div className="bg-welcome">
      <div className="container flex flex-col justify-between h-screen items-center py-16">
        <div className="">
          <img src="/welcome_title.png" alt="welcome-title" className="w-full" />
        </div>
        <button className=" cursor-pointer" onClick={() => handleEnterHomepage()}>
          <img src="/enter_btn.png" alt="enter_btn" className="w-full" />
        </button>
      </div>
    </div>
  );
};
export default WelcomeContainer;
