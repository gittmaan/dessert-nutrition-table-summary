import { useContext } from 'react';
import MainContext from './MainContext';

const mainContextEntities = () => {
  const {
    dispatch,
    state,
  } = useContext(MainContext);

  return {
    dispatch,
    state,
  };
};

export default mainContextEntities;
