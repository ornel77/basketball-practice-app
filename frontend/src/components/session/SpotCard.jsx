/* eslint-disable react/prop-types */
import InputNumber from "./InputNumber"


const SpotCard = ({label, imgUrl, id}) => {
  return (
    <div className="shadow-lg select-none">
      <img src="/spott.png" alt="" className="w-40 rounded-t-xl"/>
      <div className="bg-white h-24 p-4 flex flex-col items-center rounded-b-xl">
        <p>{label} </p>
        <InputNumber id={id}/>
      </div>
    </div>
  )
}

export default SpotCard