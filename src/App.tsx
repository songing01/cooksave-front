import Login from "@pages/Auth/Login";
import SignUp from "@pages/Auth/SignUp";
import SelfCreate from "@pages/Create/SelfCreate";
import Greeting from "@pages/Greeting";
import Editing from "@pages/Main/Editing";
import Main from "@pages/Main/Main";
import Detail from "@pages/Recipe/Detail";
import Recipes from "@pages/Recipe/Recipes";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      {/* 시작페이지 */}
      <Route path="greeting" element={<Greeting />} />

      {/* Auth 관련 페이지 */}
      <Route path="auth/login" element={<Login />} />
      <Route path="auth/sign-up" element={<SignUp />} />

      {/* 메인 페이지 */}
      <Route path="/" element={<Main />} />
      <Route path="/edit" element={<Editing />} />

      {/* 식재료 등록 페이지 */}
      <Route path="/create/self" element={<SelfCreate />} />

      {/* 레시피 관련 페이지 */}
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/recipes/1" element={<Detail />} />
    </Routes>
  );
}

export default App;
