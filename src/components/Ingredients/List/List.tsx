import styled from "styled-components";
import Item from "../Item/Item";

const List = () => {
  return (
    <Div>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item /> <Item />
      <Item />
      <Item />
      <Item />
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
