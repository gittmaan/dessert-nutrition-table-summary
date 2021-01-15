import {
   useState,
} from 'react';
import styled from 'styled-components';
import Button from '../Button';
import NutritionTable from '../NutritionTable';
import Dialog from '../Dialog';
import NewDessert from '../NewDessert';

const NutritionListStyle = styled.div`
`;

const NutritionListTopRowStyle = styled.div.attrs({
  className: 'pv3 ph2 bg-washed-red flex',
})``

const NutritionList = () => {
  const [showDialog, setShowDialog] = useState(false);

  const toggler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (showDialog) {
      setShowDialog(false)
    } else {
      setShowDialog(true)
    }
  };

  const handleAddNew = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowDialog(true);
  };

  return(
    <NutritionListStyle>
      <NutritionListTopRowStyle>
        <Button
          className='bg-white green mh1'
          icon='add'
          onClick={handleAddNew}
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
      {showDialog && <Dialog
        toggler={toggler}
      >
        <NewDessert />
      </Dialog>}
    </NutritionListStyle>
  );
};

export default NutritionList;