import { FontBold } from "@style/font.style";
import styled from "styled-components";

type Props = {
  text: string;
  onClick?: () => void;
};
const FitBtn = ({ text, onClick }: Props) => {
  return (
    <Btn onClick={onClick}>
      <FontBold size="14px">{text}</FontBold>
    </Btn>
  );
};

export default FitBtn;

const Btn = styled.div`
  flex-shrink: 0;
  border-radius: 5px;
  background: #004c92;
  color: #ffffff;
  width: fit-content;
  padding: 3px 7px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
