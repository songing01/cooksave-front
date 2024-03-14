import Header from "@components/Header/Header";
import styled from "styled-components";
import example from "@assets/create/ocr-eg.png";
import gallery from "@assets/create/gallery.png";
import example2 from "@assets/create/od-eg.png";

import { FontMedium } from "@style/font.style";
type Props = {
  isOCR: boolean;
};
const AICreate = ({ isOCR }: Props) => {
  return (
    <Div>
      <Header
        isBack={true}
        title={isOCR ? "식재료 등록 - 텍스트 인식" : "식재료 등록 - 객체 인식"}
      />

      <Example>
        <Container>
          {isOCR ? <img src={example} /> : <img src={example2} />}
        </Container>
        <div className="eg-text">
          <FontMedium size="12px">*예시 이미지 입니다</FontMedium>
        </div>
      </Example>

      <div className="explanation">
        <FontMedium size="16px" style={{ textAlign: "start" }}>
          {isOCR ? (
            <>
              위와 같이 영수증이나 주문내역 이미지를
              <br />
              촬영 및 업로드 해주세요
            </>
          ) : (
            <>
              위와 같이 등록하고자 하는
              <br />
              상품을 촬영해주세요
            </>
          )}
        </FontMedium>
      </div>

      <Btn>
        <img className="gallery" src={gallery} />
      </Btn>
    </Div>
  );
};

export default AICreate;

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 20px;

  .explanation {
    margin-top: 30px;
    width: 90%;
    display: flex;
  }
`;

const Example = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .eg-text {
    margin-top: 5px;
    width: 90%;
    display: flex;
    justify-content: end;
    color: #7d7d7d;
  }
`;

const Container = styled.div`
  display: flex;
  width: 90%;
  box-sizing: border-box;
  height: 350px;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  background: #edf7ff;

  img {
    height: 100%;
  }
`;

const Btn = styled.div`
  width: 90%;
  height: 246px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: #eee;

  img {
    width: 62.093px;
    height: 60px;
    flex-shrink: 0;
  }
`;
