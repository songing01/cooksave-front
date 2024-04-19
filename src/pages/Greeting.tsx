import logo from "@assets/common/logo.png";
import LongBtn from "@components/Buttons/LongBtn";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Greeting = () => {
  const navigate = useNavigate();

  return (
    <Div>
      <Img src={logo} />

      <div className="bottom">
        <LongBtn text={"시작하기"} onClick={() => navigate("/auth/login")} />
      </div>
    </Div>
  );
};

export default Greeting;

const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .bottom {
    position: absolute; //하단 고정
    bottom: 55px;
  }
`;

const Img = styled.img`
  margin: 252px 0 0 0;
  width: 118px;
  height: 122px;
`;
