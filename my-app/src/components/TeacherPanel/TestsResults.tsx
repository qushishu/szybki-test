import {TestResults} from "../../API"
import { borderColor, TeacherPanelData } from './TeacherPanel';
import SingleTestsResults from './SingleTestResults';
import { useState } from "react";


const TestsResults:React.FC<TeacherPanelData> = (tpData) => {
    const [tests,setTests] = useState<TestResults[]>([{name:"Test1",closeDate:new Date()}]);

    function showResults(testResults:TestResults){
        tpData.loadedPageContent(SingleTestsResults(tpData,testResults.name))
    }

    function exportResults(testResults:TestResults){
        //TODO: export test
        alert("TODO: export test. "+testResults.name)

    }

    function loadTestsResults(){
        //get teacher results as Array<TestResults>
        let tests_objects = tests.map((test,i) => (
            <div className='fullWidth flexRow' style={{borderTop:borderColor, padding:"5px", paddingLeft:"20px"}} key={i}>
                <div className="flexRow">
                    <b>Nazwa testu:</b>{test.name} 
                </div>
                <div className="flexRow">
                    <b>Data zakończenia:</b> {test.closeDate.toTimeString()}
                </div>
                <div className='flexRow'>
                    <button style={{width:"150px"}} onClick={() => showResults(test)}>Pokaz wyniki</button>
                    <button style={{width:"150px"}} onClick={() => exportResults(test)}>Eksportuj wyniki</button>
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
            <h3>Zakończone testy</h3>

            {loadTestsResults()}
        
        </div>
      );
}
export default TestsResults;