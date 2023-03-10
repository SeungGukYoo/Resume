import React from "react";
import styled, { keyframes } from "styled-components";

const anime = keyframes`
0%{
  transform: translateY(0);
}
100%{
  transform: translateY(5px);
}

`;

const ExperienceContainer = styled.div`
  background-color: rgb(249, 230, 231);
  border-top-left-radius: 50px;
  border-bottom-right-radius: 50px;
  padding: 40px 80px;
  margin-bottom: 40px;
  height: 550px;
  overflow-y: scroll;
  position: relative;
  .scroll-text {
    position: absolute;
    top: 10%;
    left: 50%;
    color: black;
    margin-left: -24px;
    font-weight: bold;
    font-size: 24px;
    opacity: 0.1;
    animation: ${anime} 0.5s linear alternate infinite;
  }
  h1 {
    font-size: 35px;
    margin-bottom: 25px;
    font-family: "Source Code Pro", monospace;
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
  article {
    margin-bottom: 30px;
    display: flex;
    width: 100%;
    div {
      &:nth-of-type(1) {
        width: 25%;
        flex: 1;
        p {
          display: inline-block;
          padding-top: 5px;
          font-weight: bold;
          color: rgb(129, 128, 123);
          font-family: "Titillium Web", "Nanum Gothic Coding", sans-serif;
          cursor: pointer;
          &:hover {
            color: black;
          }
        }
      }
      &:nth-of-type(2) {
        flex: 3;
        h2 {
          margin-bottom: 15px;
          font-size: 20px;
          font-weight: bold;
          font-family: "Titillium Web", "Nanum Gothic Coding", sans-serif;
          color: rgb(129, 128, 123);
          vertical-align: middle;
          cursor: pointer;
          transition: 0.15s;
          &:hover {
            color: black;
          }
        }
        p {
          padding-top: 5px;
          font-size: 15px;
          color: rgb(129, 128, 123);
          font-family: "Titillium Web", "Nanum Gothic Coding", sans-serif;
          &:nth-of-type(2) {
            display: inline-block;
            font-size: 12px;
            font-weight: bold;
            cursor: pointer;
            margin-top: 10px;
            border: 1px solid rgb(59 130 246);
            color: rgb(59 130 246);
            padding: 7px 15px;
            transition: 0.15s;
            border-radius: 4px;
            &:hover {
              background-color: rgb(29 78 216);
              color: white;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 600px) {
    .scroll-text {
      font-size: 15px;
      left: auto;
      right: 10%;
    }
    padding: 20px 40px;
    h1 {
      font-size: 24px;
      margin-bottom: 14px;
      &::after {
        margin-top: 10px;
        height: 2px;
      }
    }
    article {
      margin-bottom: 15px;
      display: flex;
      flex-direction: column;

      div {
        &:nth-of-type(1) {
          width: 100%;
          p {
            font-size: 13px;
            padding-top: 0px;
          }
        }
        &:nth-of-type(2) {
          h2 {
            margin-bottom: 5px;
            font-size: 15px;
            font-weight: bold;
            font-family: "Titillium Web", "Nanum Gothic Coding", sans-serif;
            color: rgb(45, 42, 41);
            vertical-align: middle;
          }
          p {
            padding-top: 5px;

            font-size: 12px;
            color: rgb(129, 128, 123);
            font-family: "Titillium Web", "Nanum Gothic Coding", sans-serif;
          }
        }
      }
    }
  }
`;

