import { useSelector } from "react-redux";
const Counter=()=>{
    let data=useSelector((state)=>state.CounterReducer); 
    return(
        <h1>Counter:{data?.Count}</h1>
    )
}
export default Counter