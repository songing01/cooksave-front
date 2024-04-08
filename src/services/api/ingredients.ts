import client from "./client";
import { TypeIngredient } from "type/ingredients";

//식재료 목록 조회
export const getIngredients = async () => {
  try {
    const response = await client.get(`/ingredients/list`);
    console.log("1");
    return Promise.resolve(response);
  } catch (error) {
    console.log("2");
    return Promise.reject(error);
  }
};

//식재료 직접 등록
export const postIngredientsTyping = async (body: Array<TypeIngredient>) => {
  try {
    const response = await client.post(`/ingredients/typing`, body);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

//식재료 목록에서 수정 (history 반영 X)
type IngredientPatch = {
  ingredientId: number;
  iconId: number;
  amount: number;
};

export const patchIngredients = async (body: Array<IngredientPatch>) => {
  try {
    const response = await client.patch(`/ingredients/list`, body);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

//식재료 목록에서 삭제
export const deleteIngredients = async (ingredient_id: number) => {
  try {
    const response = await client.delete(`/ingredients/list/${ingredient_id}`);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};
