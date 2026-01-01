import { useAuthStore } from "../../store/useAuthStore";



const SessionHeading = () => {
  const {authUser} = useAuthStore()

  return (
    <>
      <p className="text-xl font-bold mb-3">
        Hi,
        <span className="italic capitalize">{authUser?.firstname}</span>! 👋🏽{" "}
      </p>
      <h2 className="title">
        start a session
      </h2>
    </>
  );
};

export default SessionHeading;
