
import SpotCard from '../SpotCard'

import { h1L, h2L, h3L, hTL } from '../../../utils'

const SecondAngle = () => {
  return (
    <div className='flex gap-4 flex-wrap justify-between'>
      <SpotCard label={"Spot 1"} id={"halfL1"} imgUrl={h1L}/>
      <SpotCard label={"Spot 2"} id={"halfL2"} imgUrl={h2L}/>
      <SpotCard label={"Spot 3"} id={"halfL3"} imgUrl={h3L}/>
      <SpotCard label={"3PTS"}  id={"threeHalfL"} imgUrl={hTL}/>
      
    </div>
  )
}

export default SecondAngle