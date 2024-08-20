
import SpotCard from '../SpotCard'

const SecondAngle = () => {
  return (
    <div className='flex gap-4 flex-wrap justify-between'>
      <SpotCard label={"Spot 1"} id={"halfL1"}/>
      <SpotCard label={"Spot 2"} id={"halfL2"}/>
      <SpotCard label={"Spot 3"} id={"halfL3"}/>
      <SpotCard label={"3PTS"}  id={"threeHalfL"}/>
      
    </div>
  )
}

export default SecondAngle