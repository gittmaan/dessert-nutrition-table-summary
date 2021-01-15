import {
  useContext,
  useState,
} from 'react';
import styled from 'styled-components';
import { Keys } from '../../context/types';
import MainContext from '../../context/MainContext';

const NutritionTableStyle = styled.table.attrs({
  className: 'w-100',
  cellspacing: '0',
})``;

const NutritionTHeadStyle = styled.thead`
`;

const NutritionTHeadTrStyle = styled.tr.attrs({
  className: 'bg-white pointer',
})``;

const NutritionThStyle = styled.th.attrs({
  className: 'fw6 bb b--black-20 pt3 pb3 pr3 tc',
})``;

const NutritionThSpanStyle = styled.span.attrs({
  className: 'flex items-center justify-center',
})``;

const NutritionTBodyStyle = styled.tbody.attrs({
  className: 'lh-copy',
  'data-testid': 'table-body'
})``;

const NutritionTBodyTrStyle = styled.tr`
`;

const NutritionTBodyTdStyle = styled.td.attrs({
  className: 'pv3 pr3 bb b--black-20 tc',
})``;

interface StateSort {
  on: Keys;
  direction: 'asc' | 'desc';
}

const NutritionTable = () => {
  const {
    state
  } = useContext(MainContext);

  const [stateSort, setStateSort] = useState<StateSort>({
    on: 'name',
    direction: 'asc',
  });

  const sortedDesserts = state.desserts
    .slice()
    .sort((a:any, b:any) =>
      a[stateSort.on] > b[stateSort.on]
        ? stateSort.direction === 'asc'
          ? 1
          : -1
        : stateSort.direction === 'asc'
        ? -1
        : 1
    );

  const headerTextArray = [
    <input
      type='checkbox'
      value='selectAll'
    />,
    `Dessert (100g serving)`,
    `Calories`,
    `Fat (g)`,
    `Carbs (g)`,
    `Protein (g)`,
  ];

  return(
    <NutritionTableStyle>
      <NutritionTHeadStyle>
        <NutritionTHeadTrStyle>
          {headerTextArray.map((element: any, index: number) =>
            <NutritionThStyle key={index}>
              <NutritionThSpanStyle>
                {element}
              </NutritionThSpanStyle>
             </NutritionThStyle>
          )}
        </NutritionTHeadTrStyle>
      </NutritionTHeadStyle>
      <NutritionTBodyStyle>
        {sortedDesserts.map((dessert) =>
          <NutritionTBodyTrStyle key={dessert.id}>
            <NutritionTBodyTdStyle>
              <input
                data-testid='selector-box'
                className='mr2'
                type='checkbox'
              />
            </NutritionTBodyTdStyle>
            <NutritionTBodyTdStyle>
              {dessert.name}
            </NutritionTBodyTdStyle>
            <NutritionTBodyTdStyle>
              {dessert.nutritionInfo.calories}
            </NutritionTBodyTdStyle>
            <NutritionTBodyTdStyle>
              {dessert.nutritionInfo.fat}
            </NutritionTBodyTdStyle>
            <NutritionTBodyTdStyle>
              {dessert.nutritionInfo.carb}
            </NutritionTBodyTdStyle>
            <NutritionTBodyTdStyle>
              {dessert.nutritionInfo.protein}
            </NutritionTBodyTdStyle>
          </NutritionTBodyTrStyle>
        )}
      </NutritionTBodyStyle>
    </NutritionTableStyle>
  );
};

export default NutritionTable;