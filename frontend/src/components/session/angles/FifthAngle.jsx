import { z1R, z2R, z3R, zTR } from "../../../utils"
import SpotCard from "../SpotCard"


const FifthAngle = () => {
  return (
    <div className='flex gap-4 flex-wrap justify-between'>
      <SpotCard label={"Spot 1"} id={"zeroR1"} imgUrl={z1R}/>
      <SpotCard label={"Spot 2"} id={"zeroR2"} imgUrl={z2R}/>
      <SpotCard label={"Spot 3"} id={"zeroR3"} imgUrl={z3R}/>
      <SpotCard label={"3PTS"}  id={"threeZeroR"} imgUrl={zTR}/>
      
    </div>
  )
}

export default FifthAngle