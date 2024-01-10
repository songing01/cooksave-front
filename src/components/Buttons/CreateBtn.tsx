import styled from "styled-components";

import plus from "@assets/main/plus.png";

const CreateBtn = () => {
  return (
    <Btn>
      <img src={plus} />
    </Btn>
  );
};

export default CreateBtn;

const Btn = styled.div`
  width: 60px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 60px;
  background: #fff;
  box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.18);

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 30px;
    height: 30px;
    flex-shrink: 0;
  }
`;
