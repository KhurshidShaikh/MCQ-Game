import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const FinalResult = ({points,handleRestart}) => {
  return (
<div className='bg-yellow-300  lg:w-[1000px]  w-[350px]  lg:h-[400px] h-full mt-7 rounded-lg 
    flex flex-col items-center drop-shadow-2xl  overflow-y-auto overflow-x-hidden justify-center'>
      <h2 className='font-semibold text-[30px] p-3'>Final Score</h2>
  
     <div style={{ width: 170, height: 180 }}>
     <CircularProgressbar value={points} maxValue={10} text={`${points}/10`} 
     styles={buildStyles({
     strokeLinecap: 'round',
     pathTransitionDuration: 0.5,
     pathColor:'green',
     textColor: 'black',
     })}/>
</div>
      <span className='font-semibold text-[25px] '>{ `${points} Questions Correct !`} </span>

       <button  className='bg-violet-700 w-[120px] rounded-lg text-[20px] p-2 m-5'
       onClick={()=>handleRestart(true,0,null,0)}>Restart</button>
 
    </div>
  )
}

export default FinalResult
