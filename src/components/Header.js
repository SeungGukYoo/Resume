import React from 'react';
import styled from 'styled-components';

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
  width: 30%;
  height: 100%;

  > div {
    border-top-right-radius: 50px;
    border-bottom-left-radius: 50px;
    overflow: hidden;
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
    width: 50%;
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
      content: '입니다.';
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
      content: '';
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

function Header() {
  return (
    <HeaderContainer>
      <div className='inner'>
        <ImgContainer>
          <div>
            <img src={`${process.env.PUBLIC_URL}/dummy.jpg`} alt='' />
          </div>
        </ImgContainer>
        <InfoContainer>
          <span className='nameStyle'>저의 이름은</span>
          <h1>유승국</h1>
          <h2>Frontend Developer</h2>
          <span className='profile'>Profile</span>
          <p>
            React, NextJS를 기반으로 한 신입 프론트엔드 개발자를 희망하는 유승국입니다. <br />
            빠르게 변화하는 프론트엔드 기술들을 파악하기 위해 여러가지 커뮤니티를 통해 소식을 접하고
            있으며, <br />
            관심이 있는 기술이 있다면 서슴치 않고 배우고자 합니다.
            <br />
            현재에는 부족한 인터렉션 기법을 인프런과 여러가지 커뮤니티를 통해 공부하고있으며,
            <br /> 알게된 내용중 누군가에게 필요할 것같다고 생각이 드는 것이 있다면 블로그에
            작성하고 있습니다.
          </p>
        </InfoContainer>
      </div>
    </HeaderContainer>
  );
}

export default Header;
