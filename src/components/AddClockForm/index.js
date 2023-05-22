import {useState} from "react";
import {AddClock} from "../addClock";

export const AddClockForm = () => {
    const [clocks, setClocks] = useState([]);
    const [clockName, setClockName] = useState();
    const [timeZone, setTimeZone] = useState();

    const buttonClickEvent = () =>{
        setClocks([...clocks, <AddClock name={clockName} timeZone={timeZone}/>]);
    }

    const deleteBtn = (index) => {
        setClocks([...clocks.slice(0, index), ...clocks.slice(index + 1)]);

    }

    const handlerSubmit = (evt) =>{
        evt.preventDefault();
    }

    return(
        <form onSubmit={handlerSubmit}>
            <div style={{display: "flex", justifyContent: "space-between", textAlign: "center", alignItems: "center"}}>
                <div>
                    <label>Название</label>
                    <input onChange={event => setClockName(event.target.value)}/>
                </div>
                <div>
                    <label>Временная зона</label>
                    <input type={"number"} onChange={event => setTimeZone(event.target.value)}/>
                </div>

                <button onClick={buttonClickEvent}>Добавить</button>
            </div>

            <div style={{display: "flex", justifyContent: "space-between", textAlign: "center", alignItems: "center"}}>{clocks.map((element, index) => {
                return<div>{element}<button onClick={() => deleteBtn(index)}>X</button></div>
            })}</div>
        </form>
    )
}