import arrow from "@assets/recipe/arrow.png";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const RecipeInput = () => {
  const navigate = useNavigate();
  return (
    <Div>
      <input placeholder="레시피명을 입력하세요" />
      <img
        className="arrow"
        src={arrow}
        onClick={() => navigate("/recipes/1")}
      />
    </Div>
  );
};

export default RecipeInput;

const Div = styled.div`
  width: 90%;
  height: 67px;
  margin: 0 auto;
  border-radius: 6px;
  background: var(--grey1);
  padding: 0 13px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    outline: none;
    border: none;
    background-color: var(--grey1);

    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .arrow {
    width: 30px;
  }
`;
