import styled from "styled-components";

import textLogo from "@assets/common/textLogo.png";
import back from "@assets/common/back.png";
import { FontBold } from "@style/font.style";
import { useNavigate } from "react-router-dom";

type Props = {
  isBack: boolean;
  title?: string;
};

const Header = ({ isBack, title }: Props) => {
  const navigate = useNavigate();

  return (
    <Div>
      {!isBack ? (
        <Logo src={textLogo} onClick={() => navigate("/")} />
      ) : (
        <BackButton src={back} onClick={() => navigate(-1)} />
      )}

      <div className="title">
        <FontBold size="12px">{title}</FontBold>
      </div>
    </Div>
  );
};

export default Header;

const Div = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 12px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .title {
    color: #7d7d7d;
  }
`;

const Logo = styled.img`
  width: 118px;
  height: 17.51px;
  flex-shrink: 0;
`;

const BackButton = styled.img`
  height: 17.51px;
  flex-shrink: 0;
`;
