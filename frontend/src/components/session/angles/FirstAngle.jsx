
import SpotCard from '../SpotCard'

const FirstAngle = () => {
  return (
    <div className='flex gap-4 flex-wrap justify-between'>
      <SpotCard label={"Spot 1"} id={"zeroL1"}/>
      <SpotCard label={"Spot 2"} id={"zeroL2"}/>
      <SpotCard label={"Spot 3"} id={"zeroL3"}/>
      <SpotCard label={"3PTS"}  id={"threeZeroL"}/>
    </div>
  )
}

export default FirstAngle