import { TeacherPanelData } from './TeacherPanel';
import CreatedTests from './CreatedTests';
import { useEffect, useState } from 'react';

//pass testId to this func
const ActivateTest:React.FC<{tpData:TeacherPanelData,testName:string}> = ({tpData,testName}) => {
    const[token,setToken] = useState<string>("")
    useEffect(()=>(
        console.log("TODO get token from db")
    ))

    function activateTest(){
        //TODO switch test to active
        tpData.loadedPageContent(<CreatedTests {...tpData} />)
    }

    return(
        <div className="fullWidth">
            <h3>Aktywuj test: {testName}</h3>
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