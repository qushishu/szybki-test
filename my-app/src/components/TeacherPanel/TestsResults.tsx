import {getResults, Test} from "../../API"
import { borderColor, TeacherPanelData } from './TeacherPanel';
import SingleTestsResults from './SingleTestResults';
import { useEffect, useState } from "react";

export type OdpStudenta = {
    indeks: string;
    czyPoprawna: boolean;
    testId:number;
    nazwaTestu:string;
}



const TestsResults:React.FC<TeacherPanelData> = (tpData) => {
    const [tests,setTests] = useState<Test[]>([{id:0,nazwa:"Test1",czyAktywny:true,token:"aa",dataZakonczenia:new Date()}]);

    const [tab,setTab]=useState<OdpStudenta[]>([]);
    const [tabuniq,setTabuniq]=useState<OdpStudenta[]>([]);

    const [odp,setOdp]=useState<OdpStudenta[]>([]);
    
    useEffect(() => {
        (async () => {
           const a:{odpowiedz:{czyPoprawna:boolean,pytanie:{test:{id:number,nazwa:string}}},rozwiazanyTest:{indeks:string}}[] = await getResults();
           const temp:OdpStudenta[]=tab;
           for(let i=0;i<a.length;i++){
                //const temp:OdpStudenta[]=tab;
                const odp:OdpStudenta={indeks:a[i].rozwiazanyTest.indeks,czyPoprawna:a[i].odpowiedz.czyPoprawna,testId:a[i].odpowiedz.pytanie.test.id,nazwaTestu:a[i].odpowiedz.pytanie.test.nazwa}
                temp.push(odp);
                //console.log(odp);
           }
           setTab(temp);
           const unique:OdpStudenta[]=[tab[0]];
           for(let i=0;i<tab.length;i++){
            //const temp:OdpStudenta[]=tab;
                let jest=false;
                const odp:OdpStudenta=tab[i];
                for(let j=0;j<unique.length;j++){
                    if(odp.testId==unique[j].testId){
                        jest=true
                    }
                }
                if(jest==false){
                    unique.push(odp);
                }
            }
            setTabuniq(unique);

           //console.log(a.length);
           console.log(unique);
        })();

    }, []);
    function showResults(testResults:OdpStudenta){
        const a = odp;
        for(let i=0;i<tab.length;i++){
            if(tab[i].testId==testResults.testId){
                a.push(tab[i]);
            }
        }
        setOdp(a);
        //tworznie tablicy studentow z punktami

        tpData.loadedPageContent(<SingleTestsResults tpData={tpData} test={odp}/>)
    }

    function exportResults(testResults:Test){
        //TODO: export test
        alert("TODO: export test. "+testResults.nazwa)

    }

    function loadTestsResults(){
        //get teacher results as Array<TestResults>
        let tests_objects = tabuniq.map((test,i) => (
            <div className='fullWidth flexRow' style={{borderTop:borderColor, padding:"5px", paddingLeft:"20px"}} key={i}>
                <div className="flexRow">
                    <b>Nazwa testu:</b>{test.nazwaTestu} 
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