import Button from '../Button';
import styled from 'styled-components';

const NutritionListStyle = styled.div.attrs({
  className: 'pv3 ph2 bg-washed-red flex',
})``

const NutritionList = () => {
  return(
    <NutritionListStyle>
      The List
      <Button
        className='bg-white green mh1'
        icon='add'
       >
        ADD NEW
      </Button>
      <Button
        className='bg-white red mh1'
        icon='delete'
        disabled={true}
        data-testid='delete-button'
      >
          DELETE
      </Button>
    </NutritionListStyle>
  );
};

export default NutritionList;