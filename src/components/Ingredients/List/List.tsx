import styled from "styled-components";
import Item from "../Item/Item";

type Props = {
  isEditing: boolean;
  isDeletable: boolean;
  list: any[];
};

const List = ({ isEditing, isDeletable, list }: Props) => {
  return (
    <Div>
      {list.map((item, index) => {
        return (
          <Item
            isEditing={isEditing}
            isDeletable={isDeletable}
            item={item}
            index={index}
          />
        );
      })}
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
