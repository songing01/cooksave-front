import { isLoginState } from "@services/store/auth";
import { Navigate, Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";

//로그인 완료 유저만 접근 가능한 페이지
export const PrivateRoute = () => {
  const isLogin = useRecoilValue(isLoginState);

  return isLogin ? <Outlet /> : <Navigate to="/greeting" />;
};
