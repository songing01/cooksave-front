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

  console.log(ingredients);

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

//식재료 object detection 이미지 전송 & 인식 결과 얻기
export const postObjectDetectionImg = async (file: File) => {
  const ai_url = `${process.env.REACT_APP_AI_SERVER_URL}`;
  const formData = new FormData();
  formData.append("file", file);
  try {
    const response = await client.post(ai_url, formData);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

//object detection 인식 결과 등록
export const postObjectDetectionResult = async (
  body: Array<TypeIngredient>,
) => {
  console.log(body);
  try {
    const response = await client.post(`/ingredients/object`, body);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};
