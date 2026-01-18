import { useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { IoIosNotifications, IoIosBrush } from "react-icons/io";
import { RiUserSettingsFill } from "react-icons/ri";
import { MdSportsBasketball, MdPermDeviceInformation } from "react-icons/md";
import { FaFileExport } from "react-icons/fa";

import { useAuthStore } from "../../store/useAuthStore";

const SettingsContainer = () => {
  const navigate = useNavigate();
  const { logout } = useAuthStore();

  return (
    <div className="container">
      <h2 className="title">Settings</h2>

      <div className="mt-16 font-light">
        <h3 className="font-semibold text-lg mb-1">Account</h3>
        {/* PROFILE */}
        <article
          onClick={() => navigate("/settings/account")}
          className="tabs-settings rounded-t-lg"
        >
          <div className="icons-settings bg-rose-500">
            <RiUserSettingsFill size={20} fill="white" />
          </div>
          <p>Profile</p>
        </article>

        {/* NOTIFICATION */}
        <article className="tabs-settings mb-4 rounded-b-lg">
          <section className="flex justify-between items-center w-full">
            <div className="flex gap-4 items-center opacity-50">
              <div className="icons-settings bg-yellow ">
                <IoIosNotifications size={22} fill="white" />
              </div>
              <p>Notifications</p>
            </div>
            <p className="coming-soon">Coming Soon</p>
          </section>
        </article>

        <h3 className="font-semibold text-lg mb-1">Workout</h3>
        {/* CUSTOM WORKOUT */}
        <article className="tabs-settings mb-4 rounded-lg">
          <section className="flex justify-between items-center w-full">
            <div className="flex gap-4 items-center opacity-50">
              <div className="icons-settings bg-sky-700">
                <MdSportsBasketball size={20} fill="white" />
              </div>
              <p>Customize Workout</p>
            </div>
            <p className="coming-soon">Coming Soon</p>
          </section>
        </article>

      <h3 className="font-semibold text-lg mb-1">Application</h3>
        {/* COLOR THEMES */}
        <article className="tabs-settings rounded-t-lg">
          <section className="flex justify-between items-center w-full">
            <div className="flex gap-4 items-center opacity-50">
              <div className="icons-settings bg-cyan-600 ">
                <IoIosBrush size={22} fill="white" />
              </div>
              <p>Color Themes</p>
            </div>
            <p className="coming-soon">Coming Soon</p>
          </section>
        </article>

        {/* EXPORT DATA */}
        <article className="tabs-settings">
          <section className="flex justify-between items-center w-full">
            <div className="flex gap-4 items-center opacity-50">
              <div className="icons-settings bg-green">
                <FaFileExport size={18} fill="white" />
              </div>
              <p>Export Data</p>
            </div>
              <p className="coming-soon">Coming Soon</p>
          </section>

        </article>

        {/* ABOUT */}
        <article className="tabs-settings mb-4 rounded-b-lg">
          <div className="icons-settings bg-fuchsia-500">
            <MdPermDeviceInformation size={22} fill="white" />
          </div>
          <p>About</p>
        </article>

        {/* LOGOUT */}
        <article
          className="tabs-settings mb-4 mt-8 text-red font-bold rounded-lg "
          onClick={logout}
        >
          <div>
            <MdLogout size={24} />
          </div>
          Logout
        </article>
      </div>
    </div>
  );
};
export default SettingsContainer;
