import './TeacherPanel.css';
import logo from '../../assets/images/logo_transparent_1.png'
import userimgtemplate from "../../assets/images/user.png"
import { useEffect, useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router';
import { useParams } from "react-router-dom";

import CreatedTests from './CreatedTests';
import TestsResults from './TestsResults';
import TestCreatingTP from './TestCreating';

export interface IdTeacher {
    teacherId: number
}

export type TeacherPanelData = {
    teacherId:number;
    navigate: NavigateFunction;
    loadedPageContent:React.Dispatch<React.SetStateAction<React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined>>;
}

export const borderColor = "1px solid #aa33da"

const TeacherPanel = () => {
    const [loadedPageContent, setloadedPageContent] = useState<React.ReactElement>();

    //TODO: pass auth teacher data
    const id = useParams();
    useEffect(() => {
        (async () => {
            console.log(id.teacherId) // this is Tacher ID after login
        })();
        setloadedPageContent(<CreatedTests {...tpData}/>)
    }, []);
    
    let tpData:TeacherPanelData={
        teacherId:id.teacherId as unknown as number, //insert teacher id
        navigate:useNavigate(),
        loadedPageContent:setloadedPageContent
    }

    // navigate('/teacher-panel/'+ props.teacherId)
    let name = "Imie"
    let last_name = "Nazwisko"
    let userImg = userimgtemplate //switch to user image if available



    //if not authorized show no access page

    return (
        <div className="teacherPanel">
            <div className="pane fullWidth flexRow" style={{ padding: "10px", flexWrap:"nowrap" }}>
                <img className="small-image" src={logo} alt="logo" onClick={()=> tpData.navigate('/login')}/>
                <h3>Panel nauczyciela, {name} {last_name}</h3>
                <img className="small-image" src={userImg} alt="logo"/>
            </div>
            <div className="fullWidth flexRow" style={{ justifyContent: "space-around", padding: "10px", alignItems: "start" }}>
                <div className="pane menu" style={{ maxWidth: "20%", minWidth: "150px" }}>
                    <h3>Menu</h3>
                    <button className="fullWidth" onClick={() => setloadedPageContent(<CreatedTests {...tpData} />)}>Utworzone testy</button>
                    <button className="fullWidth" onClick={() => setloadedPageContent(<TestsResults {...tpData}/>)}>Wyniki testów</button>
                </div>
                <div className="pane" style={{ width: "80%", minWidth: "200px" }}>
                    {loadedPageContent}
                </div>
            </div>
        </div>
    );
}
export default TeacherPanel