
import SessionHeading from "../components/session/SessionHeading";
import SessionForm from "../components/session/SessionForm";

const SessionPage = () => {
  return (
    <div className="bg-pink-100 pt-6 text-slate-800 pb-16">
      <div className="container">
        <SessionHeading />
        <SessionForm />
      </div>
    </div>
  );
};

export default SessionPage;
