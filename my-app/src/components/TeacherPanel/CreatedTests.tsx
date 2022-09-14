import './TeacherPanel.css';
import {Test} from "../../API"
import editIcon from "../../assets/images/Edit_icon.png"
import exportIcon from "../../assets/images/Export_icon.png"
import { Tooltip } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const CreatedTests = () =>{

    let tests:Array<Test> = []
    let navigate=useNavigate();
    // Testing array
    tests.push({name:"Test1",isActive:false})
    tests.push({name:"Test2",isActive:true})
    tests.push({name:"Test3",isActive:false})
    tests.push({name:"Test1",isActive:false})
    tests.push({name:"Test2",isActive:true})
    tests.push({name:"Test3",isActive:false})

    function activateTest(test:Test){
        //TODO: activate test
        alert("TODO: activate test. "+test.name)
    }

    function closeTest(test:Test){
        //TODO: close test
        alert("TODO: close test. "+test.name)
    }

    function editTest(test:Test){
        //TODO: edit test
        alert("TODO: edit test. "+test.name)
    }

    function exportTest(test:Test){      
        //TODO: export test
        alert("TODO: export test. "+test.name)
    }

    function loadTests(){
        //get teacher test as Array<Test>
        let tests_objects = tests.map((test) => (
        <div className='fullWidth flexRow' style={{borderTop:"1px solid #808080", padding:"5px"}}>
            {test.name} {test.isActive ? "(Aktywny)": ""}
            <div className='flexRow'>
                <button className='tpButton' style={{border:"1px solid black",width:"150px"}} onClick={test.isActive ? ()=>closeTest(test):()=>activateTest(test)}>{test.isActive ? "Zakończ test":"Aktywuj test"}</button>
                <button className='tpButton' style={{border:"1px solid black", padding:"2px"}} onClick={()=> editTest(test)}><img className="icon" src={editIcon}/></button>
                <button className='tpButton' style={{border:"1px solid black", padding:"2px"}} onClick={()=> exportTest(test)}><img className="icon" src={exportIcon}/></button>
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
        alert("TODO: load createTestPage")
        navigate('/test-creating', { state: { id: 1 } });
      }

    return(
        <div className="fullWidth">
            <h3>Utworzone testy</h3>
            <>
            {loadTests()}         
            </>


            <div className="fullWidth flexRow">
                <button className="tpButton" style={{width:"60%"}} onClick={createTest}>Nowy test</button>
                <button className="tpButton" style={{width:"40%", borderLeft:"1px solid #bebebe"}} onClick={importTest}>Importuj test</button>
            </div>
        </div>
      );
}
export default CreatedTests;