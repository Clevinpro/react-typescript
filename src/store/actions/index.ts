import { ActionTypes } from '../enums';

export const increment = (): any => ({
  type: ActionTypes.INCREMENT,
});



export const decrement = (): any => ({
  type: ActionTypes.DECREMENT,
});
