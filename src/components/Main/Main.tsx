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
import {
  gql,
  useQuery,
} from '@apollo/client';

import MainContext from '../../context/MainContext';
import Home from '../Home';
import {
  initialState,
  reducer,
} from '../../context/reducer';
import {
  Dessert,
} from '../../context/types';

const MainStyle = styled.main.attrs({
  className: 'ml-auto mr-auto pl3 pr3 pt4 bg-near-white min-vh-100',
})``

const SubStyle = styled.main.attrs({
  className: 'w-80 center',
})``

const Main = () => {
  const { error, data } = useQuery<{
    desserts: Array<Dessert>;
  }>(gql`
     query Desserts {
       desserts {
         id
         name
         calories
         fat
         protein
         carbs
       }
     }
  `);

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (data && !error) {
      dispatch({
        type: 'DESSERT_RECEIVED',
        payload: data.desserts,
      });
    }
  }, [data, dispatch, error]);

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