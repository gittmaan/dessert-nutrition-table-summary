import React, {
   MouseEvent,
} from 'react';
import styled from 'styled-components';
import Button from '../Button';
import NutritionList from '../NutritionList';

const HomeStyle = styled.div`
`;

const HeadStyle = styled.div.attrs({
  className: 'flex',
})``

const HeadingStyle = styled.h1.attrs({
  className: 'f2 flex-auto',
})``

const Home = () => {
  const handleReset = (event: MouseEvent) => {
    console.warn('handleReset', event);
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