import { borderColor, TeacherPanelData } from './TeacherPanel';


type StudentResults = {
    name:string;
    percentGrade:number;
}

//add testId to passed parameters
const SingleTestsResults = (tpData:TeacherPanelData,testName:string | undefined) =>{

    let results:Array<StudentResults> = []

    // Testing array
    results.push({name:"Student 1",percentGrade:100})
    results.push({name:"Student 2",percentGrade:50})
    results.push({name:"Student 3",percentGrade:10})
    results.push({name:"Student 4",percentGrade:66})

    function showResults(results:StudentResults){
        //TODO show student results
        alert("TODO show student results")
    }

    function loadTestResults(){
       let results_elements = results.map((result,i) => (
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
            <h3>Wyniki testu: {testName}</h3>

            {loadTestResults()}
        
        </div>
      );
}
export default SingleTestsResults;