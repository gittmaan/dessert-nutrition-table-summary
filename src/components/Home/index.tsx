import React, {
   MouseEvent,
} from 'react';
import styled from 'styled-components';
import Button from '../Button';

const HomeStyle = styled.div.attrs({
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
    </HomeStyle>
  );
};

export default Home;