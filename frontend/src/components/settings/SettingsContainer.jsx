import {useNavigate} from 'react-router-dom'

const SettingsContainer = () => {
    const navigate = useNavigate()
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

            <article className="bg-white py-3 px-5 cursor-pointer shadow-md mb-4">
                Profile
            </article>
        </div>
    </div>
  )
}
export default SettingsContainer