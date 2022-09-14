import React, { useState } from "react";
import { fetchQuizQuestions, getQuizQuestionss, Pytanie, Odpowiedz } from './../API';
import { useNavigate, useLocation } from "react-router-dom";

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
  const [number, setNumber] = useState(0)
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [answers, setAnswers] = useState<Pytanie[]>([]);
  const [next, setNext] = useState(false);
  const [correctAns, setCorrectAns] = useState(0);
  const [start, setStart] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");

  const { state } = useLocation();
  const testId = (state as { id: number }).id
  const studentIndeks = (state as { indeks: string }).indeks
  console.log(studentIndeks)
  const requestOptionsTest = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ indeks: studentIndeks, test_id: testId })
  };
  const odp = (odpId: number) => {
    const requestOptionsOdp = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ odpowiedz_id: odpId, rozwiazany_test_id: testId })
    };
    return requestOptionsOdp
  }

  const postRozwiazaneTesty = async () => {
    const endpoint = 'http://localhost:8080/rozwiazanetesty';
    const data = await (await fetch(endpoint, requestOptionsTest)).json();
    return data;
  }
  const postOdpowiedzStudenta = async (odpId: number) => {
    const endpoint = 'http://localhost:8080/odpowiedzistudentow';
    const data = await (await fetch(endpoint, odp(odpId))).json();
    return data;
  }




  const startTrivia = async () => {
    setLoading(true);
    setStart(true);
    postRozwiazaneTesty()
    //setstr(await xd());
    const getOdp = await getQuizQuestionss(testId);
    setAnswers(getOdp);
    setScore(0);
    setNumber(0);
    setLoading(false);

  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.value);
    if (!gameOver) {
      const answer = e.currentTarget.value;
      setUserAnswer("Wybrano: " + answer);
      for (let i = 0; i < 4; i++) {
        if (answers[number].odpowiedzi[i].tresc == answer) {
          postOdpowiedzStudenta(answers[number].odpowiedzi[i].id)
        }
        if (answers[number].odpowiedzi[i].tresc == answer && answers[number].odpowiedzi[i].czyPoprawna) {
          console.log("dobra odpowiedz");
          setCorrectAns(1);
          break;
        }
        else {
          setCorrectAns(0);
        }
      }
    }
    setNext(true);
  }

  const nextQuestion = () => {
    setUserAnswer("");
    setNext(false);
    //move on to the next questions if not the last questio
    const pkt = score + correctAns;
    setScore(pkt);
    const nextQuestion = number + 1;
    if (nextQuestion === answers.length) {
      setGameOver(true);
      console.log("pkt:" + pkt);
    }
    else {
      setNumber(nextQuestion);
    }
  }


  return (
    <div>
      <h1>REACT QUIZ</h1>


      {gameOver &&
        <div id="score-div">
          <h2>Wynik: {score} / {answers.length} pkt</h2>
          <p >Wysłano wyniki testu do nauczyciela...</p>
        </div>}

      {!gameOver && !start &&
        <button className='start' onClick={startTrivia}>
          Uruchom test
        </button>
      }
      {/* {!gameOver ? <p className='score'>Score: {score}</p> : null} */}
      {loading && <p id="score-div">Loading Questions ...</p>}
      {!loading && !gameOver && number < answers.length && (
        <QuestionCard
          questionNr={number + 1}
          totalQuestions={answers.length}
          callback={checkAnswer}
          odpowiedzi={answers}
        />

      )}

      {!gameOver && !loading && next ? (
        <button className="next" onClick={nextQuestion}>Next Question</button>
      ) : null}

      <div id="score-div">
        <p>{userAnswer}</p>
      </div>
    </div>
  )
}

export default TestSolving