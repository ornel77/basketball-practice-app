/* eslint-disable react/no-unescaped-entities */

import {useNavigate} from 'react-router-dom'

const ErrorContainer = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col justify-center h-screen gap-5 md:container py-10">
      <img src="/error_all.png" alt="error_illustation" className="lg:w-96 lg:object-contain" />
      <div className="container text-center space-y-4">
        <div>
          <p className="uppercase text-center font-bold text-2xl">
            Opps, I think we're lost
          </p>
          <p className="font-extralight">
            Let's get you back somewhere familiar.
          </p>
        </div>
        {/* <button className="cursor-pointer" onClick={() => navigate('/session')}>
          <img src="/error_btn.png" alt="error_btn" />
        </button> */}
        <button className="cursor-pointer bg-green text-white py-2 px-6 rounded-full text-lg font-bold" onClick={() => navigate('/session')}>
          GO HOME
        </button>
      </div>
    </div>
  )
}
export default ErrorContainer