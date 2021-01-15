import styled from 'styled-components';
import Button from '../Button';
import NutritionTable from '../NutritionTable';

const NutritionListStyle = styled.div`
`;

const NutritionListTopRowStyle = styled.div.attrs({
  className: 'pv3 ph2 bg-washed-red flex',
})``

const NutritionList = () => {
  return(
    <NutritionListStyle>
      <NutritionListTopRowStyle>
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
      </NutritionListTopRowStyle>
      <NutritionTable />
    </NutritionListStyle>
  );
};

export default NutritionList;