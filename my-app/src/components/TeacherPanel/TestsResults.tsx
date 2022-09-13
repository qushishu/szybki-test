import './TeacherPanel.css';
import {TestResults} from "../../API"

const TestsResults = () =>{

    let tests:Array<TestResults> = []

    // Testing array
    tests.push({name:"Test1",closeDate: new Date()})
    tests.push({name:"Test2",closeDate:new Date()})
    tests.push({name:"Test3",closeDate:new Date()})

    function showResults(testResults:TestResults){
        //TODO: show results
        alert("TODO: show results. "+testResults.name)

    }

    function exportResults(testResults:TestResults){
        //TODO: export test
        alert("TODO: export test. "+testResults.name)

    }

    function loadTestsResults(){
        //get teacher results as Array<TestResults>
        let tests_objects = tests.map((test) => (
            <div className='fullWidth flexRow' style={{borderTop:"1px solid #808080", padding:"5px"}}>
                {test.name} {test.closeDate.toTimeString()}
                <div className='flexRow'>
                    <button className='tpButton' style={{border:"1px solid black",width:"150px"}} onClick={() => showResults(test)}>Pokaz wyniki</button>
                    <button className='tpButton' style={{border:"1px solid black",width:"150px"}} onClick={() => exportResults(test)}>Eksportuj wyniki</button>
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