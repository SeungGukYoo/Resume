import React from "react";
import styled from "styled-components";

const InfoContainer = styled.div`
  width: 100%;
  background-color: aliceblue;
  padding: 40px 80px;
  background-color: rgb(250, 232, 216);
  border-top-left-radius: 50px;

  margin-bottom: 40px;

  h1 {
    font-size: 35px;
    margin-bottom: 25px;
    font-family: "Titillium Web", "Nanum Gothic Coding", sans-serif;
    letter-spacing: 1px;
    &::after {
      margin-top: 20px;
      content: "";
      display: block;
      width: 50px;
      height: 3px;
      background-color: navy;
    }
  }
  > div {
    p {
      display: flex;
      gap: 20px;
      b {
        font-size: 22px;
      }
      font-size: 20px;
      letter-spacing: 1px;
      font-family: "Titillium Web", "Nanum Gothic Coding", sans-serif;
      margin-bottom: 5px;
    }
  }
  @media screen and (max-width: 1200px) {
    justify-content: space-between;
    border-bottom-right-radius: 50px;
    > div {
      margin-right: 50px;
      margin-left: 20px;
    }
  }
  @media screen and (max-width: 600px) {
    padding: 20px 40px;
    h1 {
      font-size: 24px;
      margin-bottom: 14px;
      &::after {
        margin-top: 10px;
        height: 2px;
      }
    }
    > div {
      margin: 0;
      p {
        b {
          font-size: 15px;
        }
        font-size: 15px;
      }
    }
  }
`;

function Info() {
  return (
    <InfoContainer>
      <h1>Information</h1>
      <div>
        <p>
          <b>이름</b>유승국
        </p>
        <p>
          <b>나이</b>26
        </p>
        <p>
          <b>거주지</b>대전
        </p>
        <p>
          <b>학력</b>한남대학교
        </p>
        <p>
          <b>전공</b>컴퓨터공학과
        </p>
      </div>
    </InfoContainer>
  );
}

export default Info;
