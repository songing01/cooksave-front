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
import icon24 from "@assets/ingredients/icon24.png";
import icon25 from "@assets/ingredients/icon25.png";
import icon26 from "@assets/ingredients/icon26.png";
import icon27 from "@assets/ingredients/icon27.png";
import icon28 from "@assets/ingredients/icon28.png";
import icon29 from "@assets/ingredients/icon29.png";

import { TypeIngredient } from "type/ingredients";
import { useRecoilState } from "recoil";
import { newListState } from "@services/store/ingredients";

export const icons = [
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
  icon24,
  icon25,
  icon26,
  icon27,
  icon28,
  icon29,
];

type Props = {
  setIsOpenList: React.Dispatch<React.SetStateAction<boolean>>;
  inputs?: TypeIngredient;
  setInputs?: React.Dispatch<React.SetStateAction<TypeIngredient>>;
  ingredientId?: number;
};

export const IconList = ({
  setIsOpenList,
  inputs,
  setInputs,
  ingredientId,
}: Props) => {
  const [newList, setNewList] = useRecoilState(newListState);

  const changeIcon = (iconIndex: any) => {
    if (inputs) {
      const nextInputs: TypeIngredient = {
        ...inputs,
        iconId: Number(iconIndex + 1),
      };

      setInputs?.(nextInputs);
      setIsOpenList(false);
    }

    if (ingredientId !== undefined) {
      let arr = [...newList];
      setNewList(
        arr.map(item =>
          item.ingredientId === ingredientId
            ? { ...item, iconId: Number(iconIndex + 1) }
            : item,
        ),
      );
      setIsOpenList(false);
    }
  };

  return (
    <Div>
      {icons.map((el, index) => {
        return (
          <div onClick={() => changeIcon(index)}>
            <Icon src={el} />
          </div>
        );
      })}
    </Div>
  );
};

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
  border: 1px solid var(--blue2);
  background: #fff;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const Icon = styled.img`
  width: 50px;
`;
