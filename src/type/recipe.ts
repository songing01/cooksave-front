import { TypeIngredient } from "./ingredients";

export type TypeRecipe = {
  recipeId?: number;
  name: string;
  image: string;
  mainIng: string;
  heart: boolean;
  ingredients?: TypeIngredient[];
  video?: string;
};
