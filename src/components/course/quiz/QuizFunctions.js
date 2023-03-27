import { H2 } from '../../utilities/Headline';
import { SadIcon, HappyIcon } from '../../utilities/Heroicons';

export function ScoreArea(props) {
  const {correctScore, incorrectScore} = props
  return(
    <div className=" w-full flex justify-between p-2" >
      <TotalIncorrect incorrectScore={incorrectScore} />
      <TotalCorrect correctScore={correctScore} />
    </div>
  )
}

export function QuizArea(props) {
  const {question, handleClick, questionsLength, current,  abc, clickedAnswers} = props
  console.log('questionlength: ', question.answers);
  return(
    <div className="w-full" >
        {
        question && question.imgQuestion 
        ?
        <div className="w-full lg:w-1/5 md:w-2/5">
          <img src={process.env.PUBLIC_URL + question?.imgQuestion} alt="" />
        </div>
        :
        ''
      }
      <Question question={question} questionsLength={questionsLength} current={current}  />


      {question && question.answers.length > 0 ?
      <AnswerList question={question} handleClick={handleClick} clickedAnswers={clickedAnswers} abc={abc} />
    :
    'keine Antworten'
}
      </div>
  )
}

function Question(props) {
  return (
    <div className="">
       <H2 >
        {props?.question?.question}
      </H2> 
    </div>
  )
}
  
function Answer(props) {
  const { choice, handleClick, clickedAnswers } = props
  const answer = props.question.answers[props.choice]
  const questionId = props.question.questionId
  
  return(
    <li 
      choice={choice}
      className="p-2 w-full flex justify-between text-primary hover:bg-primary text-xl hover:text-gray-100 rounded-md cursor-pointer" 
      onClick={handleClick}
    >  
      <div>{answer?.text}</div>
      <div>

      {
        (clickedAnswers[questionId]?.c === clickedAnswers[questionId]?.d &&  clickedAnswers[questionId]?.d === choice) 
        ?
        (clickedAnswers[questionId] ?  <HappyIcon cStyles="w-10 h-10 text-green-500" /> : '' )
        : 
        ''
      }
      {
        (clickedAnswers[questionId]?.c !== clickedAnswers[questionId]?.d &&  clickedAnswers[questionId]?.d === choice) 
        ?
        (clickedAnswers[questionId] ?  <SadIcon cStyles="w-10 h-10 text-red-400" /> : '' )
        : 
        ''
      }
      </div>
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
    <ul className="w-full divide-y-2 divide-gray-100">
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