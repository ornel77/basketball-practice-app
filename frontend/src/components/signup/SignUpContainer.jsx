import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";

const SignUpContainer = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const { signup, isSigninUp } = useAuthStore();

  const validationForm = () => {
    if (!formData.firstname.trim()) return "First name is required";
    if (!formData.lastname.trim()) return "Last name is required";
    if (!formData.email.trim()) return "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email)) return "Invalid email format";
    if (!formData.password) return "Password is required";
    if (formData.password.length < 6)
      return "Password must be at least 6 characters";

    return null;
  };

  const loading = true;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = validationForm(formData);
    if (error) {
      toast.error(error);
      return;
    }
    const success = await signup(formData);
    if (success) {
      toast.success("Account created successfully");
    }
  };

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
        {/* TODO : Loading state */}
        <button
          type="submit"
          className={`btn bg-green ${isSigninUp && "bg-slate-400"}`}
          disabled={isSigninUp}
        >
          {isSigninUp ? (
            <div className="flex justify-center">
              <Loader2 className="size-5 animate-spin" />
            </div>
          ) : (
            "Create an account"
          )}
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
