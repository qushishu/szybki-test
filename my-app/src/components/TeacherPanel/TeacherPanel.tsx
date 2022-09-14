import './TeacherPanel.css';
import logo from '../../assets/images/logo_transparent_1.png'
import userimgtemplate from "../../assets/images/user.png"
import { useEffect, useState } from 'react';
import CreatedTests from './CreatedTests';
import TestsResults from './TestsResults';
import { useLocation, useNavigate } from 'react-router';
import { useParams } from "react-router-dom";
import { getTeacherTests, Token } from '../../API';

export interface IdTeacher {
    teacherId: number
}


const TeacherPanel = () => {
    //TODO: pass auth teacher data
    const {state} = useLocation();
    const teacherId=(state as { teacherId:number}).teacherId;
    const id = useParams();
    useEffect(() => {
        (async () => {
            console.log(teacherId);
        })();
    }, []);

    let name = "Imie"
    let last_name = "Nazwisko"
    let userImg = userimgtemplate //switch to user image if available

    const [loadedPageContent, setloadedPageContent] = useState<JSX.Element | React.ReactNode>(CreatedTests);


    //if not authorized show no access page

    return (
        <div className="teacherPanel">
            <div className="pane fullWidth flexRow" style={{ padding: "10px" }}>
                <img className="small-image" src={logo} alt="logo" />
                <h3>Panel nauczyciela, {name} {last_name}</h3>
                <img className="small-image" src={userImg} alt="logo" />
            </div>
            <div className="fullWidth flexRow" style={{ justifyContent: "space-around", padding: "10px", alignItems: "start" }}>
                <div className="pane" style={{ maxWidth: "25%", minWidth: "150px" }}>
                    <h3>Menu</h3>
                    <button className="tpButton fullWidth" onClick={() => setloadedPageContent(CreatedTests)}>Utworzone testy</button>
                    <button className="tpButton fullWidth" onClick={() => setloadedPageContent(TestsResults)}>Wyniki testów</button>
                </div>
                <div className="pane" style={{ width: "75%", minWidth: "200px" }}>
                    {loadedPageContent}                 
                </div>      
            </div>
        </div>
    );
}
export default TeacherPanel