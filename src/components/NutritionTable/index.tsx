import {
  useContext,
  useEffect,
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

const NutritionThSpanSortStyle = styled.span.attrs({
  className: 'material-icons',
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

interface NutritionTableProps {
  onSelectedCountChange: any,
  selectedCount: any,
  selectedDesserts: any,
  setSelectedDesserts: any,
};

const NutritionTable = ({
  onSelectedCountChange,
  selectedCount,
  selectedDesserts,
  setSelectedDesserts,
}: NutritionTableProps) => {
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

  const headerElementsArray = [
    ['input', <input
      type='checkbox'
      value='selectAll'
      checked={
        Object
          .keys(selectedDesserts)
          .every((key) => selectedDesserts[key])
        && Object
          .keys(selectedDesserts).length === state.desserts.length
      }
      onChange={(event) => {
        const {
          target: {
            checked
          } = {}
        } = event;

        setSelectedDesserts(() => state
          .desserts
          .reduce((accumulator, dessert) => ({
            ...accumulator,
            [dessert.id ? dessert.id :  '']: checked,
            }),
            {}
          )
        );
      }}
    />, false],
    ['name', `Dessert (100g serving)`, true],
    ['calories', `Calories`, true],
    ['fat', `Fat (g)`, true],
    ['carb', `Carbs (g)`, true],
    ['protein', `Protein (g)`, true],
  ];

  const handleSort = (on: Keys) => {
    setStateSort((state) => {
      return {
        on,
        direction: state.direction === 'asc' ? 'desc' : 'asc',
      };
    });
  };

  useEffect(() => {
    onSelectedCountChange(Object.keys(selectedDesserts).filter((key) => selectedDesserts[key]).length);
  }, [selectedDesserts, onSelectedCountChange]);

  return(
    <NutritionTableStyle>
      <NutritionTHeadStyle>
        <NutritionTHeadTrStyle>
          {headerElementsArray.map((element: any, index: number) =>
            <NutritionThStyle
              key={index}
              onClick={() => (element[2] && handleSort(element[0]))}
            >
              <NutritionThSpanStyle>
                {element[1]}
                {element[2] && <NutritionThSpanSortStyle>
                  import_export
                </NutritionThSpanSortStyle>}
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
                value={dessert.id}
                checked={
                  !!selectedDesserts[dessert.id ? dessert.id : '']
                }
                onChange={(event) => {
                  const {
                    target: {
                      checked
                    } = {}
                  } = event;

                  setSelectedDesserts(() => ({
                    ...selectedDesserts,
                    [dessert.id ? dessert.id : '']: checked,
                  }));
                }}
              />
            </NutritionTBodyTdStyle>
            <NutritionTBodyTdStyle>
              {dessert.name}
            </NutritionTBodyTdStyle>
            <NutritionTBodyTdStyle>
              {dessert.calories}
            </NutritionTBodyTdStyle>
            <NutritionTBodyTdStyle>
              {dessert.fat}
            </NutritionTBodyTdStyle>
            <NutritionTBodyTdStyle>
              {dessert.carb}
            </NutritionTBodyTdStyle>
            <NutritionTBodyTdStyle>
              {dessert.protein}
            </NutritionTBodyTdStyle>
          </NutritionTBodyTrStyle>
        )}
      </NutritionTBodyStyle>
    </NutritionTableStyle>
  );
};

export default NutritionTable;