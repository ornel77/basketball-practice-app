import { Loader2 } from "lucide-react";
import { useState } from "react";
import GoBackBtn from "../../common/GoBackBtn";
import { useAuthStore } from "../../../store/useAuthStore";
import { useUserStore } from "../../../store/useUserStore";
import toast from "react-hot-toast";

const AccountSettings = () => {
  const { authUser } = useAuthStore();
  const { updateProfile } = useUserStore();
  const [formData, setFormData] = useState({
    firstname: authUser.firstname || "",
    lastname: authUser.lastname || "",
    email: authUser.email || "",
  });
  const isSigninUp = false;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await updateProfile(formData);
    if (success) {
      console.log(authUser);
      return toast.success("Changes saved in successfully");
    }
  };
  
  return (
    <div className="">
      {/* Redirect button */}
      <div className="container my-5">
        <GoBackBtn url="/settings" />
        <h2 className="title">Account Settings</h2>
        <form className="space-y-10 my-20" onSubmit={handleSubmit}>
          <div className="flex justify-between gap-4">
            <input
              type="text"
              className="input"
              placeholder="First name..."
              onChange={(e) =>
                setFormData({ ...formData, firstname: e.target.value })
              }
              value={formData.firstname}
            />
            <input
              type="text"
              className="input"
              placeholder="Last name..."
              onChange={(e) =>
                setFormData({ ...formData, lastname: e.target.value })
              }
              value={formData.lastname}
            />
          </div>
          <input
            type="mail"
            className="input"
            placeholder="Email..."
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            value={formData.email}
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
              "Save changes"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
export default AccountSettings;
