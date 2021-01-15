import {
  useEffect,
  useState,
} from 'react';
import styled from 'styled-components';
import Button from '../Button';
import Input from '../Input';
import useContextEntities from '../../context/mainContextEntities';

const NewDessertStyle = styled.div.attrs({
  className: 'bg-white pa4'
})`
`;

const NewDessertHeaderStyle = styled.div.attrs({
  className: 'bg-gold pa2 white b flex items-center justify-center mb4'
})`
`;

const NewDessertInformationStyle = styled.p.attrs({
  className: 'ba b--light-blue pa2 mb1 blue bg-lightest-blue'
})`
`;

const NewDessert = () => {
  const [showInformation, setShowInformation] = useState(true);
  const [dessert, setDessert] = useState({
    name: '',
    calories: 0,
    fat: 0,
    carbs: 0,
    protein: 0,
  });

  const {
    dispatch
  } = useContextEntities();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    console.warn('handleSubmit called');
    event.preventDefault();
    dispatch({
      type: 'DESSERT_ADDED',
      payload: dessert,
    })
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setDessert((prevState) => {
      return {
        ...prevState,
        [name]: name === 'name' ? value : (value ? parseInt(value) : 0),
      };
    });
  };

  useEffect(() => {
    setTimeout(() => setShowInformation(false), 5000);
  }, [setShowInformation]);

  return (
    <NewDessertStyle>
      {showInformation && <NewDessertInformationStyle>
        <span className='material-icons-outlined'>information_</span>
         To close this Dialog, hit Esc Key!
      </NewDessertInformationStyle>}
      <NewDessertHeaderStyle>
        <span className='material-icons-outlined'>warning_</span>
        Please fill all details before you submit
      </NewDessertHeaderStyle>
      <form>
        <Input
          label='Dessert Name'
          name='name'
          onChange={handleInputChange}
          value={dessert.name}
        />
        <Input
          label='Calories'
          name='calories'
          onChange={handleInputChange}
          value={dessert.calories}
        />
        <Input
          label='Fat'
          name='fat'
          onChange={handleInputChange}
          value={dessert.fat}
        />
        <Input
          label='Carbs'
          name='carbs'
          onChange={handleInputChange}
          value={dessert.carbs}
        />
        <Input
          label='Protein'
          name='protein'
          onChange={handleInputChange}
          value={dessert.protein}
        />
      </form>
      <Button
        // ref https://roperzh.github.io/tachyons-cheatsheet/
        className='bg-dark-green white w-100 justify-center'
        icon='done'
        onClick={handleSubmit}
      >
        SUBMIT
      </Button>
    </NewDessertStyle>
  );
};

export default NewDessert;