function Experience() {
  const moveSite = (url) => {
    return window.open(url, "_blank");
  };
  return (
    <ExperienceContainer>
      <h1>Experience</h1>
      <article>
        <div>
          <p onClick={() => moveSite("https://seunggukyoo.github.io/Clone_Company_Homepage/")}>Asan ????????????</p>
        </div>
        <div>
          <h2 onClick={() => moveSite("https://github.com/SeungGukYoo/Clone_Company_Homepage")}>
            Html,Css,Js??? ????????? ????????? ????????? ???????????? GIT ?????????
          </h2>
          <p>
            Asan????????? ??????????????? ????????? ??????????????? ?????? ?????? ???????????? ?????????????????????. <br />
            ??????????????? ??????????????????, ??? ???????????? ??????????????? ?????????????????????.
          </p>
        </div>
      </article>
      <article>
        <div>
          <p onClick={() => moveSite("https://seunggukyoo.github.io/react_homepage/#/")}>vipp ????????????</p>
        </div>
        <div>
          <h2 onClick={() => moveSite("https://github.com/SeungGukYoo/react_homepage")}>
            React??? ????????? ????????? ????????? ???????????? GIT ?????????
          </h2>
          <p>
            ???????????? ???????????? ????????? ????????? ????????? ?????????????????????. <br />
            ?????? ????????????????????? Youtube??? Flickr,Kakao API??? ???????????? ???????????? ??????????????????, Redux-saga??? ????????????
            ???????????? ???????????? ????????? ?????????????????????.
          </p>
          <p
            onClick={() =>
              moveSite("https://drive.google.com/file/d/1eEXaGSUReu6T2pkZspiQd4pU3_sY_i7i/view?usp=sharing")
            }
          >
            ?????? ?????? ????????????
          </p>
        </div>
      </article>
      <article>
        <div>
          <p onClick={() => moveSite("https://github.com/SeungGukYoo/react-node-study/tree/master")}>CRUD ?????????</p>
        </div>
        <div>
          <h2 onClick={() => moveSite("https://github.com/SeungGukYoo/react-node-study/tree/master")}>
            React??? MongooDB??? ????????? ????????? GIT ?????????
          </h2>
          <p>
            ???????????? MongooDB??? ???????????? ???????????? ????????? ?????????????????????. <br />
            MongooDB??? ?????? ?????????????????? ???????????? ?????? ??????????????????, ???????????? Firebase??? ?????? ??????????????? ?????????
            ?????????????????????.
          </p>
        </div>
      </article>
      <article>
        <div>
          <p onClick={() => moveSite("https://netflix-wtih-next13-typescript-git-main-seunggukyoo.vercel.app/login")}>
            Netflix ????????????
          </p>
        </div>
        <div>
          <h2 onClick={() => moveSite("https://github.com/SeungGukYoo/Netflix-wtih-Next13-Typescript")}>
            NextJS??? Typescript??? ????????? Netflix GIT ?????????
          </h2>
          <p>
            Typescript??? NextJS 13????????? ???????????? ????????? Netflix ??????????????????. <br />
            Recoil??? ???????????? ?????????????????? ?????? ????????? ???????????? ???????????? ?????????????????????. <br />
            firebase??? ???????????? ????????????, ?????????, ???????????? ?????????????????????.
          </p>
          <p
            onClick={() =>
              moveSite("https://drive.google.com/file/d/1FOlz4wvj25L-y-Icc3_RVGCYdt0nGoEc/view?usp=sharing")
            }
          >
            ?????? ?????? ????????????
          </p>
        </div>
      </article>
      <article>
        <div>
          <p onClick={() => moveSite("https://chat-gpt-messenger-one.vercel.app")}>ChatGPT ????????????</p>
        </div>
        <div>
          <h2 onClick={() => moveSite("https://github.com/SeungGukYoo/ChatGPT-messenger")}>
            NextJS??? Typescript??? ????????? ChatGPT GIT ?????????
          </h2>
          <p>
            Typescript??? NextJS 13????????? ???????????? ????????? ChatGPT ??????????????????. <br />
            ????????? ??? ????????? ????????? ChatGPT??? ???????????? ???????????? ????????????????????????. <br />
            NextAuth??? ???????????? ?????????, ??????????????? ?????????????????????, firebase??? ???????????? ????????? ???????????? ?????????
            ???????????????.
          </p>
        </div>
      </article>
      <p className="scroll-text">SCROLL DOWN</p>
    </ExperienceContainer>
  );
}

export default Experience;
