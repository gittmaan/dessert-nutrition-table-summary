import { useState } from 'react';
import styled from 'styled-components';
import Button from '../Button';
import Input from '../Input';

const NewDessertStyle = styled.div.attrs({
  className: 'bg-white pa5'
})`
`;

const NewDessertHeaderStyle = styled.div.attrs({
  className: 'bg-gold pa2 white b flex items-center justify-center mb4'
})`
`;

const NewDessert = () => {
  const [dessert, setDessert] = useState({
    name: '',
    calories: 0,
    fat: 0,
    carbs: 0,
    protein: 0,
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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

  return (
    <NewDessertStyle>
      <NewDessertHeaderStyle>
        <span className='material-icons-outlined'>warning_</span>
        Please fill all details before you submit
      </NewDessertHeaderStyle>
      <form onSubmit={handleSubmit}>
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
        className='bg-green white w-100 justify-center'
        icon='done'
      >
        SUBMIT
      </Button>
    </NewDessertStyle>
  );
};

export default NewDessert;