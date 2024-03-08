import Header from "@components/Header/Header";
import Drawer from "@components/Recipe/Drawer";
import styled from "styled-components";

const Detail = () => {
  return (
    <Div>
      <Header isBack={true} />

      <Img>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKfOtp1oPwBSMufz7Nlrvku-6bs71vDe5_bg&usqp=CAU" />
      </Img>

      <Drawer />
    </Div>
  );
};

export default Detail;

const Div = styled.div`
  width: 100%;
`;

const Img = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
  }
`;
