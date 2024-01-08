import styled from "styled-components";
import "./font.css";

type FontProps = {
  size?: string;
};

const FontBold = styled.p<FontProps>`
  margin: 0 auto 0 auto;
  text-align: center;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: ${props => props.size || "12px"};
  line-height: normal;
`;

const FontMedium = styled.p<FontProps>`
  margin: 0 auto 0 auto;
  text-align: center;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: ${props => props.size || "12px"};
  line-height: normal;
`;

const FontRegular = styled.p<FontProps>`
  margin: 0 auto 0 auto;
  text-align: center;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: ${props => props.size || "12px"};
  line-height: normal;
`;

const FontBlue = styled.div`
  color: #004c92;
`;
const FontGray = styled.div`
  color: #7d7d7d;
`;
const FontWhite = styled.div`
  color: #ffffff;
`;

export { FontBold, FontMedium, FontRegular, FontBlue, FontGray, FontWhite };
