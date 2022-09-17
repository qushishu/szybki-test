import { useEffect, useState } from 'react';
import { Test } from '../../API';
import { borderColor, TeacherPanelData } from './TeacherPanel';
import { OdpStudenta } from './TestsResults';


export type StudentResults = {
    name:string;
    percentGrade:number;
}

//add testId to passed parameters
const SingleTestsResults:React.FC<{tpData:TeacherPanelData,results:StudentResults[],test:OdpStudenta[]}> = ({tpData,results,test}) => {
    const [studentResults,setStudentResults] = useState<StudentResults[]>([]);

    // Testing array
    function showResults(results:StudentResults){
        const indeksy:string[]=[]
        // for(let i=0;i<test.length;i++){
        //     let jest=false;
        //     const odp:string=test[i].indeks;
        //     for(let j=0;j<indeksy.length;j++){
        //         if(test[i].indeks==indeksy[j]){
        //             jest=true
        //         }
        //     }
        //     if(jest==false){
        //         indeksy.push(odp);
        //     }
        // }
        
        console.log(indeksy);
        //TODO show student results
        alert("TODO show student results")
    }

    // useEffect(() => {
    //     const b:StudentResults[]=studentResults
    //     const indeksy:string[]=[]
    //     for(let i=0;i<test.length;i++){
    //         let jest=false;
    //         const odp:string=test[i].indeks;
    //         for(let j=0;j<indeksy.length;j++){
    //             if(test[i].indeks==indeksy[j]){
    //                 jest=true
    //             }
    //         }
    //         if(jest==false){
    //             indeksy.push(odp);
    //         }
    //     }
        
    //     for(let i=0;i<indeksy.length;i++){
    //         let maxpkt=0
    //         let pkt=0
    //         for(let j=0;j<test.length;j++){
    //             if(indeksy[i]==test[j].indeks){
    //                 maxpkt++
    //                 if(test[j].czyPoprawna){
    //                     pkt++
    //                 }
    //             }
    //         }
    //         const a:StudentResults={name:indeksy[i],percentGrade:pkt/maxpkt*100}
    //         console.log(a);
    //         b.push(a);
    //     }
    //     setStudentResults(b);
    //     console.log(b);
        
    // }, []);
    
    

    function loadTestResults(){
        
       let results_elements = results.map((result,i) => (
            <div className='fullWidth flexRow' style={{borderTop:borderColor, padding:"5px", paddingLeft:"20px"}} key={i}>
                {result.name} ({result.percentGrade}%)
                <div className='flexRow'>
                    {/* <button style={{width:"200px"}} onClick={() => showResults(result)}>Pokaz odpowiedzi</button> */}
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
        <div className="fullWidth" >
            <h3>Wyniki testu: {test[0].nazwaTestu}</h3>

            {loadTestResults()}
        
        </div>
      );
}
export default SingleTestsResults;