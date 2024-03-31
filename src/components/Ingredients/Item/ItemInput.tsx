import icon1 from "@assets/ingredients/icon1.png";
import styled from "styled-components";
import { IconList, icons } from "./IconList";
import { FontBold, FontRegular } from "@style/font.style";
import { useState } from "react";
import { TypeIngredient } from "type/ingredients";

type Props = {
  inputs: TypeIngredient;
  setInputs: React.Dispatch<React.SetStateAction<TypeIngredient>>;
};

const ItemInput = ({ inputs, setInputs }: Props) => {
  const [isOpenList, setIsOpenList] = useState(false);
  const { iconId, name, price, amount } = inputs;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const nextInputs = {
      ...inputs,
      [name]: value,
    };

    setInputs(nextInputs);
  };

  const handlePlus = () => {
    const nextInputs = {
      ...inputs,
      amount: amount + 0.25,
    };

    setInputs(nextInputs);
  };

  const handleMinus = () => {
    if (amount === 0.25) return;

    const nextInputs = {
      ...inputs,
      amount: amount - 0.25,
    };

    setInputs(nextInputs);
  };

  return (
    <Div>
      <div className="left-container">
        <img
          className="icon"
          src={iconId && icons[iconId - 1]}
          onClick={() => {
            setIsOpenList(!isOpenList);
          }}
        />

        <Detail>
          <input
            name="name"
            className="name"
            placeholder="재료명을 입력하세요"
            value={name}
            onChange={handleChange}
          />

          <input
            type="number"
            name="price"
            className="price"
            placeholder="가격을 입력하세요"
            value={price || "가격을 입력하세요"}
            onChange={handleChange}
          />
        </Detail>
      </div>

      <CountWrapper>
        <div className="minus" onClick={handleMinus}>
          <FontRegular size="20px">-</FontRegular>
        </div>

        <Count>
          <FontBold size="12px">{amount}</FontBold>
        </Count>

        <div className="plus" onClick={handlePlus}>
          <FontRegular size="20px">+</FontRegular>
        </div>
      </CountWrapper>

      {/* 리스트에서 아이콘 선택 */}
      {isOpenList && (
        <div className="icon-list">
          <IconList
            setIsOpenList={setIsOpenList}
            inputs={inputs}
            setInputs={setInputs}
          />
        </div>
      )}
    </Div>
  );
};

export default ItemInput;

const Div = styled.div`
  position: relative;
  width: 90%;
  height: 81px;
  border-radius: 6px;
  background: var(--grey1);
  box-sizing: border-box;
  padding: 13px 9px 13px 13px;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;

  .icon {
    width: 50px;
  }

  .icon-list {
    position: absolute;
    top: 10px;
    left: 70px;
    z-index: 1;
  }

  .left-container {
    display: flex;
    gap: 15px;
  }
`;

const Detail = styled.div`
  height: 57px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2px;

  input {
    border: none;
    outline: none;
    background-color: var(--grey1);
    font-family: Noto Sans KR;
  }

  .price {
    width: 90%;
    color: var(--grey2);

    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .name {
    width: 90%;

    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

const Count = styled.div`
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 40px;
  background-color: #fff;

  line-height: 27px;
`;

const CountWrapper = styled.div`
  width: 58px;
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;

  .minus {
    margin-bottom: 5px;
  }
`;
