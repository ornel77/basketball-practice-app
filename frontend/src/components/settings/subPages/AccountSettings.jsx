import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const AccountSettings = () => {
    const navigate = useNavigate();
    return (
        <div>
            {/* Redirect button */}
            <div className='flex items-center'>
                <button onClick={() => navigate('/setting')} className='block'>
                    <FaArrowLeft size={28} />
                </button>
                <h2 className="">Account Settings</h2>
            </div>

        </div>
    );
};
export default AccountSettings;
