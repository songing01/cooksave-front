import styled from "styled-components";

import plus from "@assets/main/plus.png";
import { FontBold } from "@style/font.style";
import { useState } from "react";

const CreateBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpen && (
        <List>
          <FontBold size="12px" onClick={() => setIsOpen(!isOpen)}>
            직접 등록
          </FontBold>
          <div className="line" />
          <FontBold size="12px" onClick={() => setIsOpen(!isOpen)}>
            텍스트 인식 등록
          </FontBold>
          <div className="line" />
          <FontBold size="12px" onClick={() => setIsOpen(!isOpen)}>
            사물 인식 등록
          </FontBold>
        </List>
      )}
      <Btn onClick={() => setIsOpen(!isOpen)}>
        <img src={plus} />
      </Btn>
    </>
  );
};

export default CreateBtn;

const Btn = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 60px;
  background: #fff;
  box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.18);

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 30px;
    height: 30px;
    flex-shrink: 0;
  }
`;

const List = styled.div`
  position: absolute;
  bottom: 70px;
  display: flex;
  width: 135px;
  height: 81px;
  padding: 7px 0px;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.25);
  color: #004c92;

  .line {
    width: 100%;
    height: 1px;
    background: #d9d9d9;
  }
`;
