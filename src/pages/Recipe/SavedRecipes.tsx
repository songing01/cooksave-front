import ChatbotBtn from "@components/Chat/ChatbotBtn";
import Header from "@components/Header/Header";
import NavBar from "@components/NavBar/NavBar";
import RecipeList from "@components/Recipe/RecipeList";
import { getRecipesSaved } from "@services/api/recipes";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { TypeRecipe } from "type/recipe";

const SavedRecipes = () => {
  const [list, setList] = useState<TypeRecipe[]>([]);

  useEffect(() => {
    //찜한 레시피 목록 조회
    getRecipesSaved().then(res => setList(res.data));
  }, []);

  return (
    <>
      <ChatbotBtn />
      <Div>
        <Header title="레시피 저장 목록" isBack={false} />

        <div className="margin">
          {list && <RecipeList isHistory={false} list={list} />}
        </div>

        <NavBar />
      </Div>
    </>
  );
};

export default SavedRecipes;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .margin {
    margin-bottom: 60px;
  }
`;
