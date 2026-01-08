/* eslint-disable react/prop-types */
import InputNumber from "./InputNumber"


const SpotCard = ({label, imgUrl, id}) => {
  return (
    <div className=" select-none">
      <img src={imgUrl} alt="" className="w-[160px] rounded-t-xl"/>
      <div className="shadow-lg bg-white h-20 p-4 flex flex-col items-center justify-center rounded-b-xl">
        <p>{label} </p>
        <InputNumber id={id}/>
      </div>
    </div>
  )
}

export default SpotCard