import Greeting from "@pages/Greeting";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      {/* 시작페이지 */}
      <Route path="greeting" element={<Greeting />} />
    </Routes>
  );
}

export default App;
