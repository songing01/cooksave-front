import styled from "styled-components";
import Item from "../Item/Item";

type Props = {
  isEditing: boolean;
  isDeletable?: boolean;
};

const List = ({ isEditing, isDeletable }: Props) => {
  return (
    <Div>
      <Item isEditing={isEditing} isDeletable={isDeletable} />
      <Item isEditing={isEditing} isDeletable={isDeletable} />
      <Item isEditing={isEditing} isDeletable={isDeletable} />
      <Item isEditing={isEditing} isDeletable={isDeletable} />
      <Item isEditing={isEditing} isDeletable={isDeletable} />
      <Item isEditing={isEditing} isDeletable={isDeletable} />
      <Item isEditing={isEditing} isDeletable={isDeletable} />
      <Item isEditing={isEditing} isDeletable={isDeletable} />
      <Item isEditing={isEditing} isDeletable={isDeletable} />
      <Item isEditing={isEditing} isDeletable={isDeletable} />
    </Div>
  );
};

export default List;

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
