import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const WelcomeContainer = () => {
  const { authUser } = useAuthStore();
  const navigate = useNavigate();
  const handleEnterHomepage = () => {
    if (authUser) {
      navigate("/session");
    } else {
      navigate("/login");
    }
  };

  useGSAP(() => {
    const tl = gsap.timeline({repeat:-1, yoyo: true})
    tl.fromTo(
      "#btn",
      {
        // scale: 0.9,
        y: -20,
      },
      {
        // scale: 1,
        y: 0,

        repeat: 8,
        yoyo: true,
        ease: "power1.inOut",
        duration: .7
      }
    ).to({y: 0}, {duration: 2})
  }, []);
  return (
    <div className="bg-welcome">
      <div className="container flex flex-col justify-between h-screen items-center py-16">
        <div className="">
          <img
            src="/welcome_title.png"
            alt="welcome-title"
            className="w-full"
          />
        </div>
        <button
          id="btn"
          className="cursor-pointer"
          onClick={() => handleEnterHomepage()}
        >
          <img src="/enter_btn.png" alt="enter_btn" className="w-full" />
        </button>
      </div>
    </div>
  );
};
export default WelcomeContainer;
