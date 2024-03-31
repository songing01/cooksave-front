import client from "./client";
import { TypeIngredient } from "type/ingredients";

//레시피 북마크
export const postRecipesHeart = async (recipe_id: number) => {
  try {
    const response = await client.post(`/recipes/${recipe_id}/hearts`);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

//레시피 북마크 취소
export const deleteRecipesHeart = async (recipe_id: number) => {
  try {
    const response = await client.delete(`/recipes/${recipe_id}/hearts`);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

//북마크한 레시피 목록 조회
export const getRecipesSaved = async () => {
  try {
    const response = await client.get(`/recipes/saved`);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

//전체 레시피 목록 조회
export const getRecipes = async () => {
  try {
    const response = await client.get(`/recipes`);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

//레시피 목록 상세 조회
export const getRecipesDetail = async (recipe_id: number) => {
  try {
    const response = await client.get(`/recipes/${recipe_id}`);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

//레시피 선택을 통한 식재료 수정 (history 반영 O)
type RecipeIngredientPatch = {
  ingredientId: number;
  amount: number;
};

export const patchIngredients = async (
  recipe_id: number,
  body: Array<RecipeIngredientPatch>,
) => {
  try {
    const response = await client.patch(
      `/recipes/${recipe_id}/ingredients`,
      body,
    );
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

//레시피 직접 생성을 통한 식재료 수정 (history 반영 O)
type RecipeInputPatch = {
  ingredientId: number;
  amount: number;
};

export const patchRecipeInput = async (
  recipe_id: number,
  body: Array<RecipeInputPatch>,
) => {
  try {
    const response = await client.patch(`/recipes/input/ingredients`, body);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

//레시피 요리 내역 저장
type InputIngredientList = {
  name?: string;
  total: number;
  ingredients: TypeIngredient[];
};

//직접 생성한 레시피
export const postRecipeInput = async (body: InputIngredientList) => {
  try {
    const response = await client.post(`/recipes/input/ingredients`, body);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

//제공된 레시피
export const postRecipe = async (
  recipe_id: number,
  body: InputIngredientList,
) => {
  try {
    const response = await client.post(
      `/recipes/${recipe_id}/ingredients`,
      body,
    );
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};
