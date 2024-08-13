let initialValue = {
  Count: 0,
};
const Reducer = (state = initialValue, action) => {
  if (action.type == "INC") {
    return {
      Count:state.Count +1 ,
    };
  }
};
export default Reducer;
