let initialValue = {
    Count: 0,
  };
  const DetailsReducer = (state = initialValue, action) => {
    if (action.type == "INC") {
      return {
        Count:state.Count +1 ,
      };
    }else if(action.type=="DEC"){
      return{
        Count:state.Count-1
      }
    }else{
      return state
    }
  };
  export default DetailsReducer;
  