import FitBtn from "@components/Buttons/FitBtn";
import { patchMemberBudget } from "@services/api/member";
import { FontBold } from "@style/font.style";
import React, { useState } from "react";
import styled from "styled-components";

type Props = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  initialBudget: number;
  setRefresh: React.Dispatch<React.SetStateAction<number>>;
};

const Modal = ({ setShowModal, initialBudget, setRefresh }: Props) => {
  const [budget, setBudget] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(Number(e.target.value));
  };

  const formatNum = (num: number) => {
    return num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  };

  const requestSetBudget = () => {
    patchMemberBudget(budget)
      .then(res => {
        alert("한달 에산이 변경되었습니다.");
        setShowModal(false);
        setRefresh(prev => prev + 1);
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <Bg
        onClick={() => {
          setShowModal(false);
        }}
      />
      <Div>
        <FontBold size="16px">한달 예산을 입력하세요</FontBold>
        <InputContainer>
          <div className="wrapper">
            <Input
              placeholder={formatNum(initialBudget)}
              onChange={handleChange}
              value={budget || undefined}
              type="number"
            />
            <div className="underline" />
          </div>
          원
        </InputContainer>

        <div className="btns">
          <FitBtn text="입력 완료" onClick={requestSetBudget} />
        </div>
      </Div>
    </>
  );
};

export default Modal;

const Bg = styled.div`
  position: fixed;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
`;

const Div = styled.div`
  position: absolute;
  top: 12%;
  left: 50%;
  transform: translate(-50%, 50%);

  display: flex;
  box-sizing: border-box;
  width: 80%;

  padding: 20px;
  flex-direction: column;
  gap: 30px;
  z-index: 2;
  align-items: start;

  border-radius: 10px;
  background: #fff;

  .btns {
    margin: 0 auto;
    display: flex;
    gap: 15px;
  }
`;

const InputContainer = styled.div`
  margin: 0 auto;
  display: flex;
  width: 60%;
  font-size: 20px;
  color: var(--grey2);

  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 1px;
  }

  .underline {
    width: 100%;
    height: 1px;
    background-color: var(--grey2);
  }
`;

const Input = styled.input`
  margin: 0 auto;
  width: 50%;
  outline: none;
  border: none;

  font-size: 20px;
  color: var(--grey2);
`;
