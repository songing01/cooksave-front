import Header from "@components/Header/Header";
import Drawer from "@components/Recipe/Drawer";
import { getRecipesDetail } from "@services/api/recipes";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { TypeRecipe } from "type/recipe";

const Detail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState<TypeRecipe>();

  useEffect(() => {
    id && getRecipesDetail(Number(id)).then(res => setDetail(res.data));
  }, []);

  return (
    <Div>
      <Header isBack={true} />

      <Img>
        <img src={detail?.image} />
      </Img>

      {detail && id && <Drawer detail={detail} recipeId={Number(id)} />}
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
