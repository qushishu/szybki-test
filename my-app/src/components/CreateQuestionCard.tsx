import React , {useState, createContext,useContext} from 'react'
import './CreateQuestionCard.css'

export type questionType={
    question:string;
    answers:string[];
    odpPoprawna:number;
}
type Test={
    questionNr:number;
    question:questionType[];
}


const CreateQuestionCard: React.FC<Test> = ({questionNr,question}) => {



function getData(val:React.ChangeEvent<HTMLTextAreaElement>){
    //console.log(val);
    const inputs=["question","odp1","odp2","odp3","odp4"]
    for(let i =0;i<inputs.length;i++){
        const data=val.target.value;
            console.log(data);
            const tmp=quest;
        switch(val.target.id){
            case "question":
                tmp.question=data;
                break;
            case "odp1":
                tmp.answers[0]=data;
                break;
            case "odp2":
                tmp.answers[1]=data;
                break;
            case "odp3":
                tmp.answers[2]=data;
                break;
            case "odp4":
                tmp.answers[3]=data;
                break;
            default:
                break;
        }
    }
    updateQuestionsForm();
}

function changeCorrectAnswer(nr:number){
    const items=[false,false,false,false];
    items[nr]=true;
    setIsCorrect(items);

    
    const tmp=quest;
    tmp.odpPoprawna=nr+1;
}

const [isCorrect, setIsCorrect]= useState<boolean[]>([true,false,false,false]);

const [quest,setQuest] = useState<questionType>({
    question:'',
    answers:['','','',''],
    odpPoprawna:1
})

function updateQuestionsForm(){
    if(questionNr!=question.length){
        question.push(quest);
    }
    else{
        question[questionNr-1]=quest;
    }
    console.log(quest);
}


    return (
    <div className='main'>
      <div className='question-section'>
            <span className='question-mark'>Pytanie nr {questionNr}</span>
            <textarea name="question-textarea" id= "question" cols={60} rows={3} placeholder="Wpisz pytanie..." onChange={getData}></textarea>
            <div className='answers-section'>
                <span className='odp-name'>Odpowiedzi:</span>
                <label>
                    <input type="checkbox" checked={isCorrect[0]} onChange={()=>changeCorrectAnswer(0)}/>
                    a.
                    <textarea name="question-textarea" id="odp1" cols={56} rows={2} placeholder="Wpisz odpowiedź a..." onChange={getData}></textarea>
                </label>

                <label>
                    <input type="checkbox" checked={isCorrect[1]} onChange={()=>changeCorrectAnswer(1)}/>
                    b.
                    <textarea name="question-textarea" id="odp2" cols={56} rows={2} placeholder="Wpisz odpowiedź b..." onChange={getData}></textarea>
                </label>

                <label>
                    <input type="checkbox" checked={isCorrect[2]} onChange={()=>changeCorrectAnswer(2)}/>
                    c.
                    <textarea name="question-textarea" id="odp3" cols={56} rows={2} placeholder="Wpisz odpowiedź c..." onChange={getData}></textarea>
                </label>

                <label>
                    <input type="checkbox" checked={isCorrect[3]} onChange={()=>changeCorrectAnswer(3)}/>
                    d.
                    <textarea name="question-textarea" id="odp4" cols={56} rows={2} placeholder="Wpisz odpowiedź d..." onChange={getData}></textarea>
                </label>
            </div>
      </div>
    </div>
  )
  
}

export default CreateQuestionCard
