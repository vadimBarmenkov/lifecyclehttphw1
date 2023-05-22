import {Clock} from "./clock";

export const AddClock = ({name, timeZone}) => {
    return(<div><h2>{name}</h2><Clock timeZone={timeZone}/></div> )
}