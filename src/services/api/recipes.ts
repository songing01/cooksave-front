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

type RecipeIngredient = {
  recipeId?: number;
  list: TypeIngredient[];
};

//레시피 선택 / 직접생성 을 통한 식재료 수정 (history 반영 O)
export const patchRecipeIngredients = async (data: RecipeIngredient) => {
  let param = "";
  if (data.recipeId) {
    param = String(data.recipeId);
  } else {
    param = "input";
  }
  //서버에 보낼 데이터 형태 조정
  let ingredients = [] as any[];

  data.list.map((el: TypeIngredient, index) => {
    if (el.ingredientId) {
      ingredients[index] = { ingredientId: el.ingredientId, amount: el.amount };
    }
  });

  try {
    const response = await client.patch(
      `/recipes/${param}/ingredients`,
      ingredients,
    );
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

//레시피 요리 내역 저장
type InputIngredientList = {
  name?: string;
  total: number;
  list: TypeIngredient[];
};

//직접 생성한 레시피
export const postRecipeInput = async (data: InputIngredientList) => {
  const { name, total } = data;
  let ingredients = [] as TypeIngredient[];

  //서버에 전송할 데이터 형태 조정
  data.list.map((el: TypeIngredient, index) => {
    ingredients[index] = { name: el.name, amount: el.amount, price: el.price };
  });

  try {
    const response = await client.post(`/recipes/input/ingredients`, {
      name: name,
      total: total,
      ingredients: ingredients,
    });
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

//제공된 레시피
export const postRecipe = async (
  recipe_id: number,
  data: InputIngredientList,
) => {
  const { total } = data;
  let ingredients = [] as TypeIngredient[];

  //서버에 전송할 데이터 형태 조정
  data.list.map((el: TypeIngredient, index) => {
    ingredients[index] = { name: el.name, amount: el.amount, price: el.price };
  });

  try {
    const response = await client.post(`/recipes/${recipe_id}/ingredients`, {
      total: total,
      ingredients: ingredients,
    });
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};
