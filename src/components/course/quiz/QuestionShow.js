import React, { useState, useEffect } from 'react'
import { H3 } from '../../utilities/Headline';
import no from '../../../img/no.jpg'
import { PrevButton, NextButton } from '../../utilities/Button';
import { QuizArea, ScoreArea } from './QuizFunctions';

export const QuestionShow = ({questions}) => {

  const [currentQuestion, setCurrentQuestion] = useState(questions[0])  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [clickedAnswers, setClickedAnswers] = useState({})  
  const [correctScore, setCorrectScore] = useState(0)
  const [incorrectScore, setIncorrectScore] = useState(0)


  const [disableConfirmButton, setDisableConfirmButton] = useState(true)
  const [dialogIsOpen, setDialogIsOpen] = useState(false)
  

  useEffect(() => {
    let correct = 0 
    let incorrect = 0

    Object.entries(clickedAnswers).map(([key, value]) => {
      if (value.c === value.d) { correct += 1 }
      if (value.c !== value.d) { incorrect += 1 }
      // const corr = value.c === value.d ? true : false
      // return corr
    })

    setCorrectScore(correct)
    setIncorrectScore(incorrect)

  },[clickedAnswers])

  const handleClick = (ev) => {
    ev.preventDefault()
    const i = ev.currentTarget.attributes.choice.value
    
    const newClickedAnswers = {...clickedAnswers}
    newClickedAnswers[currentQuestion.questionId] = {
      a: currentQuestion.answers[i],
      c: parseInt(currentQuestion.correctAnswer, 10),
      d: parseInt(i, 10)
    }
    setClickedAnswers(newClickedAnswers)
  }

  const nextQuestion = () => {
    if ((currentQuestionIndex + 1) < questions.length ) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setCurrentQuestion(questions[currentQuestionIndex + 1])
    }
  }

  const prevQuestion = () => {
    if (currentQuestionIndex > 0 ) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
      setCurrentQuestion(questions[currentQuestionIndex - 1])
    }
  }

  return (  
    <div className='w-full'>
      <div className="">
        <QuizArea 
          handleClick={handleClick} 
          question={currentQuestion} 
          clickedAnswers={clickedAnswers} 
          questionsLength={questions.length} 
          current={currentQuestionIndex} 
       />
      </div>

      <ScoreArea correctScore={correctScore} incorrectScore={incorrectScore} />
      
        
      <div className="flex w-full ">
        { (questions.length === correctScore) 
          ? 
            <div
              className="p-1 flex-1 text-white hover:bg-primary bg-green-500 text-lg font-medium text-center mt-5  border border-gray-500 cursor-pointer hover:text-gray-100 rounded-md" 
              onClick={()=> setDialogIsOpen(true)}
            >
              submitConfirmation
            </div>
          :
            <div className=" w-full flex justify-between mt-5" >
              <PrevButton action={prevQuestion} />
              <NextButton action={nextQuestion} />
            </div>
        }
      </div>
    </div>
    );
}
 