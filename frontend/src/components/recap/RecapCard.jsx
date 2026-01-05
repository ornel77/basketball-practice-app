/* eslint-disable react/prop-types */
import { motion } from "motion/react";
import {
  FaArrowAltCircleUp,
  FaArrowAltCircleDown,
  FaEquals,
} from "react-icons/fa";

const RecapCard = ({ delay, title, percent, prevPercent }) => {
  const diff = prevPercent == null ? null : percent - prevPercent;
  return (
    <motion.div
      className="w-full bg-white p-3 rounded-xl mb-4 flex justify-between items-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: delay }}
    >
      <span>
        {title} =&gt; {percent}%
      </span>
      <span>
        {diff !== null &&
          (diff > 0 ? (
            <FaArrowAltCircleUp className="text-success" size={24} />
          ) : diff < 0 ? (
            <FaArrowAltCircleDown className="text-failure" size={24} />
          ) : (
            <FaEquals className="text-slate-700" size={20} />
          ))}
      </span>
    </motion.div>
  );
};
export default RecapCard;
