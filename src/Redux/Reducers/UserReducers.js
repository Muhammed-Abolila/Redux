import { GET_UER_DATA } from "../type";
let initialValue = {
  UserData: [],
};
const UserReducers = (state = initialValue, action) => {
  if (action.type == GET_UER_DATA) {
    return {
      ...state,
      UserData: action.payload,
    };
  } else {
    return state;
  }
};
export default UserReducers;
