/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { FaArrowAltCircleUp, FaArrowAltCircleDown } from 'react-icons/fa';

const RecapCard = ({ delay, title, percent }) => {
    return (
        <motion.div
            className='w-full bg-white p-3 rounded-xl mb-4 flex justify-between items-center'
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: delay }}
        >
            <span>
                {title} =&gt; {percent}%
            </span>
            <span>
                {title === 'Layup Left %' ? (
                    <FaArrowAltCircleDown className='text-failure' size={24} />
                ) : (
                    <FaArrowAltCircleUp className='text-success' size={24} />
                )}
            </span>
        </motion.div>
    );
};
export default RecapCard;
