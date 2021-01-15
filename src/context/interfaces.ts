import { Dessert } from './types';

export interface State {
  desserts: Array<Dessert>;
};

export interface Action {
  type: string;
  payload?: any;
};