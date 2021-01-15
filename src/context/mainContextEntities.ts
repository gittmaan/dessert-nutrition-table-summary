import { useContext } from 'react';
import MainContext from './MainContext';

const useContextEntities = () => {
  const {
    dispatch,
    state,
  } = useContext(MainContext);

  return {
    dispatch,
    state,
  };
};

export default useContextEntities;
