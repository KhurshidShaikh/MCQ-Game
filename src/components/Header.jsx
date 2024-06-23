import React from 'react'
import brain from  '../assets/brain.svg'
const Header = () => {
  return (
    <div className='flex flex-row bg-slate-300 items-center w-full drop-shadow-xl top-0 sticky z-20'>
    <h2 className=' font-semibold fonr-poppins sm:text-[30px] p-3 text-[25px] '>
      Welcome to Quiz Game</h2>
      <img src={brain} alt="brain" className='sm:w-[100px] sm:h-[100px] w-[80px] h-[80px] pt-0'/>

  </div>
  )
}

export default Header
