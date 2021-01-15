type Keys = 'name' | 'calories' | 'fat' | 'carbs' | 'protein';

export type Dessert = {
    [key in Keys]: number;
} & {
    name: string;
    id?: string;
};
