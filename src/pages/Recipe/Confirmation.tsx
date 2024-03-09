import LongBtn from "@components/Buttons/LongBtn";
import GuideText from "@components/Common/GuideText";
import Header from "@components/Header/Header";
import ConfirmationTable from "@components/Recipe/ConfirmationTable";
import styled from "styled-components";

const Confirmation = () => {
  return (
    <Div>
      <Header isBack={true} />
      <GuideText text="재료 차감 내역과 가격을 확인하세요" />
      <Price text="총 사용 금액: 8000원" />

      <ConfirmationTable />
      <div className="bottom">
        <LongBtn text="이대로 만들게요" />
      </div>
    </Div>
  );
};

export default Confirmation;

const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  .bottom {
    width: 100%;
    position: fixed; //하단 고정
    bottom: 0px;
    padding: 30px;
    display: flex;
    justify-content: center;
    background-color: #fff;
  }
`;

const Price = styled(GuideText)`
  margin-top: 38px;
`;
