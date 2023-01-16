import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100%;
  margin-bottom: 30px;
  .inner {
    padding: 10px;
    max-width: 1400px;
    margin: 0 auto;
    padding-top: 50px;
    display: flex;
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
          <h2>FrontEnd Developer</h2>
          <span className='profile'>Profile</span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis ut optio eveniet
            beatae, accusantium esse dolorum fugit voluptatibus delectus numquam iste quis provident
            deleniti distinctio repellat, illum temporibus assumenda vel?
          </p>
        </InfoContainer>
      </div>
    </HeaderContainer>
  );
}

export default Header;
