import styled from "styled-components";

import analysis_icon from "@assets/navbar/analysis_icon.png";
import main_icon from "@assets/navbar/main_icon.png";
import recipe_icon from "@assets/navbar/recipe_icon.png";
import save_icon from "@assets/navbar/save_icon.png";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const today = new Date();
  const date = `${today.toISOString().substring(0, 7)}-01`;

  const navigate = useNavigate();
  return (
    <Div>
      <img src={main_icon} onClick={() => navigate("/")} />
      <img src={recipe_icon} onClick={() => navigate("/recipes")} />
      <img
        src={analysis_icon}
        onClick={() => navigate(`/statistics/${date}`)}
      />
      <img src={save_icon} onClick={() => navigate("/recipes/save")} />
    </Div>
  );
};

export default NavBar;

const Div = styled.div`
  position: fixed;
  bottom: 0;

  display: flex;
  width: 100%;
  max-width: 481px; //position: fixed로 인해 global style의 max-width가 적용 안됨
  padding: 10px 20px 20px 30px;
  justify-content: space-between;
  box-sizing: border-box;

  background-color: #ffffff;

  img {
    width: 30px;
    height: 30px;
    flex-shrink: 0;
  }
`;
