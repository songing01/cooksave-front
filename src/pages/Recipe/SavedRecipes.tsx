import ChatbotBtn from "@components/Chat/ChatbotBtn";
import Header from "@components/Header/Header";
import NavBar from "@components/NavBar/NavBar";
import RecipeList from "@components/Recipe/RecipeList";
import styled from "styled-components";

const SavedRecipes = () => {
  return (
    <>
      <ChatbotBtn />
      <Div>
        <Header title="레시피 저장 목록" isBack={false} />

        <div className="margin">
          <RecipeList isHistory={false} />
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
