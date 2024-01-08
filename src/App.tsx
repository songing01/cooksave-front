import Login from "@pages/Auth/Login";
import SignUp from "@pages/Auth/SignUp";
import Greeting from "@pages/Greeting";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      {/* 시작페이지 */}
      <Route path="greeting" element={<Greeting />} />

      {/* Auth 관련 페이지 */}
      <Route path="auth/login" element={<Login />} />
      <Route path="auth/sign-up" element={<SignUp />} />
    </Routes>
  );
}

export default App;
