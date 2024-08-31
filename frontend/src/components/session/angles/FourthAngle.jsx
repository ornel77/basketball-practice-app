
import { h1R, h2R, h3R, hTR } from '../../../utils';
import SpotCard from '../SpotCard';

const FourthAngle = () => {
    return (
        <div className='flex gap-4 flex-wrap justify-between'>
            <SpotCard label={'Spot 1'} id={'halfR1'} imgUrl={h1R}/>
            <SpotCard label={'Spot 2'} id={'halfR2'} imgUrl={h2R}/>
            <SpotCard label={'Spot 3'} id={'halfR3'} imgUrl={h3R}/>
            <SpotCard label={'3PTS'} id={'threeHalfR'} imgUrl={hTR}/>
        </div>
    );
};

export default FourthAngle;
