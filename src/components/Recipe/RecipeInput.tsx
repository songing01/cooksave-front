import arrow from "@assets/recipe/arrow.png";
import styled from "styled-components";

const RecipeInput = () => {
  return (
    <Div>
      <input placeholder="레시피명을 입력하세요" />
      <img className="arrow" src={arrow} />
    </Div>
  );
};

export default RecipeInput;

const Div = styled.div`
  width: 356px;
  height: 67px;
  margin: 0 auto;
  border-radius: 6px;
  background: #edf7ff;
  padding: 0 13px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    outline: none;
    border: none;
    background-color: #edf7ff;

    font-family: Noto Sans KR;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .arrow {
    width: 30px;
  }
`;
