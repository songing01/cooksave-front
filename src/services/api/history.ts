import client from "./client";

//요리 내역 상세 조회
export const getHistory = async (history_id: number) => {
  try {
    const response = await client.get(`/histories/${history_id}`);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

//요리 내역 삭제
export const deleteHistory = async (history_id: number) => {
  try {
    const response = await client.delete(`/histories/${history_id}`);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

//1년 통계 조회
export const getAnnualHistory = async () => {
  try {
    const response = await client.get(`/histories/annual`);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};
