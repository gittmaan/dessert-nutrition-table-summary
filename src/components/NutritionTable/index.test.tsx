import {
  cleanup,
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
} from '@apollo/client';
import MainContext from '../../context/MainContext';
import NutritionTable from './index';

afterEach(cleanup)

const apolloClient = new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache(),
});

test('renders headers properly', () => {
  render(
    <NutritionTable />
  );
  const cell = screen.getByText(/Dessert/i);
  expect(cell).toBeInTheDocument();
});

test('renders rows properly', () => {
  render(
    <BrowserRouter>
      <ApolloProvider client={apolloClient}>
        <MainContext.Provider
          value={{
            dispatch: () => {},
            state: {
              desserts: [
                {
                  id: '1',
                  name: 'Laddo',
                  calories: 518,
                  fat: 26,
                  carbs: 65,
                  protein: 60,
                },
                {
                  id: '2',
                  name: 'Gulab Jamun',
                  calories: 398,
                  fat: 2,
                  carbs: 98,
                  protein: 0,
                }
              ],
            }
          }}
        >
          <NutritionTable />
        </MainContext.Provider>
      </ApolloProvider>
    </BrowserRouter>
  );
  const cell = screen.getByText(/Laddo/i);
  expect(cell).toBeInTheDocument();
});