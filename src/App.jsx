import './App.css'
import Section1 from "./components/Section1.jsx";
import {useState} from "react";
import Popup from "./components/Popup.jsx";

function App() {
    const [popupActive, setPopupActive] = useState(false);

    return (
        <div>
            <Section1 active={popupActive} setActive={setPopupActive}/>
            <Popup active={popupActive} setActive={setPopupActive}/>
        </div>
    )
}

export default App