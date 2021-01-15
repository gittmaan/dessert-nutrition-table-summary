import React, {
  useReducer,
  useEffect,
  useState,
} from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import styled from 'styled-components';
import MainContext from '../../context/MainContext';
import Home from '../Home';
import {
  initialState,
  reducer,
} from '../../context/reducer';
import data from './data';

const MainStyle = styled.main.attrs({
  className: 'ml-auto mr-auto pl3 pr3 pt4 bg-near-white min-vh-100',
})``

const SubStyle = styled.main.attrs({
  className: 'w-80 center',
})``

const Main = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [stateData, setStateData] = useState({
    desserts: data,
  });

  useEffect(() => {
    if (stateData) {
      dispatch({
        type: 'DESSERT_RECEIVED',
        payload: stateData.desserts,
      });
    }
  }, [stateData]);

   return(
    <MainStyle>
      <MainContext.Provider value={{ state, dispatch }}>
        <SubStyle>
          <Router>
            <Route path="/" exact component={Home} />
          </Router>
        </SubStyle>
      </MainContext.Provider>
    </MainStyle>
  );
};

export default Main;