import Header from "@components/Header/Header";
import styled from "styled-components";
import example from "@assets/create/ocr-eg.png";
import gallery from "@assets/create/gallery.png";
import example2 from "@assets/create/od-eg.png";

import { FontBold, FontMedium } from "@style/font.style";
import { useRef, useState } from "react";
import ItemInput from "@components/Ingredients/Item/ItemInput";
import {
  postObjectDetectionImg,
  postObjectDetectionResult,
} from "@services/api/ingredients";
import { useRecoilState } from "recoil";
import { newListState } from "@services/store/ingredients";
import LongBtn from "@components/Buttons/LongBtn";
import loading from "@assets/common/loading.gif";
import { TypeIngredient } from "../../type/ingredients";
import { useNavigate } from "react-router-dom";

type Props = {
  isOCR: boolean;
};

const AICreate = ({ isOCR }: Props) => {
  const [imgFile, setImgFile] = useState<File>();
  const [previewImg, setPreviewImg] = useState<string | ArrayBuffer | null>(
    null,
  );

  const [newList, setNewList] = useRecoilState(newListState);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const imgRef = useRef<HTMLInputElement>(null);

  const uploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      let file = e.target.files[0];
      const newFile = new File([file], `${file.lastModified}`, {
        type: file.type,
      });

      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        setPreviewImg(reader.result);

        postObjectDetectionImg(file)
          .then(res => {
            let list: any = [];
            res.data.labels.map((el: any) =>
              list.push({
                ingredientId: Math.random(),
                iconId: 1,
                name: el,
                price: undefined,
                amount: 1,
                tag: el,
              }),
            );

            setIsLoading(false);
            setNewList(list);
          })
          .catch(err => console.log(err));
      };
    }
  };

  const requestAICreate = () => {
    newList.map((item: TypeIngredient) => {
      if (item.price === undefined) alert("가격을 입력하세요");
    });

    if (isOCR) {
    } else {
      //사물인식
      postObjectDetectionResult(newList)
        .then(res => {
          alert("등록이 완료되었습니다.");
          navigate("/");
          setNewList([]);
        })
        .catch(err => alert("등록 오류"));
    }
  };

  return (
    <Div>
      <Header
        isBack={true}
        title={isOCR ? "식재료 등록 - 텍스트 인식" : "식재료 등록 - 객체 인식"}
      />

      {!previewImg ? (
        <Example>
          <Container>
            {isOCR ? <img src={example} /> : <img src={example2} />}
          </Container>
          <div className="eg-text">
            <FontMedium size="12px">*예시 이미지 입니다</FontMedium>
          </div>
        </Example>
      ) : (
        <Container>
          {typeof previewImg == "string" && (
            <img src={previewImg} className="preview" />
          )}
        </Container>
      )}

      {!previewImg ? (
        <>
          <div className="explanation">
            <FontMedium size="16px" style={{ textAlign: "start" }}>
              {isOCR ? (
                <>
                  위와 같이 영수증이나 주문내역 이미지를
                  <br />
                  촬영 및 업로드 해주세요
                </>
              ) : (
                <>
                  위와 같이 등록하고자 하는
                  <br />
                  상품을 촬영해주세요
                </>
              )}
            </FontMedium>
          </div>
          <input
            type="file"
            id="file-input"
            className="file"
            ref={imgRef}
            accept=".jpg, .jpeg, .png"
            onChange={uploadImage}
          />
          <Btn htmlFor="file-input">
            <img className="gallery" src={gallery} alt="" />
          </Btn>
        </>
      ) : (
        <>
          <Result>
            <div className="title">
              <FontBold size="18px">인식 결과</FontBold>
            </div>
            {isLoading ? (
              <img src={loading} className="loading" />
            ) : (
              <div className="result-container">
                {newList.map((input: any) => (
                  <ItemInput
                    inputs={input}
                    isList={true}
                    setInputList={setNewList}
                  />
                ))}
              </div>
            )}
          </Result>
          {!isLoading && (
            <div className="bottom">
              <LongBtn text="등록 완료" onClick={requestAICreate} />
            </div>
          )}
        </>
      )}
    </Div>
  );
};

export default AICreate;

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 20px;

  .explanation {
    margin-top: 30px;
    width: 90%;
    display: flex;
  }

  .file {
    display: none;
  }

  .preview {
    height: 100%;
  }

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

const Example = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .eg-text {
    margin-top: 5px;
    width: 90%;
    display: flex;
    justify-content: end;
    color: var(--grey2);
  }
`;

const Container = styled.div`
  overflow: hidden;
  display: flex;
  width: 90%;
  box-sizing: border-box;
  height: 350px;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  background: #edf7ff;

  img {
    height: 100%;
  }
`;

const Btn = styled.label`
  width: 90%;
  height: 246px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: #eee;

  img {
    width: 62.093px;
    height: 60px;
    flex-shrink: 0;
  }
`;

const Result = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  .title {
    margin: 0 auto;
    width: 90%;
    color: var(--blue2);
    display: flex;
  }

  .result-container {
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .loading {
    margin: 30% auto;
    width: 50px;
  }
`;
