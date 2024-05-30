import { FontRegular } from "@style/font.style";
import styled from "styled-components";

type Props = {
  text: string;
  onClick?: () => void;
};

const UnderLinedBtn = ({ text, onClick }: Props) => {
  return (
    <Div onClick={onClick}>
      <FontRegular size="12px">{text}</FontRegular>
    </Div>
  );
};

export default UnderLinedBtn;

const Div = styled.div`
  color: var(--grey2);
  font-family: Inter;
  text-decoration-line: underline;
`;
