/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";
import toast from "react-hot-toast";

const LoginContainer = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuthStore();

  const validateForm = () => {
    if (!formData.email.trim()) return "Email is required"
    if (!/\S+@\S+\.\S+/.test(formData.email))
      return "Invalid email format"
    if (!formData.password) return "Password is required"

    return null;
  };

  const handleSubmit = async (e) => {
    // TODO : validation
    e.preventDefault();

    const error = validateForm()
    if(error) {
      return toast.error(error)
    }

    const success = await login(formData)
    if (success) {
      return toast.success("logged in successfully")
    }
  };

  return (
    <div className="container">
      <form className="space-y-10" onSubmit={handleSubmit}>
        <input
          type="mail"
          className="input"
          placeholder="Email..."
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="password"
          className="input"
          placeholder="Password..."
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <button type="submit" className="btn bg-green">
          let's go
        </button>
      </form>
      <p className="text-white text-center mt-4">
        Don't have an account yet?
        <Link to={"/signup"}>
          {" "}
          <span className="underline">Sign up</span>
        </Link>{" "}
      </p>
    </div>
  );
};
export default LoginContainer;
