import styled from "styled-components";
import "./font.css";

type FontProps = {
  size?: string;
};

const FontBold = styled.p<FontProps>`
  margin: 0 0;
  text-align: center;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: ${props => props.size || "12px"};
`;

const FontMedium = styled.p<FontProps>`
  margin: 0 0;
  text-align: center;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: ${props => props.size || "12px"};
`;

const FontRegular = styled.p<FontProps>`
  margin: 0 0;
  text-align: center;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: ${props => props.size || "12px"};
`;

export { FontBold, FontMedium, FontRegular };
