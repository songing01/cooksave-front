import { FontBold, FontMedium } from "@style/font.style";
import React from "react";
import styled from "styled-components";

const ConfirmationTable = () => {
  const list = [
    {
      name: "도드람 제주 한돈 삼겹살 500g",
      count: 0.5,
      price: 8000,
    },
    {
      name: "도드람 제주 한돈 삼겹살 500g",
      count: 0.5,
      price: 8000,
    },
    {
      name: "도드람 제주 한돈 삼겹살 50aj sdnojna son0 g",
      count: 0.5,
      price: 8000,
    },
  ];
  return (
    <Table>
      <thead>
        <tr className="title">
          <th>
            <FontBold size="16px">재료명</FontBold>
          </th>
          <th>
            <FontBold size="16px">수량</FontBold>
          </th>
          <th>
            <FontBold size="16px">가격</FontBold>
          </th>
        </tr>
      </thead>
      <tbody>
        {list.map(item => {
          return (
            <tr>
              <td className="name-container">
                <FontMedium className="name" size="14px">
                  {item.name}
                </FontMedium>
              </td>
              <td>
                <FontMedium size="14px">{item.count}</FontMedium>
              </td>
              <td>
                <FontMedium size="14px">{item.price}</FontMedium>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default ConfirmationTable;

const Table = styled.table`
  width: 90%;
  box-sizing: border-box;
  border-radius: 10px;
  background: var(--grey1);
  border-collapse: collapse;

  tr {
    height: 40px;
    border-bottom: 1px solid #b4aeae;
    border-collapse: collapse;
  }

  td,
  th {
    height: 40px;
    border-right: 1px solid #b4aeae;
  }

  td:last-child,
  th:last-child {
    border-right: none;
  }

  tr:last-child {
    border-bottom: none;
  }

  th {
    border-bottom: 1px solid #b4aeae;
  }

  .name {
    max-width: 250px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin: 0 auto;
  }

  th:first-child {
    height: 40px;
    width: 280px;
  }

  .name-container {
    width: 280px;
    height: 40px;
  }
`;
