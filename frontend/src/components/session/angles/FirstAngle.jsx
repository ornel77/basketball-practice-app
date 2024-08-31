
import SpotCard from '../SpotCard'
import { z1L, z2L,zTL, z3L } from '../../../utils'

const FirstAngle = () => {
  return (
    <div className='flex gap-4 flex-wrap justify-between'>
      <SpotCard label={"Spot 1"} id={"zeroL1"} imgUrl={z1L}/>
      <SpotCard label={"Spot 2"} id={"zeroL2"} imgUrl={z2L}/>
      <SpotCard label={"Spot 3"} id={"zeroL3"} imgUrl={z3L}/>
      <SpotCard label={"3PTS"}  id={"threeZeroL"} imgUrl={zTL}/>
    </div>
  )
}

export default FirstAngle