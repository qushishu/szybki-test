import {TestResults} from "../../API"
import { borderColor, TeacherPanelData } from './TeacherPanel';
import SingleTestsResults from './SingleTestResults';


const TestsResults = (tpData:TeacherPanelData) =>{

    let tests:Array<TestResults> = []

    // Testing array
    tests.push({name:"Test1",closeDate: new Date()})
    tests.push({name:"Test2",closeDate:new Date()})
    tests.push({name:"Test3",closeDate:new Date()})

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