
import SpotCard from '../SpotCard'

const ThirdAngle = () => {
  return (
    <div className='flex gap-4 flex-wrap justify-between'>
      <SpotCard label={"Spot 1"} id={"ortho1"}/>
      <SpotCard label={"Spot 2"} id={"ortho2"}/>
      <SpotCard label={"Spot 3"} id={"ortho3"}/>
      <SpotCard label={"3PTS"}  id={"threeOrtho"}/>
      
    </div>
  )
}

export default ThirdAngle