import React from 'react';
import styled from 'styled-components';

const ExperienceContainer = styled.div`
  background-color: rgb(249, 230, 231);
  border-top-left-radius: 50px;
  border-bottom-right-radius: 50px;
  padding: 40px 80px;
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
  article {
    margin-bottom: 30px;
    display: flex;
    width: 100%;
    div {
      &:nth-of-type(1) {
        width: 25%;
        flex: 1;

        p {
          padding-top: 5px;
          font-weight: bold;
          color: rgb(129, 128, 123);
          font-family: 'Titillium Web', 'Nanum Gothic Coding', sans-serif;
          cursor: pointer;
        }
      }
      &:nth-of-type(2) {
        flex: 3;
        h2 {
          margin-bottom: 15px;
          font-size: 20px;
          font-weight: bold;
          font-family: 'Titillium Web', 'Nanum Gothic Coding', sans-serif;
          color: rgb(45, 42, 41);
          vertical-align: middle;
          cursor: pointer;
        }
        p {
          padding-top: 5px;

          font-size: 15px;
          color: rgb(129, 128, 123);
          font-family: 'Titillium Web', 'Nanum Gothic Coding', sans-serif;
          &:nth-of-type(2) {
            display: inline;
            color: black;
            padding-top: 7px;
            font-size: 12px;
            font-weight: bold;
            cursor: pointer;
          }
        }
      }
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
            font-family: 'Titillium Web', 'Nanum Gothic Coding', sans-serif;
            color: rgb(45, 42, 41);
            vertical-align: middle;
          }
          p {
            padding-top: 5px;

            font-size: 12px;
            color: rgb(129, 128, 123);
            font-family: 'Titillium Web', 'Nanum Gothic Coding', sans-serif;
          }
        }
      }
    }
  }
`;

function Experience() {
  const moveSite = (url) => {
    return window.open(url, '_blank');
  };
  return (
    <ExperienceContainer>
      <h1>Experience</h1>

      <article>
        <div>
          <p onClick={() => moveSite('https://seunggukyoo.github.io/Clone_Company_Homepage/')}>
            Asan 바로가기
          </p>
        </div>
        <div>
          <h2 onClick={() => moveSite('https://github.com/SeungGukYoo/Clone_Company_Homepage')}>
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
          <p onClick={() => moveSite('https://seunggukyoo.github.io/react_homepage/#/')}>
            vipp 바로가기
          </p>
        </div>
        <div>
          <h2>React를 활용한 반응형 기업형 홈페이지 GIT 저장소</h2>
          <p onClick={() => moveSite('https://github.com/SeungGukYoo/react_homepage')}>
            리액트를 사용하여 제작한 반응형 기업형 홈페이지입니다. <br />
            해당 프로젝트에서는 Youtube와 Flickr,Kakao API를 사용하여 콘텐츠를 구성하였으며,
            Redux-saga를 적용하여 데이터를 전역으로 관리한 프로젝트입니다.
          </p>
          <p
            onClick={() =>
              moveSite(
                'https://drive.google.com/file/d/1eEXaGSUReu6T2pkZspiQd4pU3_sY_i7i/view?usp=sharing'
              )
            }
          >
            작업 과정 다운로드
          </p>
        </div>
      </article>
      <article>
        <div>
          <p
            onClick={() => moveSite('https://github.com/SeungGukYoo/react-node-study/tree/master')}
          >
            CRUD 게시판
          </p>
        </div>
        <div>
          <h2
            onClick={() => moveSite('https://github.com/SeungGukYoo/react-node-study/tree/master')}
          >
            React와 MongooDB를 활용한 게시판 GIT 저장소
          </h2>
          <p>
            리액트에 MongooDB를 사용하여 게시판을 구현한 프로젝트입니다. <br />
            MongooDB를 통해 프론트엔드와 백엔드를 직접 구현하였으며, 이외에도 Firebase를 통해
            회원가입을 적용한 프로젝트입니다.
          </p>
        </div>
      </article>
    </ExperienceContainer>
  );
}

export default Experience;
