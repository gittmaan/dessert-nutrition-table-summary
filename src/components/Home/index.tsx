import {
  gql,
  useMutation,
} from '@apollo/client';
import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import NutritionList from '../NutritionList';
import useContextEntities from '../../context/mainContextEntities';

const HomeStyle = styled.div`
`;

const HeadStyle = styled.div.attrs({
  className: 'flex',
})``

const HeadingStyle = styled.h1.attrs({
  className: 'f2 flex-auto',
})``

const Home = () => {
  const {
    dispatch
  } = useContextEntities();

  const [resetData] = useMutation(gql`
    mutation {
      reset {
        message
        success
      }
    }
  `);

  const handleReset = async () => {
    console.warn('handleReset');
    const { errors } = await resetData();
    if (!errors) {
      dispatch({
        type: 'RESET',
      });
    }
  };

  return(
    <HomeStyle>
      <HeadStyle>
        <HeadingStyle>
          Nutrition List
        </HeadingStyle>
        <Button
          className='bg-green white self-center'
          icon='refresh'
          onClick={handleReset}
         >
          RESET DATA
        </Button>
      </HeadStyle>
      <NutritionList />
    </HomeStyle>
  );
};

export default Home;