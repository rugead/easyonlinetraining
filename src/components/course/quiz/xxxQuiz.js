import React, { useEffect, useState }  from 'react';
import { useParams } from 'react-router';
import { getDoc, doc, serverTimestamp } from '@firebase/firestore';

import { useUser, db } from '../../firebase'
import { dataSet} from "../data/"
import { QuizArea, ScoreArea } from './QuizFunctions';
import { H4} from '../Headline'
import { DialogConfirmNumber } from '../DialogConfirmNumber'

export const Quiz = (props) => {
  const { user } = useUser()
  const { indexOfItem } = useParams()

  const [userData, setUserData]= useState()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [correctScore, setCorrectScore] = useState(0)
  const [incorrectScore, setIncorrectScore] = useState(0)
  const [clickedAnswers, setClickedAnswers] = useState({})

  const [traineeNumber, setTraineeNumber] = useState('')
  const [traineeName, setTraineeName] = useState('')
  // const [traineeCategory, setTraineeCategory] = useState('')
  
  const [traineeNumberCheck, setTraineeNumberCheck] = useState('')
 
  const [disableConfirmButton, setDisableConfirmButton] = useState(true)
  const [dialogIsOpen, setDialogIsOpen] = useState(false)
  
  const courseTitle = dataSet[indexOfItem].courseTitle
  const questions = dataSet[indexOfItem].questions
  const question = questions[currentQuestion]  
  
  // console.log(
  //   '#userData: ', userData,
  //   '#courseId: ', dataSet[indexOfItem].courseId,
  //   '#user email: ', user.email,
  //   '#user UID:', user.uid,
  //   '#clickedAnswers: ', clickedAnswers, 
  //   '#current: ', currentQuestion,  
  //   '#QuestionLength: ', questions.length, 
  //   '#false: ', incorrectScore, 
  //   '#true: ', correctScore,
  //   '#title: ', courseTitle,
  // );

  useEffect(() => {
    const getUserData = async () => {
      if (!user) return 
      const docRef = doc(db, "users", user.uid)
      const docSnap = await getDoc(docRef);
      const userDoc = docSnap.data()
      setUserData(userDoc)        
      }
      getUserData()
  }, [user])
  
  useEffect(() => {
    let correct = 0 
    let incorrect = 0

    Object.entries(clickedAnswers).map(([key, value]) => {
      if (value.c === value.d) { correct += 1 }
      if (value.c !== value.d) { incorrect += 1 }
      const corr = value.c === value.d ? true : false
      return corr
    })

    setCorrectScore(correct)
    setIncorrectScore(incorrect)

  },[clickedAnswers])

  useEffect(() => {
    if ( !traineeName || !traineeNumber) {
      setDisableConfirmButton(true)
    } else {
      setDisableConfirmButton(false)
    }
  }, [traineeName, traineeNumber])

  const handleClick = (ev) => {
    ev.preventDefault()
    const i = ev.target.attributes.choice.value
    
    const newClickedAnswers = {...clickedAnswers}
    newClickedAnswers[question.idQuestion] = {
      a: question.answers[i],
      c: question.correctAnswer,
      d: parseInt(i, 10)
    }
    setClickedAnswers(newClickedAnswers)
  }
  
  const renderTitle = Object.entries(courseTitle).map(([key, value]) => {
    return (value)
  })

  const nextQuestion = () => {
    if ((currentQuestion + 1) < questions.length ) {
      setCurrentQuestion(currentQuestion+1)
    }
  }

  const prevQuestion = () => {
    if (currentQuestion > 0 ) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const newStart = () => {
      setCurrentQuestion(0)
      setCorrectScore(0)
      setIncorrectScore(0)
      setClickedAnswers({})
  }

  const lessonProps = {
    courseTitle: courseTitle ? courseTitle : '',
    courseId: dataSet[indexOfItem]?.courseId,
    courseShowing: dataSet[indexOfItem]?.showing,
    traineeName: traineeName ? traineeName : '',
    traineeNumber: traineeNumber ? traineeNumber : '',
    userNumber: userData?.userNumber ? userData.userNumber : '',
    userName: user?.displayName ? user.displayName : user?.email, 
    userId: user?.uid,
    userEmail: user?.email,
    createdAt: new Date(Date.now()),
    timestamp: serverTimestamp(),
  };


  
  const onChangeHandler = (ev) => {
    const { name, value } = ev.currentTarget
    if (name === 'traineeNumber') {
      let numb = parseInt(value)
      if (numb < 2000 || numb >4000 ) {
        setTraineeNumberCheck('Dies ist eine Zahl zwischen 2000 und 4000!')
        setTraineeNumber('')
      } else {
        setTraineeNumberCheck('')
        setTraineeNumber(value)
      }
    }
    if (name === 'traineeName') setTraineeName(value)
    // if (name === 'category') setTraineeCategory(value)

  }

  return(
    <div className="flex justify-around">  
      <DialogConfirmNumber 
        isOpen={dialogIsOpen} 
        setIsOpen={setDialogIsOpen} 
        // submitConfirmation={submitLesson} 
        onChangeHandler={onChangeHandler}
        disableConfirmButton={disableConfirmButton}
        traineeNumberCheck={traineeNumberCheck}
        lessonProps={lessonProps}
      />

      <div className="w-5/6">
        <div className="mt-10">
          <H4>{currentQuestion + 1}. von {questions.length} Fragen zur {renderTitle.join(" / ")}</H4>
        </div>
        <div className={`bg-gray-50 rounded-lg shadow-lg`} >
          
          <div className="pt-10">
            <QuizArea 
              handleClick={handleClick} 
              question={question} 
              clickedAnswers={clickedAnswers} 
              questionsLength={questions.length} 
              current={currentQuestion} 
              courseTitle={courseTitle} 
            />
          </div>
        
        
        <div className="flex w-full">
        { (questions.length === correctScore) 
          ? 
            <div
              className="p-1 flex-1 text-white hover:bg-primary bg-green-500 text-lg font-medium text-center mt-5  border border-gray-500 cursor-pointer hover:text-gray-100 rounded-md" 
              onClick={()=> setDialogIsOpen(true)}
            >
              submitConfirmation
            </div>
          :
          <>
            <div
              className="m-1 p-1 flex flex-1 text-primary hover:bg-primary mt-5  border border-primary cursor-pointer hover:text-gray-100 rounded-md" 
              onClick={()=> prevQuestion()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 justify-center align-self-center" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
              </svg>
            </div>
            
            <div 
              className="m-1 p-1 flex flex-1 text-primary hover:bg-primary text-lg font-medium text-center mt-5  border border-primary cursor-pointer hover:text-gray-100 rounded-md"
              onClick={()=> newStart()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  justify-center align-self-center" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>

            <div 
              onClick={() => props.setShowing(dataSet[indexOfItem].showing)}
              className="m-1 p-1 flex flex-1 text-primary hover:bg-primary text-lg font-medium text-center mt-5  border border-primary cursor-pointer hover:text-gray-100 rounded-md" 
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 justify-center align-self-center" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
              </svg>
            </div>

            <div
              className="m-1 p-1 flex flex-1 text-primary hover:bg-primary text-lg font-medium text-center mt-5  border border-primary cursor-pointer hover:text-gray-100 rounded-md" 
              onClick={()=> nextQuestion()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  justify-center align-self-center" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
        </>     
      }

        </div>
        <ScoreArea correctScore={correctScore} incorrectScore={incorrectScore} />
      </div>
    </div>
  </div>
  )
}  
