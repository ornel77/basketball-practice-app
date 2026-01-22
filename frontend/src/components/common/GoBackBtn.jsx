/* eslint-disable react/prop-types */
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const GoBackBtn = ({url}) => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(url)} className="block">
      <FaArrowLeft size={28} />
    </button>
  );
};
export default GoBackBtn;
