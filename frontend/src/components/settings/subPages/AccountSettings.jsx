import { Loader2 } from "lucide-react";
import { useState } from "react";
import GoBackBtn from "../../common/GoBackBtn";

const AccountSettings = () => {
  const [formData, setFormData] = useState({})
  const isSigninUp = false

  const handleSubmit = () => {}
  return (
    <div className="">
      {/* Redirect button */}
      <div className="container my-5">
        <GoBackBtn url="/settings" />
        <h2 className="title">Account Settings</h2>
        <form className="space-y-10 my-16" onSubmit={handleSubmit}>
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
              "Save"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
export default AccountSettings;
