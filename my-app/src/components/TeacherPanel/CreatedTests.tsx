import {Test} from "../../API"
import editIcon from "../../assets/images/Edit_icon.png"
import exportIcon from "../../assets/images/Export_icon.png"
import binIcon from "../../assets/images/Bin_icon.png"
import ActivateTest from './ActivateTest';
import {borderColor, TeacherPanelData } from './TeacherPanel';

const CreatedTests = (tpData:TeacherPanelData) =>{

    let tests:Array<Test> = []
    // Testing array
    tests.push({name:"Test1",isActive:false})
    tests.push({name:"Test2",isActive:true})
    tests.push({name:"Test3",isActive:false})
    tests.push({name:"Test1",isActive:false})
    tests.push({name:"Test2",isActive:true})
    tests.push({name:"Test3",isActive:false})

    function activateTest(test:Test){
        //TODO: activate test
        tpData.loadedPageContent(ActivateTest(tpData,test.name));
    }

    function closeTest(test:Test){
        //TODO: close test
        alert("TODO: close test. "+test.name)
    }

    function editTest(test:Test){
        if(test.isActive){
            alert("Nie można edytować aktywnego testu.")
        }
        else{
            //TODO: edit test
            tpData.navigate('/test-creating', { state: { id: 1 } });
        }
    }

    function exportTest(test:Test){      
        //TODO: export test
        alert("TODO: export test. "+test.name)
    }

    function deleteTest(test:Test){
        //TODO: delete test
        if(test.isActive){
            alert("Nie można usunąć aktywnego testu.")
        }
        else{
            alert("TODO: delete test")
        }
    }

    function loadTests(){
        //get teacher test as Array<Test>
        let tests_objects = tests.map((test,i) => (
        <div className='fullWidth flexRow' style={{borderTop:borderColor, padding:"5px", paddingLeft:"20px"}} key={i}>
            <div className="flexRow">
                <b>Nazwa testu:</b>{test.name} 
                <b>{test.isActive ? "(Aktywny)": ""}</b>
            </div>
            <div className='flexRow' style={{justifyContent:"space-around", padding:"10px", height:"60px"}}>
                <button style={{width:"150px"}} onClick={test.isActive? ()=>closeTest(test) : ()=>activateTest(test)}>{test.isActive? "Zakończ test":"Aktywuj test"}</button>
                <button onClick={()=> editTest(test)}><img className="icon" src={editIcon}/></button>
                <button onClick={()=> exportTest(test)}><img className="icon" src={exportIcon}/></button>
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
        tpData.navigate('/test-creating', { state: { id: 1 } });
      }

    return(
        <div className="fullWidth">
            <h3>Utworzone testy</h3>
            
            {loadTests()}         
            


            <div className="fullWidth flexRow" style={{height:"60px"}}>
                <button style={{width:"60%", border:"none", borderTop:borderColor}} onClick={createTest}>Nowy test</button>
                <button style={{width:"40%", border:"none", borderLeft:borderColor, borderTop:borderColor}} onClick={importTest}>Importuj test</button>
            </div>
        </div>
      );
}
export default CreatedTests;