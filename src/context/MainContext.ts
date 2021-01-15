import { createContext } from 'react';
import { Action, State } from './interfaces';

const MainContext = createContext<{
    state: State;
    dispatch: React.Dispatch<Action>;
}>({ state: { desserts: [] }, dispatch: (a: Action) => {} });

export default MainContext;
