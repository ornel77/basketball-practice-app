import RecapContainer from '../components/recap/RecapContainer';
import { Fireworks } from '@fireworks-js/react';
const RecapPage = () => {
    const options = {
        rocketsPoint: {
            min: 50,
            max: 50,
        },
        hue: {
            min: 0,
            max: 360,
        },
        delay: {
            min: 15,
            max: 30,
        },
        speed: 2,
        acceleration: 1.05,
        friction: 0.98,
        gravity: 1.5,
        particles: 50,
        trace: 3,
        explosion: 5,
        autoresize: true,
    };

    return (
        <>
            {/* <Fireworks
                options={options}
                style={{
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                }}
            /> */}
            <div className='bg-pink-100 pt-6 text-slate-800 pb-16'>
                <div className='container'>
                    <RecapContainer />
                </div>
            </div>
        </>
    );
};
export default RecapPage;
