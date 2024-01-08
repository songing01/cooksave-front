import { FontBold } from "@style/font.style";
import styled from "styled-components";

type Props = {
  text: string;
  onClick?: () => void;
};

const LongBtn = ({ text, onClick }: Props) => {
  return (
    <Btn onClick={onClick}>
      <FontBold size="16px">{text}</FontBold>
    </Btn>
  );
};

export default LongBtn;

const Btn = styled.div`
  width: 331px;
  height: 46px;
  flex-shrink: 0;
  border-radius: 8px;
  background-color: #004c92;
  color: #ffffff;

  display: flex;
  align-items: center;
`;
