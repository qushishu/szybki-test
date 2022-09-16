import {Test} from "../../API"
import { borderColor, TeacherPanelData } from './TeacherPanel';
import SingleTestsResults from './SingleTestResults';
import { useEffect, useState } from "react";


const TestsResults:React.FC<TeacherPanelData> = (tpData) => {
    const [tests,setTests] = useState<Test[]>([{id:0,nazwa:"Test1",czyAktywny:true,token:"aa",dataZakonczenia:new Date()}]);

    useEffect(()=>(
        console.log("TODO get tests with results from db")
    ))
    function showResults(testResults:Test){
        tpData.loadedPageContent(<SingleTestsResults tpData={tpData} test={testResults}/>)
    }

    function exportResults(testResults:Test){
        //TODO: export test
        alert("TODO: export test. "+testResults.nazwa)

    }

    function loadTestsResults(){
        //get teacher results as Array<TestResults>
        let tests_objects = tests.map((test,i) => (
            <div className='fullWidth flexRow' style={{borderTop:borderColor, padding:"5px", paddingLeft:"20px"}} key={i}>
                <div className="flexRow">
                    <b>Nazwa testu:</b>{test.nazwa} 
                </div>
                <div className='flexRow'>
                    <button style={{width:"150px"}} onClick={() => showResults(test)}>Pokaz wyniki</button>
                    {/* <button style={{width:"150px"}} onClick={() => exportResults(test)}>Eksportuj wyniki</button> */}
                </div>
            </div>
            ))
            return(
                <div className='fullWidth' style={{backgroundColor:"white"}}>
                    {tests_objects}
                </div>
            );
    }

      return(
        <div className="fullWidth">
            <h3>Wyniki testów</h3>

            {loadTestsResults()}
        
        </div>
      );
}
export default TestsResults;