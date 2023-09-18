import React from "react";
import styled, { keyframes } from "styled-components";

function Experience() {
  const moveSite = (url) => {
    return window.open(url, "_blank");
  };
  return (
    <ExperienceContainer>
      <h1>Experience</h1>
      <article>
        <div>
          <p onClick={() => moveSite("https://wanted-pre-onboarding-frontend-topaz-theta.vercel.app/")}>
            ToDo List 바로가기
          </p>
        </div>
        <div>
          <h2 onClick={() => moveSite("https://github.com/SeungGukYoo/wanted-pre-onboarding-frontend")}>
            React와 Typescript를 사용한 ToDo List Git 저장소
          </h2>
          <p>
            Wanted-pre-onboarding 인턴십에서 진행한 프로젝트입니다. <br />
            React를 사용하였으며, 서버를 통해 데이터가 관리되는 ToDo List 입니다.
            <br />
            서버는 wanted에서 제공되는 서버를 이용하였습니다. <br />
            회원가입, 로그인, 리스트 페이지로 이루어져 있으며 토큰을 통해서 인증이 관리되고 있습니다.
            <br />
          </p>
        </div>
      </article>
      <article>
        <div>
          <p onClick={() => moveSite("http://wanted-aws-self-study.s3-website.ap-northeast-2.amazonaws.com/")}>
            React Issues 바로가기
          </p>
        </div>
        <div>
          <h2 onClick={() => moveSite("https://github.com/SeungGukYoo/pre-onboarding-2weeks")}>
            React를 사용한 React Issues Git 저장소
          </h2>
          <p>
            Wanted-pre-onboarding 인턴십에서 진행한 프로젝트입니다. <br />
            React를 사용하여 React Issues를 보여주는 사이트입니다.
            <br />
            Issues의 마크다운을 remark를 사용하여 Html로 변환하여 보여지게 됩니다. <br />
            XSS 공격을 막기위해 dangerouslySetInnerHTML을 통해 Html 파일을 표시해주게 됩니다. <br /> 디바운싱 기법을
            이용한 무한 스크롤이 적용되어 있으며, 전역 상태 관리를 위해 리덕스 툴킷이 적용되어 있습니다.
            <br />
          </p>
        </div>
      </article>
      <article>
        <div>
          <p onClick={() => moveSite("https://pre-onboarding-3weeks.vercel.app/")}>질병 검색 바로가기</p>
        </div>
        <div>
          <h2 onClick={() => moveSite("https://github.com/SeungGukYoo/pre-onboarding-3weeks")}>
            React와 Typescript를 사용한 질병 검색 Git 저장소
          </h2>
          <p>
            Wanted-pre-onboarding 인턴십에서 진행한 프로젝트입니다. <br />
            React를 사용하여 질환명 검색 사이트입니다.
            <br />
            Json-server+Vercel을 통해서 질병 API 서버가 동작하고 있습니다. <br />
            React로 제작되었으며, 캐싱 기능을 통해서 데이터가 관리되고 있습니다.
            <br />
            캐싱 기능은 브라우저에서 제공되는 Cache API를 사용하였으며 React-query의 주요 기능을 참고하여
            제작하였습니다.
            <br />
          </p>
        </div>
      </article>
      <article>
        <div>
          <p onClick={() => moveSite("https://pre-onboarding-12th-4-16-jm2dbo5ul-seunggukyoo.vercel.app/")}>
            서울 지역 차트 바로가기
          </p>
        </div>
        <div>
          <h2 onClick={() => moveSite("https://github.com/SeungGukYoo/pre-onboarding-12th-4-16")}>
            React와 Typescript를 사용한 서울 지역 차트 Git 저장소
          </h2>
          <p>
            Wanted-pre-onboarding 인턴십에서 진행한 프로젝트입니다. <br />
            React와 Chart.js를 사용하여 제작되었습니다.
            <br />
            막대 그래프와 영역 그래프를 기반으로 제공된 데이터의 구체적인 값을 확인할 수 있습니다.
            <br />
            지역 버튼을 클릭하거나 차트의 값을 클릭함으로 써 특정 그래프에 대한 데이터만 확인하거나 동일한 지역의
            데이터만을 필터링할 수 있습니다.
            <br />
          </p>
        </div>
      </article>
      <article>
        <div>
          <p className="noneClick">마크다운 파싱 블로그</p>
        </div>
        <div>
          <h2 onClick={() => moveSite("https://github.com/SeungGukYoo/NextJS-Blog")}>
            NextJS와 Typescript를 사용한 마크다운 파싱 GIT 저장소
          </h2>
          <p>
            Typescript와 NextJS 13버전을 사용하여 제작한 마크다운 파싱 블로그입니다.
            <br />
            Next.js의 SEO 기능을 활용하기 위해 Next.js의 서버단을 이용하여 마크다운파일을 파싱하고 이를 통해 SEO가
            이루어지게 됩니다. <br />
            remark라이브러리와 gray-matter 라이브러리를 사용하여 마크다운 파일을 파싱하여 Html 태그 파일로 변환해주게
            됩니다. <br />
            XSS공격을 막기 위해 dangerouslySetInnerHTML 기능을 전달받은 Html파일을 표시해줍니다.
          </p>
        </div>
      </article>
      <article>
        <div>
          <p onClick={() => moveSite("https://seunggukyoo.github.io/react_homepage/#/")}>vipp 바로가기</p>
        </div>
        <div>
          <h2 onClick={() => moveSite("https://github.com/SeungGukYoo/react_homepage")}>
            React를 사용한 반응형 기업형 홈페이지 GIT 저장소
          </h2>
          <p>
            리액트를 사용하여 제작한 반응형 기업형 홈페이지입니다. <br />
            해당 프로젝트에서는 Youtube와 Flickr, Kakao API를 사용하여 콘텐츠를 구성하였으며, Redux-saga를 적용하여
            데이터를 전역으로 관리한 프로젝트입니다. <br />
          </p>
        </div>
      </article>
      <article>
        <div>
          <p className="noneClick">SPA Router 구현</p>
        </div>
        <div>
          <h2 onClick={() => moveSite("https://github.com/SeungGukYoo/History-API-SPA-Router")}>
            React와 History API를 사용한 SPA Router Git 바로가기
          </h2>
          <p>
            React와 웹 브라우저에서 제공하는 History API로 제작해본 React-router 사이트입니다. React-router-dom의
            동작원리를 학습해보기 위해 제작한 프로젝트이며 react-router-dom과 유사한 컴포넌트 구조로 제작하였습니다.{" "}
            <br />
            오로지 History API로만 제작하였습니다. <br />
          </p>
        </div>
      </article>
      <article>
        <div>
          <p onClick={() => moveSite("https://seunggukyoo.github.io/Clone_Company_Homepage/")}>Asan 바로가기</p>
        </div>
        <div>
          <h2 onClick={() => moveSite("https://github.com/SeungGukYoo/Clone_Company_Homepage")}>
            Javascript를 사용한 반응형 기업형 홈페이지 GIT 저장소
          </h2>
          <p>
            Asan씨앤씨 홈페이지를 기업형 레이아웃에 맞게 약간 변형하여 제작하였습니다. <br />
            반응형으로 제작하였으며, 웹 접근성을 신경써 가며 제작하였습니다.
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
            Open AI를 사용하여 채팅창을 만들어보았으며, 여러 가지 AI모델을 선택하여 채팅방을 만들 수 있습니다. <br />
            NextAuth를 사용하여 로그인, 로그아웃을 구현하였으며, firebase를 사용하여 실시간 데이터를 저장하였기에
            언제든지 이전 채팅 내용을 확인할 수 있습니다.
          </p>
        </div>
      </article>
      <article>
        <div>
          <p className="noneClick">CRUD 게시판</p>
        </div>
        <div>
          <h2 onClick={() => moveSite("https://github.com/SeungGukYoo/Next_fullstack_clone")}>
            NextJS와 MySQL을 사용한 게시판 GIT 저장소
          </h2>
          <p>
            NextJS와 Node.js, MySQL를 사용하여 게시판을 구현한 프로젝트입니다. <br />
            NextJS에 TailwindCSS를 처음으로 적용해 보았으며, Redux-saga를 사용하여 프론트엔드의 데이터를 전역으로
            관리하였습니다. <br />
            백엔드는 NodeJs를 사용하였으며, MySQL을 사용하여 데이터를 관리해 보았습니다. <br />
          </p>
        </div>
      </article>
      <article>
        <div>
          <p className="noneClick">Netflix</p>
        </div>
        <div>
          <h2 onClick={() => moveSite("https://github.com/SeungGukYoo/Netflix-wtih-Next13-Typescript")}>
            NextJS와 Typescript를 사용한 Netflix GIT 저장소
          </h2>
          <p>
            Typescript와 NextJS 13버전을 사용하여 제작한 Netflix 사이트입니다. <br />
            Recoil을 사용하여 영화 데이터와 모달 상태를 전역으로 관리해 본 프로젝트입니다. <br />
            firebase를 사용하여 회원가입, 로그인, 로그아웃 적용하였습니다. <br />
            <span className="caution">
              2023년 5월 18일 보안 오류로 인하여 홈페이지에 들어가는 것이 불가능합니다.
              <br /> Git에 들어가 다운로드하는 것을 권장 드립니다. 양해 부탁드립니다. <br />
            </span>
          </p>
        </div>
      </article>

      <p className="scroll-text">SCROLL DOWN</p>
    </ExperienceContainer>
  );
}

export default Experience;

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
        .noneClick {
          cursor: default;
          color: black;
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
        .caution {
          color: black;
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
