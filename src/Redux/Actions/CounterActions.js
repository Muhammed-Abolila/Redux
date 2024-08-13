import { DEC, INC } from "../type";

// Increase Counter
export const IncreaseCounterAction = () => {
    return{
        type:INC
    }
};
// Decrease Counter
export const DecreaseCounterAction = () => {
    return{
        type:DEC
    }
};
