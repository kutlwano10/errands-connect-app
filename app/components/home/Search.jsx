"use client"
import InputItem from './InputItem'
import pin from "../../../public/pin.png"
import Dropoff from "../../../public/location.png"
import { SourceContext } from '@/app/context/SourceContext'
import { DestinationContext } from '@/app/context/DestinationContext'
import react,{ useContext, useEffect } from 'react'

const Search = () => {
  const { source } = useContext(SourceContext); // Correct use of context
  const { destination } = useContext(DestinationContext);

  // useEffect(()=> {
  //   if(source ) {
  //     console.log("source updated",source) 
  //   }
  //   if(destination) {
  //     console.log(destination)
  //   }
  // },[source, destination])
  return (
    <div  className='p-2 md:p-6 border-[2px] rounded-xl'>
        <p className='text-[20px] font-bold '>Get your package</p>
      <InputItem type={pin} place={"Pickup Location"} />
      <InputItem type={Dropoff} place={"Dropoff Location"}/>
      <button className='p-3 bg-[#8766f5] w-full mt-5 text-white rounded-lg '>
        Search
      </button>
    </div>
  )
}

export default Search
