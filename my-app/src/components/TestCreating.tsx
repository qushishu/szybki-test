import React, { useState } from 'react'
import CreateQuestionCard, { questionType } from './CreateQuestionCard'
import './CreateQuestionCard.css'

const TestCreating = () => {

  const [ilePytan, setilePytan] = useState(1);
  const [tab, setTab] = useState<questionType[]>([]);
  const [pytania, setPytania] = useState<React.ReactElement[]>([<CreateQuestionCard key={ilePytan} questionNr={ilePytan} question={tab} />]);
  const [pytanieId, setPytanieId] = useState(0);

  function addQuestion() {
    setilePytan(ilePytan + 1);
    setPytania(current => [...current, <CreateQuestionCard key={ilePytan + 1} questionNr={ilePytan + 1} question={tab} />]);
  }

  function removeQuestion() {
    setilePytan(ilePytan - 1);
    const newArr = [...pytania];
    newArr.splice(pytania.length - 1, 1);
    setPytania(newArr);

    const newtab = [...tab];
    newtab.splice(tab.length - 1, 1);
    setTab(newtab);
  }

  const saveQuesions = async () => {
    //console.log(tab[0].question);
    for (let j = 0; j < tab.length; j++) {
      console.log(tab[j]);
      const pytaniePost = {
        "id": j + 1,
        "testId": 1,
        "tresc": tab[j].question
      }

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pytaniePost)
      };

      const data = await fetch('http://localhost:8080/pytania', requestOptions).then(response => response.json());
      console.log(data);
      const pytanie: { id: 0 } = data;
      setPytanieId(pytanie.id);
      for (let i = 0; i < 4; i++) {

        const odpPost1 = {
          "id": i + 1,
          "tresc": tab[j].answers[i],
          "czyPoprawna": tab[j].odpPoprawna - 1 == i ? true : false,
          "pytanieId": pytanie.id
        }

        const requestOptionsOdp = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(odpPost1)
        };


        await fetch('http://localhost:8080/odpowiedzi', requestOptionsOdp)
          .then(() => console.log("POST fire"));
      }
    }
  }

  return (
    <div>
      <h1>Test Creating</h1>
      {pytania}
      <div className='options'>
      <button onClick={addQuestion}>Dodaj pytanie</button>
      <button onClick={removeQuestion}>Usun pytanie</button>
      <button onClick={saveQuesions}>Zapisz test</button>
      </div>
    </div>
  )
}

export default TestCreating
