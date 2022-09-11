import { shuffleArray } from "./utils";
import React ,{useState} from 'react';
import { json } from "stream/consumers";
import { BlobOptions } from "buffer";


export type Question={
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

export type Odpowiedz={
    tresc:string
    czyPoprawna: Boolean
}

export type Pytanie={
    // czasTrwania: Date;
    // dataUruchomienia: Date;
    // dataZakonczenia: Date;
    // id: number;
    // nauczyciel : any;
    id: number
    tresc:string
    odpowiedzi:Odpowiedz[]
}

export type QuestionState = Question & { answers: string[]};

export enum Difficulty{
    EASY="easy",
    MEDIUM="medium",
    HARD="hard",
}


export const fetchQuizQuestions = async(amount: number,difficulty: Difficulty) => {
    const endpoint = 'https://opentdb.com/api.php?amount='+amount+'&difficulty='+difficulty+'&type=multiple';

    const data = await (await fetch(endpoint)).json();
    console.log(data);
    return data.results.map((question :Question)=>(
        {
            ...question,
            answers: shuffleArray([...question.incorrect_answers,question.correct_answer])
        }
    ))
}


export const getQuizQuestionss = async() =>{
    
    const endpoint = 'http://localhost:8080/pytania/dotestu?testId=1';
    const data = await(await fetch(endpoint)).json();
    console.log(data);
    const pytania:Pytanie[] = data;
    for(let i=0;i<pytania.length;i++){
        const odpowiedzi:Odpowiedz[]=await getQuizAnswers(pytania[i].id);
        pytania[i].odpowiedzi=odpowiedzi;
        console.log(pytania[i].odpowiedzi);
    }
    return pytania
}

export const getQuizAnswers= async(pytanieId:number)=>{
    const endpoint = 'http://localhost:8080/odpowiedzi/dopytania?pytanieId='+pytanieId;
    const data = await(await fetch(endpoint)).json();
    const odpowiedzi:Odpowiedz[]=data;
    //console.log(odpowiedzi);
    return odpowiedzi;
}



