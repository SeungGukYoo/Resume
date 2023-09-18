import React from "react";
import styled from "styled-components";

function Contact() {
  return (
    <ContactContainer>
      <h1>Contact</h1>
      <div>
        <h2>Phone</h2>
        <p>010 2207 0878</p>
      </div>
      <div>
        <h2>Email</h2>
        <p>dbtmd878@naver.com</p>
      </div>
      <div>
        <h2>Blog</h2>
        <p onClick={() => window.open(" https://9uk-e.tistory.com/", "_blank")}>블로그 바로가기</p>
      </div>
      <div>
        <h2>Notion</h2>
        <p onClick={() => window.open("https://www.notion.so/8f5367843300462da66df8c5e0944d92", "_blank")}>
          Notion 바로가기
        </p>
      </div>
    </ContactContainer>
  );
}

export default Contact;

const ContactContainer = styled.div`
  background-color: rgb(249, 230, 231);
  padding: 40px 80px;
  border-top-right-radius: 50px;

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
  div {
    margin-bottom: 20px;
    &:nth-of-type(1),
    &:nth-of-type(2) {
      P {
        cursor: default;
      }
    }
    &:nth-of-type(3),
    &:nth-of-type(4) {
      P {
        cursor: pointer;
        color: rgb(129, 128, 123);
        &:hover {
          color: black;
        }
      }
    }
    h2 {
      vertical-align: middle;
      margin-bottom: 5px;
      font-family: "Titillium Web", "Nanum Gothic Coding", sans-serif;
      font-size: 22px;
    }
    p {
      font-family: "Titillium Web", "Nanum Gothic Coding", sans-serif;
      font-size: 20px;
      font-weight: 100;
    }
  }
  @media screen and (max-width: 1200px) {
    border-bottom-left-radius: 50px;
    div {
      display: flex;
      align-items: center;
      gap: 40px;
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
    div {
      display: block;
      margin-bottom: 10px;
      h2 {
        font-size: 18px;
      }
      p {
        font-family: "Titillium Web", "Nanum Gothic Coding", sans-serif;
        font-size: 15px;
        font-weight: 100;
        cursor: pointer;
      }
    }
  }
`;
