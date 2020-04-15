import { ActionTypes } from '../enums';
import { CountState, CountAction } from '../iterfaces';
const initialState: CountState = 0;

export default (state = initialState, {type}: CountAction): CountState  => {
  switch(type) {
    case ActionTypes.INCREMENT:
      return state + 1;
    case ActionTypes.DECREMENT:
      return state - 1;
    default:
      return state;
  }
}