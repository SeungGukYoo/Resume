import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer>
      <div className="inner">
        <ImgContainer>
          <div>
            <img src={`${process.env.PUBLIC_URL}/profile.jpeg`} alt="profile" />
          </div>
        </ImgContainer>
        <InfoContainer>
          <span className="nameStyle">저의 이름은</span>
          <h1>유승국</h1>
          <h2>Frontend Developer</h2>
          <span className="profile">Profile</span>
          <p>
            안녕하세요! 프론트 엔드 개발자 유승국입니다. <br />
            React와 Next.js를 주력으로 사용하고 있으며 다양한 것에 도전하고 도전하며 겪는 경험을 바탕으로 성장하는
            개발자입니다.
            <br />
            저는 빠르게 변화하는 웹 트렌드를 따라가고자 배우는 것을 게을리 하지 않으며 필요한 기술이 있다면 빠르고
            정확하게 배우도록 노력하고 있습니다. 개발외의 시간에는 여행(✈️)과 운동(🏸🎳)을 통해 리프레쉬를 하고
            있습니다.
          </p>
          <span
            className="pdfBdn"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/11Y0nadkmWNEkeNznslv-CO93EJbGT3vs/view?usp=sharing",
                "_blank"
              )
            }
          >
            자기소개서 다운로드
          </span>
        </InfoContainer>
      </div>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  width: 100%;
  margin-bottom: 30px;
  .inner {
    padding: 0 35px;
    margin: 0 auto;
    max-width: 1400px;
    padding-top: 50px;
    display: flex;
  }
  @media screen and (max-width: 1200px) {
    .inner {
      padding: 0 40px;
      padding-top: 50px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

const ImgContainer = styled.article`
  height: 400px;
  width: 400px;
  > div {
    border-top-right-radius: 50px;
    border-bottom-left-radius: 50px;
    overflow: hidden;
    width: 100%;
    height: 100%;
    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media screen and (max-width: 1200px) {
    > div {
      border-top-right-radius: 0px;
      border-bottom-left-radius: 0px;
      border-radius: 50%;
      border: 1px solid #eee;
      > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  @media screen and (max-width: 600px) {
    height: 250px;
    width: 250px;
    > div {
      > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;

const InfoContainer = styled.article`
  width: 70%;
  padding-left: 40px;
  padding-top: 40px;
  span.nameStyle {
    font-size: 30px;
    color: #999;
    font-weight: 500;
    display: block;
    margin-bottom: 5px;
  }
  h1 {
    font-size: 50px;
    margin-bottom: 12px;
    &::after {
      content: "입니다.";
      font-size: 17px;
      margin-left: 10px;
      color: #999;
      font-weight: 500;
    }
  }
  h2 {
    font-size: 24px;
    color: #999;
    margin-bottom: 40px;
    font-weight: 500;
  }
  .profile {
    display: block;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 13px;
    &::after {
      margin-top: 3px;
      display: block;
      content: "";
      height: 2px;
      width: 40px;
      background-color: navy;
    }
  }
  p {
    font-weight: bold;
    font-size: 16px;
    color: #666;
    line-height: 24px;
  }
  span.pdfBdn {
    font-weight: bold;
    display: inline-block;
    font-size: 16px;
    margin-top: 10px;
    margin-right: auto;
    color: black;
    cursor: pointer;
    transition: all 0.1s;
    border: 1px solid rgb(59 130 246);
    padding: 10px 24px;
    transition: color 0.2s;
    border-radius: 4px;
    color: rgb(59 130 246);
    transition: 0.15s;
    &:hover {
      background-color: rgb(29 78 216);
      color: white;
    }
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
    padding-left: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > .profile {
      margin-right: auto;
    }
    p {
      margin-right: auto;
    }
    h2 {
      margin-bottom: 0px;
    }
  }
  @media screen and (max-width: 600px) {
    h2 {
      margin-bottom: 15px;
    }
  }
`;
