import React, { useEffect } from "react";
import Recipe from "./Recipe";
import styled from "styled-components";
import { getRecipes } from "@services/api/recipes";
import { TypeRecipe } from "type/recipe";

type Props = {
  isHistory: boolean;
  list?: TypeRecipe[];
};

const RecipeList = ({ isHistory, list }: Props) => {
  return (
    <List>
      {list &&
        list.map((item: TypeRecipe) => {
          return <Recipe isSaved={item.heart} isHistory={isHistory} />;
        })}
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
