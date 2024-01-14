import styled from "styled-components";

//아이콘 이미지
import icon1 from "@assets/ingredients/icon1.png";
import icon2 from "@assets/ingredients/icon2.png";
import icon3 from "@assets/ingredients/icon3.png";
import icon4 from "@assets/ingredients/icon4.png";
import icon5 from "@assets/ingredients/icon5.png";
import icon6 from "@assets/ingredients/icon6.png";
import icon7 from "@assets/ingredients/icon7.png";
import icon8 from "@assets/ingredients/icon8.png";
import icon9 from "@assets/ingredients/icon9.png";
import icon10 from "@assets/ingredients/icon10.png";
import icon11 from "@assets/ingredients/icon11.png";
import icon12 from "@assets/ingredients/icon12.png";
import icon13 from "@assets/ingredients/icon13.png";
import icon14 from "@assets/ingredients/icon14.png";
import icon15 from "@assets/ingredients/icon15.png";
import icon16 from "@assets/ingredients/icon16.png";
import icon17 from "@assets/ingredients/icon17.png";
import icon18 from "@assets/ingredients/icon18.png";
import icon19 from "@assets/ingredients/icon19.png";
import icon20 from "@assets/ingredients/icon20.png";
import icon21 from "@assets/ingredients/icon21.png";
import icon22 from "@assets/ingredients/icon22.png";
import icon23 from "@assets/ingredients/icon23.png";

const icons = [
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
  icon7,
  icon8,
  icon9,
  icon10,
  icon11,
  icon12,
  icon13,
  icon14,
  icon15,
  icon16,
  icon17,
  icon18,
  icon19,
  icon20,
  icon21,
  icon22,
  icon23,
];

type Props = {
  onClick: () => void;
};

const IconList = ({ onClick }: Props) => {
  return (
    <Div>
      {icons.map(el => {
        return <Icon src={el} onClick={onClick} />;
      })}
    </Div>
  );
};

export default IconList;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 63px;
  height: 196px;
  padding: 5px 8px;
  gap: 5px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #004c92;
  background: #fff;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const Icon = styled.img`
  width: 50px;
`;
