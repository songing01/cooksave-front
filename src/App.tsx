import Login from "@pages/Auth/Login";
import SignUp from "@pages/Auth/SignUp";
import SelfCreate from "@pages/Create/SelfCreate";
import Greeting from "@pages/Greeting";
import Editing from "@pages/Main/Editing";
import Main from "@pages/Main/Main";
import Confirmation from "@pages/Recipe/Confirmation";
import Detail from "@pages/Recipe/Detail";
import IngredientList from "@pages/Recipe/IngredientList";
import Recipes from "@pages/Recipe/Recipes";
import SavedRecipes from "@pages/Recipe/SavedRecipes";
import Annual from "@pages/Statistics/Annual";
import Monthly from "@pages/Statistics/Monthly";
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
      <Route path="/recipes/1/ingredients" element={<IngredientList />} />
      <Route
        path="/recipes/1/confirmation"
        element={<Confirmation isHistory={false} />}
      />
      <Route path="/recipes/save" element={<SavedRecipes />} />

      {/* 통계 관련 페이지 */}
      <Route path="/statistics/23-1" element={<Monthly />} />
      <Route path="/history/1" element={<Confirmation isHistory={true} />} />
      <Route path="/statistics" element={<Annual />} />
    </Routes>
  );
}

export default App;
