import {useNavigate} from 'react-router-dom'
import { MdLogout } from "react-icons/md";
import { useAuthStore } from '../../store/useAuthStore';

const SettingsContainer = () => {
    const navigate = useNavigate()
    const {logout} = useAuthStore()

  return (
    <div className="md:container">
        <h2 className="title">Settings</h2>

        <div className="mt-16">
            <article onClick={() => navigate('/setting/account')} className="bg-white py-3 px-5 cursor-pointer  shadow-md border-b">
                Profile
            </article>
            <article className="bg-white py-3 px-5 cursor-pointer shadow-md mb-4">
                Profile
            </article>
            <article className="bg-white py-3 px-5 cursor-pointer shadow-md mb-4">
                Profile
            </article>
            <article className="bg-white py-3 px-5 cursor-pointer shadow-md border-b">
                Profile
            </article>
            <article className="bg-white py-3 px-5 cursor-pointer shadow-md border-b">
                Profile
            </article>
            <article className="bg-white py-3 px-5 cursor-pointer shadow-md mb-4">
                Profile
            </article>

            <article className="bg-white py-3 px-5 cursor-pointer shadow-md mb-4 flex gap-2 items-center text-red font-bold " onClick={logout}>
                <div>
                    <MdLogout size={24} />
                </div>
                <p>Logout</p>
                
            </article>
        </div>
    </div>
  )
}
export default SettingsContainer