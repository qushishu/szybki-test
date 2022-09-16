import React from "react";
import { Pytanie, Odpowiedz } from "../API";

type Props = {
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    questionNr: number;
    totalQuestions: number;
    odpowiedzi: Pytanie[];
}



const QuestionCard: React.FC<Props> = ({ callback, questionNr, totalQuestions, odpowiedzi }) => (
    <div className="main" >
        <p className="number">
            Pytanie: {questionNr} / {totalQuestions}
        </p>
        {odpowiedzi[questionNr - 1].tresc}
        <div>
            {odpowiedzi[questionNr - 1].odpowiedzi.map(answer => (
                <div key={answer.tresc}>
                    <button onClick={callback} value={answer.tresc}>
                        {answer.tresc}
                    </button>
                </div>
            ))}
        </div>
    </div>
);

export default QuestionCard