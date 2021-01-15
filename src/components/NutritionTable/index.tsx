import styled from 'styled-components';

const NutritionTableStyle = styled.table.attrs({
  className: 'w-100',
})``;

const NutritionTHeadStyle = styled.thead`
`;

const NutritionTrStyle = styled.tr.attrs({
  className: 'bg-white pointer',
})``;

const NutritionThStyle = styled.th.attrs({
  className: 'fw6 bb b--black-20 pt3 pb3 pr3 tc',
})``;

const NutritionThSpanStyle = styled.span.attrs({
  className: 'flex items-center justify-center',
})``;

const NutritionTable = () => {
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
        <NutritionTrStyle>
          <NutritionTrStyle>
            {headerTextArray.map((element: any, index: number) =>
              <NutritionThStyle key={index}>
                <NutritionThSpanStyle>
                  {element}
                </NutritionThSpanStyle>
               </NutritionThStyle>
            )}
          </NutritionTrStyle>
        </NutritionTrStyle>
      </NutritionTHeadStyle>
    </NutritionTableStyle>
  );
};

export default NutritionTable;