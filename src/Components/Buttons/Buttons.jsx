import { useDispatch } from "react-redux";
import { DecreaseCounterAction, IncreaseCounterAction } from "../../Redux/Actions/CounterActions";
const Buttons = () => {
  let dispatch = useDispatch();
  // Icrease Counter
  const increaseQty = async () => {
    await dispatch(IncreaseCounterAction());
  };
  // Decrease Counter
  const dcreaseQty = async () => {
    await dispatch(DecreaseCounterAction());
  };
  return (
    <>
      <button onClick={() => increaseQty()}>+</button>
      <button onClick={() => dcreaseQty()}>-</button>
    </>
  );
};
export default Buttons;
