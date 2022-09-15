import {getTeacherTests, Test} from "../../API"
import editIcon from "../../assets/images/Edit_icon.png"
import exportIcon from "../../assets/images/Export_icon.png"
import binIcon from "../../assets/images/Bin_icon.png"
import {borderColor, TeacherPanelData } from './TeacherPanel';
import { useEffect, useState } from "react";
import TestCreatingTP from "../TestCreatingTP";
import ActivateTest from "./ActivateTest";

const CreatedTests:React.FC<TeacherPanelData> = (tpData) =>{
    const [tests,setTests] = useState<Test[]>([{nazwa:"Test1",isActive:false},{nazwa:"Test2",isActive:true}]);
    
    useEffect(() => {
        (async () => {
            getTests();
        })();
    }, []);

    const getTests = async () => {
        const teachersTest:Test[]= await getTeacherTests(tpData.teacherId as unknown  as number);
        //console.log(teachersTest[0].nazwa)
        setTests([...teachersTest])
    }

    function activateTest(test:Test){
        tpData.loadedPageContent(<ActivateTest tpData={tpData} testName={test.nazwa}/>);
    }

    function closeTest(test:Test){
        //TODO: close test
        alert("TODO: close test. "+test.nazwa)
    }

    function editTest(test:Test){
        if(test.isActive){
            alert("Nie można edytować aktywnego testu.")
        }
        else{
            //TODO: edit test
        }
    }

    function exportTest(test:Test){      
        //TODO: export test
        alert("TODO: export test. "+test.nazwa)
    }

    function deleteTest(test:Test){
        if(test.isActive){
            alert("Nie można usunąć aktywnego testu.")
        }
        else{
            alert("TODO: delete test")
            // let index = tests.findIndex(test)
        }
    }

    function loadTests(){
        
        //get teacher test as Array<Test>
        let tests_objects = tests.map((test,i) => (
        <div className='fullWidth flexRow' style={{borderTop:borderColor, padding:"5px", paddingLeft:"20px"}} key={i}>
            <div className="flexRow">
                <b>Nazwa testu:</b>{test.nazwa} 
                <b>{test.isActive ? "(Aktywny)": ""}</b>
            </div>
            <div className='flexRow' style={{justifyContent:"space-around", padding:"10px", height:"60px"}}>
                <button style={{width:"150px"}} onClick={test.isActive? ()=>closeTest(test) : ()=>activateTest(test)}>{test.isActive? "Zakończ test":"Aktywuj test"}</button>
                <button onClick={()=> editTest(test)}><img className="icon" src={editIcon}/></button>
                <button onClick={()=> deleteTest(test)}><img className="icon" src={binIcon}/></button>
            </div>
        </div>
        ))
        return(
            <div className='fullWidth' style={{backgroundColor:"white"}}>
                {tests_objects}
            </div>
        );
    }

    function importTest(){
        //TODO: import test
        alert("TODO: import test")
      }
    
      function createTest(){
        //TODO: load createTestPage
        // alert("TODO: load createTestPage")
        // tpData.navigate('/test-creating', { state: { id: 1 } });
        setTests([...tests,{nazwa:"Test2",isActive:true}])
        tpData.loadedPageContent(<TestCreatingTP {...tpData} />)
      }

    return(
        <div className="fullWidth">
            <h3>Utworzone testy</h3>
            
            {loadTests()}         
            


            <div className="fullWidth flexRow" style={{height:"60px"}}>
                <button className="fullWidth" style={{border:"none", borderTop:borderColor}} onClick={createTest}>Nowy test</button>
            </div>
        </div>
      );
}
export default CreatedTests;