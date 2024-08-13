import { GET_UER_DATA } from "../type";
export const GetUserDataAction=()=>{
    return async(dispatch)=>{
        try{
            let response= await fetch("https://jsonplaceholder.typicode.com/posts");
            let data=await response.json();
            dispatch({
                type:GET_UER_DATA,
                payload:data
            })
        }catch(error){ 
            dispatch({
                type:GET_UER_DATA,
                payload:error
            })
        }
    }
}