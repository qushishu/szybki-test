import React, { useState } from 'react'
import CreateQuestionCard, { questionType } from '../CreateQuestionCard'
import { TeacherPanelData } from './TeacherPanel';
import CreatedTests from './CreatedTests';
import './TeacherPanel.css';

const TestCreating:React.FC<TeacherPanelData> = (tpData) => {

  const [ilePytan, setilePytan] = useState(1);
  const [tab, setTab] = useState<questionType[]>([]);
  const [testName,setTestName]=useState("");
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


  const saveTest = async () =>{

    const testPost={
      "id": 0,
      "nauczycielId": tpData.teacherId,
      "token": Date.now().toString(),
      "nazwa": testName,
      "dataUruchomienia": "2022-09-15T19:59:41.432Z",
      "dataZakonczenia": "2022-09-15T19:59:41.432Z",
      "czasTrwania": 0,
      "czyAktywny": false
    }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(testPost)
    };
    
    const data = await fetch('http://localhost:8080/testy', requestOptions).then(response => response.json());
    console.log(data);
    const test:{id:number}= data
    return test.id;
  }

  const saveQuesions = async () => {
    //console.log(tab[0].question);
    const testId:number= await (await saveTest());
    console.log("testid:"+testId);
    for (let j = 0; j < tab.length; j++) {
      console.log(tab[j]);
      const pytaniePost = {
        "id": 0,
        "testId": testId,
        "tresc": tab[j].question
      }

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pytaniePost)
      };
      console.log(JSON.stringify(pytaniePost));
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

    //if saved
    tpData.loadedPageContent(<CreatedTests {...tpData}/>)
    
    alert("Can't save test")
  }

  function getData(val: React.ChangeEvent<HTMLTextAreaElement>) {
    const data = val.target.value;
    setTestName(data);
  }


  return (
    <div className='fullWidth'>
      <h3>Nowy test</h3>
      <div className='fullWidth' style={{backgroundColor:"white"}}>
        <textarea name="test-name" id="test-name-id" cols={40} rows={1} placeholder="Wpisz tytuł testu..." onChange={getData} style={{fontSize:"x-large", margin:"20px"}}></textarea>
        <div>
          {pytania}
          <div className='fullWidth flexRow' style={{justifyContent:"space-around"}}>
            <button onClick={addQuestion}>Dodaj pytanie</button>
            <button onClick={removeQuestion}>Usun pytanie</button>
            <button onClick={saveQuesions}>Zapisz test</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestCreating
