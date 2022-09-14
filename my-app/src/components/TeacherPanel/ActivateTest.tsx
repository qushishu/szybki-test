import { TeacherPanelData } from './TeacherPanel';
import CreatedTests from './CreatedTests';

//pass testId to this func
const ActivateTest = (tpData:TeacherPanelData, testName:string | undefined) =>{

    let tokenInput = "tokenInput";

    function generateToken(){
        
    }

    function activateTest(){
        //TODO switch test to active
        tpData.loadedPageContent(CreatedTests(tpData))
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
                        <b>Token:</b><input id={tokenInput}></input>
                    </div>
                    <div className='fullWidth flexRow' style={{margin:"10px", justifyContent:"space-around"}}>
                        <button onClick={()=>generateToken()}  style={{margin:"10px"}}>Wygeneruj nowy token</button>
                        <button onClick={()=>activateTest()}>Zatwierdź</button>
                    </div>
                </div>
            </div>
        </div>
      );
}
export default ActivateTest;