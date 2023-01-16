import React from 'react';
import styled from 'styled-components';

const SkillContainer = styled.div`
  background-color: rgb(250, 232, 216);
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  padding: 40px 80px;

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
`;
const SkillBox = styled.div`
  display: flex;
  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    &:nth-of-type(2) {
      border-right: 1px solid #999;
      border-left: 1px solid #999;
    }
    h2 {
      font-size: 20px;
      color: rgb(129, 128, 123);
      margin-bottom: 10px;
      font-family: 'Titillium Web', 'Nanum Gothic Coding', sans-serif;
      font-weight: normal;
    }
    > ul {
      display: flex;
      flex-wrap: wrp;
      flex-direction: column;
      li {
        font-family: 'Titillium Web', 'Nanum Gothic Coding', sans-serif;
        font-size: 14px;
      }
    }
  }
`;

function Skill() {
  return (
    <SkillContainer>
      <h1>SKill</h1>
      <SkillBox>
        <div>
          <h2>CSS</h2>
          <ul>
            <li>CSS</li>
            <li>SASS</li>
            <li>PostCSS</li>
            <li>Styled-Components</li>
            <li>TailwindCss</li>
          </ul>
        </div>
        <div>
          <h2>JavaScript</h2>
          <ul>
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>ReactJs</li>
            <li>NextJs</li>
          </ul>
        </div>
        <div>
          <h2>Etc</h2>
          <ul>
            <li>Npm</li>
            <li>Yarn</li>
            <li>Git</li>
            <li>Figma</li>
          </ul>
        </div>
      </SkillBox>
    </SkillContainer>
  );
}

export default Skill;
