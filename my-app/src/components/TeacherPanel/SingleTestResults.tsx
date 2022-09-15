import { useState } from 'react';
import { TestResults } from '../../API';
import { borderColor, TeacherPanelData } from './TeacherPanel';


type StudentResults = {
    name:string;
    percentGrade:number;
}

//add testId to passed parameters
const SingleTestsResults:React.FC<{tpData:TeacherPanelData,test:TestResults}> = ({tpData,test}) => {
    const [studentResults,setStudentResults] = useState<StudentResults[]>([{name:"Student 1",percentGrade:100}]);

    // Testing array
    function showResults(results:StudentResults){
        //TODO show student results
        alert("TODO show student results")
    }

    function loadTestResults(){
       let results_elements = studentResults.map((result,i) => (
            <div className='fullWidth flexRow' style={{borderTop:borderColor, padding:"5px", paddingLeft:"20px"}} key={i}>
                {result.name} ({result.percentGrade}%)
                <div className='flexRow'>
                    <button style={{width:"200px"}} onClick={() => showResults(result)}>Pokaz odpowiedzi</button>
                </div>
            </div>
            ))
            return(
                <div className='fullWidth' style={{backgroundColor:"white"}}>
                    {results_elements}
                </div>
            );
    }

      return(
        <div className="fullWidth">
            <h3>Wyniki testu: {test.name}</h3>

            {loadTestResults()}
        
        </div>
      );
}
export default SingleTestsResults;