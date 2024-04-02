import styled from "styled-components";
import Item from "../Item/Item";

type Props = {
  isEditing: boolean;
  isDeletable: boolean;
  list?: any[];
  isIconEditable: boolean;
};

const List = ({ isEditing, isDeletable, list = [], isIconEditable }: Props) => {
  return (
    <Div>
      {list.map((item, index) => {
        return (
          <Item
            isIconEditable={isIconEditable}
            isEditing={isEditing}
            isDeletable={isDeletable}
            item={item}
            index={index}
            initialList={list} //편집시 기본값
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
