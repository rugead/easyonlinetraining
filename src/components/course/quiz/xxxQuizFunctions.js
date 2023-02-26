import {  EmojiHappyIcon, EmojiSadIcon } from "@heroicons/react/solid";
import { H2 } from "../Headline";

export function ScoreArea(props) {
  const {correctScore, incorrectScore} = props
  return(
    <div className=" w-full flex justify-between p-5  " >
      <TotalIncorrect incorrectScore={incorrectScore} />
      <TotalCorrect correctScore={correctScore} />
    </div>
  )
}

export function QuizArea(props) {
  const {question, handleClick, questionsLength, current, courseTitle, abc, clickedAnswers} = props
  return(
    <>
        {
        question.imgQuestion 
        ?
        <div className="w-full lg:w-1/5 md:w-2/5">
          <img src={process.env.PUBLIC_URL + question?.imgQuestion} alt="" />
        </div>
        :
        ''
      }
      <Question question={question} questionsLength={questionsLength} current={current} courseTitle={courseTitle} />
      <AnswerList question={question} handleClick={handleClick} clickedAnswers={clickedAnswers} abc={abc} />
    </>
  )
}

function Question(props) {
  return (
    <div className="flex p-3">
       <H2 >
        {props?.question?.question}
      </H2> 
    </div>
  )
}
  
function Answer(props) {
  const { choice, handleClick, clickedAnswers } = props
  const answer = props.question.answers[props.choice]
  const idQuestion = props.question.idQuestion

  return(
    <li 
      choice={choice}
      className="p-5 w-full flex justify-between text-primary hover:bg-primary text-xl hover:text-gray-100 rounded-md cursor-pointer" 
      onClick={handleClick}
    >
      {answer}  
      {
      (clickedAnswers[idQuestion]?.c === clickedAnswers[idQuestion]?.d &&  clickedAnswers[idQuestion]?.d === choice) 
      ?
        (clickedAnswers[idQuestion] ?  <EmojiHappyIcon className="h-10 text-green-500" /> : '' )
      : 
        ''
      }
      {
        (clickedAnswers[idQuestion]?.c !== clickedAnswers[idQuestion]?.d &&  clickedAnswers[idQuestion]?.d === choice) 
      ?
        (clickedAnswers[idQuestion] ?  <EmojiSadIcon className="h-10 text-gray-200" /> : '' )
      : 
        ''
      }
    </li> 
  )
}

function AnswerList(props) {
  const { question, handleClick, clickedAnswers } = props
  var answers = []
  for (let i = 0; i < question.answers.length; i++) {
    answers.push(<Answer 
      key={i} 
      choice={i} 
      handleClick={handleClick} 
      clickedAnswers={clickedAnswers} 
      question={question}
    />)
  }

  return(
    <ul className="w-full flex-1 divide-y-2 divide-gray-100">
      {answers}
    </ul>
  )
}

function TotalCorrect(props) {
  const {correctScore} = props
  return(
    <span className="text-center" >Richtig/Correct: {correctScore}</span>
  )
}

function TotalIncorrect(props) {
  const {incorrectScore} = props
  return(
    <span className=" text-center">Falsch/Incorrect: {incorrectScore}</span>
  )
}