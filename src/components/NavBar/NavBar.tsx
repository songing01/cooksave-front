import styled from "styled-components";

import analysis_icon from "@assets/navbar/analysis_icon.png";
import main_icon from "@assets/navbar/main_icon.png";
import recipe_icon from "@assets/navbar/recipe_icon.png";
import save_icon from "@assets/navbar/save_icon.png";

const NavBar = () => {
  return (
    <Div>
      <img src={main_icon} />
      <img src={recipe_icon} />
      <img src={analysis_icon} />
      <img src={save_icon} />
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
  padding: 10px 20px;
  justify-content: space-between;
  box-sizing: border-box;

  img {
    width: 30px;
    height: 30px;
    flex-shrink: 0;
  }
`;
