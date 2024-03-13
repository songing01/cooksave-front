import React from "react";
import Recipe from "./Recipe";
import styled from "styled-components";

type Props = {
  isHistory?: boolean;
};

const RecipeList = ({ isHistory }: Props) => {
  return (
    <List>
      <Recipe isSaved={true} isHistory={isHistory} />
      <Recipe isSaved={false} isHistory={isHistory} />
      <Recipe isSaved={true} isHistory={isHistory} />
      <Recipe isSaved={false} isHistory={isHistory} />
      <Recipe isSaved={true} isHistory={isHistory} />
      <Recipe isSaved={false} isHistory={isHistory} />
    </List>
  );
};

export default RecipeList;

const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;
