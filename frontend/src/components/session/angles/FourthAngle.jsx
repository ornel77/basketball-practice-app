
import SpotCard from '../SpotCard';

const FourthAngle = () => {
    return (
        <div className='flex gap-4 flex-wrap justify-between'>
            <SpotCard label={'Spot 1'} id={'halfR1'} />
            <SpotCard label={'Spot 2'} id={'halfR2'} />
            <SpotCard label={'Spot 3'} id={'halfR3'} />
            <SpotCard label={'3PTS'} id={'threeHalfR'} />
        </div>
    );
};

export default FourthAngle;
