import LongBtn from "@components/Buttons/LongBtn";
import Item from "@components/Ingredients/Item/Item";
import List from "@components/Ingredients/List/List";
import { FontBold, FontMedium } from "@style/font.style";
import styled from "styled-components";

import share from "@assets/recipe/share.png";

const Drawer = () => {
  return (
    <Div>
      <Top>
        <FontBold size="20px">제육볶음</FontBold>
        <img src={share} />
      </Top>

      <div className="scrollable-area">
        <div className="main-ingredients">
          <FontBold size="16px">주요 재료</FontBold>
          <FontMedium size="16px">
            돼지고기 200g, 대파, 마늘, 양파 등
          </FontMedium>
        </div>

        <div className="my-ingredients">
          <FontBold size="16px">내가 가진 재료</FontBold>
          <List isEditing={false} />
        </div>

        <div className="video">
          <FontBold size="16px">관련 영상</FontBold>
          <iframe
            className="youtube"
            src="https://www.youtube.com/embed/spjIN3vPVVY?si=xTN91D6lwGDoKTHy"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>

      <LongBtn text="이 레시피로 할게요!" />
    </Div>
  );
};

export default Drawer;

const Div = styled.div`
  z-index: 1;
  display: flex;
  width: 100%;
  max-width: 481px;
  height: 70%;
  padding: 20px;
  box-sizing: border-box;
  flex-shrink: 0;

  flex-direction: column;
  align-items: center;
  gap: 20px;

  position: fixed; //position: fixed로 인해 global style의 max-width가 적용 안됨
  bottom: 0;

  border-radius: 25px 25px 0px 0px;
  background: #fff;
  box-shadow: 0px -20px 10px 0px rgba(138, 138, 138, 0.35);

  .scrollable-area {
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 30px;
  }

  .main-ingredients {
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  .my-ingredients {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
  }

  .video {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
    width: 100%;

    .youtube {
      width: 95%;
    }
  }
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 23px;
    height: 23px;
  }
`;
