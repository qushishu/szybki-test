import { TeacherPanelData } from './TeacherPanel';
import CreatedTests from './CreatedTests';
import { useEffect, useState } from 'react';
import { Test } from '../../API';

//pass testId to this func
const ActivateTest:React.FC<{tpData:TeacherPanelData,test:Test}> = ({tpData,test}) => {
    const[token,setToken] = useState<string>("")
    useEffect(()=>(
        setToken(test.token)
    ))
    console.log(test.token);
    const activateTest= async()=>{
        let date=new Date()
        const testPost = {
            "id": test.id,
            "nauczycielId": tpData.teacherId,
            "token": test.token,
            "nazwa": test.nazwa,
            "dataUruchomienia": date,
            "dataZakonczenia": new Date().setMinutes((date).getMinutes()+20),
            "czasTrwania": 20,
            "czyAktywny": true
          }
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(testPost)
          };
          //console.log(JSON.stringify(pytaniePost));
          const data = await fetch('http://localhost:8080/testy', requestOptions).then(response => response.json());
        //TODO switch test to active
        tpData.loadedPageContent(<CreatedTests {...tpData} />)
    }

    return(
        <div className="fullWidth">
            <h3>Aktywuj test: {test.nazwa}</h3>
            <div className='fullWidth'  style={{backgroundColor:"white", justifyContent:"space-around"}}>
                <div style={{maxWidth:"500px"}}>
                    <div className='fullWidth flexRow' style={{margin:"10px"}}>
                        <b>Czas do zakończenia testu(min):</b><input type="number"></input>
                    </div>
                    <div className='fullWidth flexRow' style={{margin:"10px"}}>
                        <b>Token:</b><input value={token} disabled></input>
                    </div>
                    <div className='fullWidth flexRow' style={{margin:"10px", justifyContent:"space-around"}}>
                        <button onClick={()=>activateTest()}>Zatwierdź</button>
                    </div>
                </div>
            </div>
        </div>
      );
}
export default ActivateTest;