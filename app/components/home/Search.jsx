import React from 'react'
import InputItem from './InputItem'
import pin from "../../public/pin.png"
import destination from "../../public/location.png"


const Search = () => {
  return (
    <div  className='p-2 md:p-6 border-[2px] rounded-xl'>
        <p className='text-[20px] font-bold '>Get your package</p>
      <InputItem type={pin} place={"Pickup Location"} />
      <InputItem type={destination} place={"Dropoff Location"}/>
      <button className='p-3 bg-[#8766f5] w-full mt-5 text-white rounded-lg '>
        Search
      </button>
    </div>
  )
}

export default Search
