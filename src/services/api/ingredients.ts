import client from "./client";
import { TypeIngredient } from "type/ingredients";

//식재료 목록 조회
export const getIngredients = async () => {
  try {
    const response = await client.get(`/ingredients/list`);
    return Promise.resolve(response);
  } catch (error) {
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

export const patchIngredients = async (data: Array<TypeIngredient>) => {
  //서버에 보낼 데이터 형태 조정
  let ingredients = [] as any[];

  data.map((el: TypeIngredient, index) => {
    ingredients.push({
      ingredientId: el.ingredientId,
      iconId: el.iconId,
      amount: el.amount,
    });
  });

  try {
    const response = await client.patch(`/ingredients/list`, ingredients);
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
