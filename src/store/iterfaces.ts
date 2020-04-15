import { ActionTypes } from './enums';

export type CountState = number;

export interface CountAction {
	type: ActionTypes;
	payload?: Partial<CountState>;
}

