import React from "react";
import Recipe from "./Recipe";
import styled from "styled-components";

const RecipeList = () => {
  return (
    <List>
      <Recipe isSaved={true} />
      <Recipe isSaved={false} />
      <Recipe isSaved={true} />
      <Recipe isSaved={false} />
      <Recipe isSaved={true} />
      <Recipe isSaved={false} />
      <Recipe isSaved={true} />
      <Recipe isSaved={false} />
      <Recipe isSaved={true} />
      <Recipe isSaved={false} />
      <Recipe isSaved={true} />
      <Recipe isSaved={false} />
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
