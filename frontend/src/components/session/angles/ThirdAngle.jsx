
import { o1, o2, o3, oT } from '../../../utils'
import SpotCard from '../SpotCard'

const ThirdAngle = () => {
  return (
    <div className='flex gap-4 flex-wrap justify-between'>
      <SpotCard label={"Spot 1"} id={"ortho1"} imgUrl={o1}/>
      <SpotCard label={"Spot 2"} id={"ortho2"} imgUrl={o2}/>
      <SpotCard label={"Spot 3"} id={"ortho3"} imgUrl={o3}/>
      <SpotCard label={"3PTS"}  id={"threeOrtho"} imgUrl={oT}/>
      
    </div>
  )
}

export default ThirdAngle