import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";

const SignUpContainer = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const {signup, isSigninUp} = useAuthStore()

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO : validation form
    signup(formData)
  }

  return (
    <div className="container">
      <form className="space-y-10" onSubmit={handleSubmit}>
        <div className="flex justify-between gap-4">
          <input
            type="text"
            className="input"
            placeholder="First name..."
            onChange={(e) =>
              setFormData({ ...formData, firstname: e.target.value })
            }
          />
          <input
            type="text"
            className="input"
            placeholder="Last name..."
            onChange={(e) =>
              setFormData({ ...formData, lastname: e.target.value })
            }
          />
        </div>
        <input
          type="mail"
          className="input"
          placeholder="Email..."
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />
        <input
          type="password"
          className="input"
          placeholder="Password..."
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        {/* TODO : Loading state */}
        <button type="submit" className="btn bg-green">
          Create an account
        </button>
      </form>
      <p className="text-white text-center mt-4">
        Already have an account?{" "}
        <Link to={"/login"}>
          {" "}
          <span className="underline">Log in</span>
        </Link>{" "}
      </p>
    </div>
  );
};
export default SignUpContainer;
