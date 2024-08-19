

const SpotCard = ({label, imgUrl}) => {
  return (
    <div className="shadow-lg">
      <img src="/spott.png" alt="" className="w-40"/>
      <div className="bg-white h-20 p-4 flex flex-col items-center">
        <p>{label} </p>
        <p>Counter</p>
      </div>
    </div>
  )
}

export default SpotCard