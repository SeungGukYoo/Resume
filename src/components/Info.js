import React from 'react';
import styled from 'styled-components';

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
    font-family: 'Source Code Pro', monospace;
    letter-spacing: 1px;
    &::after {
      margin-top: 20px;
      content: '';
      display: block;
      width: 50px;
      height: 3px;
      background-color: navy;
    }
  }
  > div {
    p {
      letter-spacing: 1px;
      font-family: 'Titillium Web', 'Nanum Gothic Coding', sans-serif;
      margin-bottom: 5px;

      font-size: 17px;
    }
  }
`;

function Info() {
  return (
    <InfoContainer>
      <h1>Informtaion</h1>
      <div>
        <p>이름: 유승국</p>
        <p>나이: 26</p>
        <p>전공: 컴퓨터공학과</p>
        <p>MBTI: ISTJ</p>
        <p>취미: 여행</p>
      </div>
    </InfoContainer>
  );
}

export default Info;
