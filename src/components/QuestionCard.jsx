import React, { useEffect, useState } from 'react'
import questions from '../questions';
import FinalResult from './FinalResult';



const QuestionCard = () => {
const[gameQuestions,setGameQuestions]=useState(questions)
const [currentQuestionIndex,setCurrentQuestionIndex]=useState(0);
const [isPlaying,setIsPlaying]=useState(true)
const[points,setPoints]=useState(0);
  

useEffect(()=>{
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
});
   
},[])


useEffect(()=>{
  const newPoints=gameQuestions.reduce((total,question)=>
    total+ (question.selectedIndex!==null && question.options[question.selectedIndex] === question.correctAnswer ? 1 : 0),0);
    setPoints(newPoints);
},[gameQuestions])


const handlePrevious=()=>{
  if(currentQuestionIndex>0){
    setCurrentQuestionIndex(i=>i-1)
   
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
  });
      }
 
}


const handleNext=()=>{
  if(gameQuestions[currentQuestionIndex].selectedIndex!==null){

if(currentQuestionIndex<questions.length-1){
      setCurrentQuestionIndex(i=>i+1)
      window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
   
    }
     if(currentQuestionIndex===questions.length-1){
      setIsPlaying(false)
     }

  }



  else{
    alert("please select an option !")
  }
 

}

const handleOptionClick = (index) => {
  const updatedQuestions = [...gameQuestions];
  updatedQuestions[currentQuestionIndex].selectedIndex = index;
  setGameQuestions(updatedQuestions);
};


const handleRestart=(playstate,questionindex,buttonSelect,point)=>{
  setIsPlaying(playstate)
  setCurrentQuestionIndex(questionindex)
  gameQuestions.map((question,index)=>{
    question.selectedIndex=buttonSelect
  })

  setPoints(point)

}



  return (
    isPlaying?(<div className='bg-cyan-400 lg:w-[1000px]  w-[335px] lg:h-[400px] h-full mt-7 rounded-lg 
    flex flex-col items-center drop-shadow-xl  overflow-y-auto overflow-x-hidden mb-4'>
       <h3 className='font-poppins font-semibold p-7 lg:text-[30px] text-[24px] overflow-wrap break-word whitespace-normal text-center'> 
      {`Q.${currentQuestionIndex+1} ${questions[currentQuestionIndex].text}`}
       </h3>
      
       <div className='flex lg:flex-row flex-col flex-wrap lg:w-[700px] w-full justify-between items-center font-poppins gap-3'>
        {
          questions[currentQuestionIndex].options.map((option,index)=>(
             <button key={index} className={`${gameQuestions[currentQuestionIndex].selectedIndex===index?'bg-amber-600':'bg-amber-300'} lg:w-[300px] p-5 rounded-full w-[200px] ` }
             onClick={()=>handleOptionClick(index)}>
                {option}
             </button>
          ))
        }
       </div>

       <div className=' w-full flex flex-row font-poppins m-6 justify-around'>
       <button className='bg-violet-500 w-[120px] rounded-lg text-[20px] p-2' onClick={handlePrevious}> previous</button>
        <button className='bg-green-500 w-[120px] rounded-lg text-[20px] p-2' onClick={handleNext}> Next</button>
        
       </div>

        <div className='lg:pb-0 pb-3'>
        <button className='bg-red-600 w-[120px] rounded-lg text-[20px] p-2' onClick={()=>setIsPlaying(false)}>Quit </button>
        </div>
        
    </div>):(
      <FinalResult isplaying={isPlaying }  handleRestart={handleRestart} points={points}/>
    )
  )
}

export default QuestionCard
