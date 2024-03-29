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
          <p onClick={() => moveSite("https://seunggukyoo.github.io/Clone_Company_Homepage/")}>Asan 바로가기</p>
        </div>
        <div>
          <h2 onClick={() => moveSite("https://github.com/SeungGukYoo/Clone_Company_Homepage")}>
            Html,Css,Js를 활용한 반응형 기업형 홈페이지 GIT 저장소
          </h2>
          <p>
            Asan씨앤씨 홈페이지를 기업형 레이아웃에 맞게 약간 변형하여 제작하였습니다. <br />
            반응형으로 제작하였으며, 웹 접근성을 신경써가며 제작하였습니다.
          </p>
        </div>
      </article>
      <article>
        <div>
          <p onClick={() => moveSite("https://seunggukyoo.github.io/react_homepage/#/")}>vipp 바로가기</p>
        </div>
        <div>
          <h2 onClick={() => moveSite("https://github.com/SeungGukYoo/react_homepage")}>
            React를 활용한 반응형 기업형 홈페이지 GIT 저장소
          </h2>
          <p>
            리액트를 사용하여 제작한 반응형 기업형 홈페이지입니다. <br />
            해당 프로젝트에서는 Youtube와 Flickr,Kakao API를 사용하여 콘텐츠를 구성하였으며, Redux-saga를 적용하여
            데이터를 전역으로 관리한 프로젝트입니다.
          </p>
          <p
            onClick={() =>
              moveSite("https://drive.google.com/file/d/1eEXaGSUReu6T2pkZspiQd4pU3_sY_i7i/view?usp=sharing")
            }
          >
            작업 과정 다운로드
          </p>
        </div>
      </article>
      <article>
        <div>
          <p onClick={() => moveSite("https://github.com/SeungGukYoo/react-node-study/tree/master")}>CRUD 게시판</p>
        </div>
        <div>
          <h2 onClick={() => moveSite("https://github.com/SeungGukYoo/react-node-study/tree/master")}>
            React와 MongooDB를 활용한 게시판 GIT 저장소
          </h2>
          <p>
            리액트에 MongooDB를 사용하여 게시판을 구현한 프로젝트입니다. <br />
            MongooDB를 통해 프론트엔드와 백엔드를 직접 구현하였으며, 이외에도 Firebase를 통해 회원가입을 적용한
            프로젝트입니다.
          </p>
        </div>
      </article>
      <article>
        <div>
          <p onClick={() => moveSite("https://netflix-wtih-next13-typescript-git-main-seunggukyoo.vercel.app/login")}>
            Netflix 바로가기
          </p>
        </div>
        <div>
          <h2 onClick={() => moveSite("https://github.com/SeungGukYoo/Netflix-wtih-Next13-Typescript")}>
            NextJS와 Typescript를 사용한 Netflix GIT 저장소
          </h2>
          <p>
            Typescript와 NextJS 13버전을 사용하여 제작한 Netflix 사이트입니다. <br />
            Recoil을 사용하여 영화데이터와 모달 상태를 전역으로 관리해본 프로젝트입니다. <br />
            firebase를 사용하여 회원가입, 로그인, 로그아웃 적용하였습니다.
          </p>
          <p
            onClick={() =>
              moveSite("https://drive.google.com/file/d/1FOlz4wvj25L-y-Icc3_RVGCYdt0nGoEc/view?usp=sharing")
            }
          >
            작업 과정 다운로드
          </p>
        </div>
      </article>
      <article>
        <div>
          <p onClick={() => moveSite("https://chat-gpt-messenger-one.vercel.app")}>ChatGPT 바로가기</p>
        </div>
        <div>
          <h2 onClick={() => moveSite("https://github.com/SeungGukYoo/ChatGPT-messenger")}>
            NextJS와 Typescript를 사용한 ChatGPT GIT 저장소
          </h2>
          <p>
            Typescript와 NextJS 13버전을 사용하여 제작한 ChatGPT 사이트입니다. <br />
            최근에 큰 이슈를 몰고온 ChatGPT를 사용하여 채팅창을 만들어보았습니다. <br />
            NextAuth를 사용하여 로그인, 로그아웃을 구현해보았으며, firebase를 사용하여 실시간 데이터를 저장해
            놓았습니다.
          </p>
        </div>
      </article>
      <p className="scroll-text">SCROLL DOWN</p>
    </ExperienceContainer>
  );
}

export default Experience;
