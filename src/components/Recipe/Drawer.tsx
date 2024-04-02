import LongBtn from "@components/Buttons/LongBtn";
import List from "@components/Ingredients/List/List";
import { FontBold, FontMedium } from "@style/font.style";
import styled from "styled-components";

import share from "@assets/recipe/share.png";
import { useNavigate } from "react-router-dom";
import { TypeRecipe } from "type/recipe";

type Props = {
  detail: TypeRecipe;
  recipeId: number;
};
const Drawer = ({ detail, recipeId }: Props) => {
  const navigate = useNavigate();
  const { name, mainIng, ingredients, video } = detail;
  return (
    <Div>
      <Top>
        <FontBold size="20px">{name}</FontBold>
        <img src={share} />
      </Top>

      <div className="scrollable-area">
        <div className="main-ingredients">
          <FontBold size="16px">주요 재료</FontBold>
          <FontMedium size="16px">{mainIng}</FontMedium>
        </div>

        <div className="my-ingredients">
          <FontBold size="16px" style={{ paddingLeft: "20px" }}>
            내가 가진 재료
          </FontBold>

          <List
            isEditing={false}
            isDeletable={false}
            list={ingredients}
            isIconEditable={false}
          />
        </div>

        <div className="video">
          <FontBold size="16px">관련 영상</FontBold>
          <iframe
            className="youtube"
            src={video}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
      <Bottom>
        <LongBtn
          text="이 레시피로 할게요!"
          onClick={() => navigate(`/recipes/${recipeId}/ingredients`)}
        />
      </Bottom>
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
  /* padding: 20px;
  box-sizing: border-box; */
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
    width: 100%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 30px;
  }

  .main-ingredients {
    width: 100%;
    padding-left: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  .my-ingredients {
    width: 100%;
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
    margin-bottom: 50px;
    padding-left: 20px;
    box-sizing: border-box;

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
  padding: 20px;
  box-sizing: border-box;

  img {
    width: 23px;
    height: 23px;
  }
`;

const Bottom = styled.div`
  width: 100%;
  padding: 30px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;
