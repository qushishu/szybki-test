import React from "react";
import {AnswerObject} from '../App'
import './QuestionCard.css'

type Props ={
    question: string;
    answers: string[];//było []
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    useAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({question,answers,callback,useAnswer,questionNr,totalQuestions}) => (
<div className="main">
    <p className="number">
        Question: {questionNr} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{__html: question}}/>
    <div>
        {answers.map(answer =>(
            <div key={answer}>
                <button disabled={ useAnswer ? true : false} value={answer} onClick={callback}>
                    <span dangerouslySetInnerHTML={{__html: answer}}/>
                </button>
            </div>
        
        ))}
    </div>
</div>
);

export default QuestionCard