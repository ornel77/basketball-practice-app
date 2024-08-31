import { FaArrowLeft } from 'react-icons/fa';
import RecapCard from './RecapCard';
import { avatar } from '../../utils';
import useRecapStore from '../../store/useRecapStore';
import { useNavigate } from 'react-router-dom';

import confetti from 'canvas-confetti';
import { useEffect } from 'react';
const RecapContainer = () => {
    const { recap } = useRecapStore();

    const navigate = useNavigate();
    useEffect(() => {
        if (recap) {
            confetti();
        }
    }, []);

    return (
        <div>
            {/* Redirect button */}
            <div>
                <button onClick={() => navigate('/')}>
                    <FaArrowLeft size={28} />
                </button>
            </div>

            {/* Avatar */}
            <div className='flex justify-center py-4'>
                <img src={avatar} alt='' className='w-24' />
            </div>

            <h2 className='title'>
                good job <span>Adam</span>
            </h2>
            {recap ? (
                <div>
                    <RecapCard
                        percent={recap?.fieldAvg}
                        title={'Field Goal %'}
                        delay={0.2}
                    />
                    <RecapCard
                        percent={recap?.threeAvg}
                        title={'Three Point %'}
                        delay={0.4}
                    />
                    <RecapCard
                        percent={recap?.ll}
                        title={'Layup Left %'}
                        delay={0.6}
                    />
                    <RecapCard
                        percent={recap?.lr}
                        title={'Layup Right %'}
                        delay={0.8}
                    />
                    <RecapCard
                        percent={recap?.ft}
                        title={'Free Throw %'}
                        delay={1}
                    />
                </div>
            ) : (
                <p className='flex justify-center items-center'>
                    No data yet :(
                </p>
            )}
        </div>
    );
};
export default RecapContainer;
