import { useDispatch, useSelector } from "react-redux";
import Action from "./Redux/Action";

function App() {
  // useDispatch
  let dispatch=useDispatch();
    const increaseQty=async()=>{
      await dispatch(Action())
    }
  // useSelector
  let data=useSelector((state)=>state);  
  return (
    <>
      <h1>Counter:{data?.Count}</h1>
      <button onClick={()=>increaseQty()}>+</button>
    </>
  );
}

export default App;
