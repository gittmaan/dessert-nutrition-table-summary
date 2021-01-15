import { Dessert } from './types';
import {
  Action,
  State,
} from './interfaces';

const reducer = (state: State, action: Action) => {
  const {
    payload,
    type,
  } = action;
  console.warn('type', type);
  console.warn('payload', payload);

  switch (type) {
    case 'DESSERT_RECEIVED': {
      return {
        ...state,
        desserts: payload,
      };
    }
    case 'DESSERT_ADDED': {
      const dessert = payload;
      const desserts = [...state.desserts, dessert];
      return {
        ...state,
        desserts,
      };
    }
    case 'DESSERT_DELETE': {
      const dessertIds = payload;
      const desserts = dessertIds.reduce((result: Dessert[], id: string) => {
        return result.filter((dessert) => dessert.id !== id);
      }, state.desserts);
      return {
        ...state,
        desserts,
      };
    }
    case 'RESET': {
      return {
        desserts: [],
      };
    }
    default:
    return state;
  }
};

const initialState: State = {
    desserts: [],
};

export {
  initialState,
  reducer,
};