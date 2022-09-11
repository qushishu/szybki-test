import React, { useState } from "react";
import { fetchQuizQuestions, getQuizQuestionss, Pytanie, Odpowiedz } from './../API';


//Components
import QuestionCard from './QuestionCard';
//Types
import { QuestionState, Difficulty } from './../API';
export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const TOTAL_QUESTIONS = 2;
const TestSolving = () => {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([])
  const [number, setNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [answers, setAnswers] = useState<Pytanie[]>([]);
  const [next,setNext]= useState(false);
  const [correctAns,setCorrectAns] = useState(0);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );
    //setstr(await xd());
    const getOdp = await getQuizQuestionss();
    setAnswers(getOdp);
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.value);

    if(!gameOver ){
      const answer = e.currentTarget.value;
      for(let i=0;i<4;i++){
        if(answers[number].odpowiedzi[i].tresc==answer && answers[number].odpowiedzi[i].czyPoprawna){
            console.log("dobra odpowiedz");
            setCorrectAns(1);
            break;
        }
        else{
          setCorrectAns(0);
        }
      }
    }
    setNext(true);
  }

  const nextQuestion = () => {
    setNext(false);
    //move on to the next questions if not the last questio
    const pkt=score+correctAns;
    setScore(pkt);
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
      console.log("pkt:"+pkt);
    }
    else {
      setNumber(nextQuestion);
    }
  }


  return (
    <div>
      <h1>REACT QUIZ</h1>

      {gameOver || userAnswers.length == TOTAL_QUESTIONS ? (
        <div>
          <h2>Wynik: {score}</h2>
        <button className='start' onClick={startTrivia}>
          start
        </button>
        </div>
      ) : null}
      {/* {!gameOver ? <p className='score'>Score: {score}</p> : null} */}
      {loading && <p>Loading Questions ...</p>}
      {!loading && !gameOver && number < answers.length && (
        <QuestionCard
          questionNr={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          callback={checkAnswer}
          odpowiedzi={answers}
        />)}
      {!gameOver && !loading && next ? (
        <button className="next" onClick={nextQuestion}>Next Question</button>
      ) : null}
    </div>
  )
}

export default TestSolving