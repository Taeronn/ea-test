import './App.css'
import Section1 from "./components/Section1.jsx";
import Section2 from "./components/Section2.jsx";
import {useState} from "react";
import Popup from "./components/Popup.jsx";

function App() {
    const [popupActive, setPopupActive] = useState(false);

    return (
        <div>
            <Section1 active={popupActive} setActive={setPopupActive}/>
            <Section2/>
            <Popup active={popupActive} setActive={setPopupActive}/>
        </div>
    )
}

export default App