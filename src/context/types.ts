export type Keys = 'name' | 'calories' | 'fat' | 'carbs' | 'protein';

export type Dessert = {
    [key in Keys]: number;
} & {
    name: string;
    id?: string;
    nutritionInfo: {
      calories: number,
      fat: number,
      carb: number,
      protein: number,
    }
};
