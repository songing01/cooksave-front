import styled from "styled-components";
import Item from "../Item/Item";

type Props = {
  isEditing: boolean;
};

const List = ({ isEditing }: Props) => {
  return (
    <Div>
      <Item isEditing={isEditing} />
      <Item isEditing={isEditing} />
      <Item isEditing={isEditing} />
      <Item isEditing={isEditing} />
      <Item isEditing={isEditing} />
      <Item isEditing={isEditing} />
      <Item isEditing={isEditing} />
      <Item isEditing={isEditing} />
      <Item isEditing={isEditing} />
      <Item isEditing={isEditing} />
    </Div>
  );
};

export default List;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
