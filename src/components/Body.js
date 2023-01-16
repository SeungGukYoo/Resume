import React from 'react';
import Contact from './Contact';
import Experience from './Experience';
import Skill from './Skill';
import styled from 'styled-components';
import Info from './Info';

const BodyContainer = styled.section`
  display: flex;
  max-width: 1400px;
  margin: 30px auto;
`;
const LeftArticle = styled.article`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const RightArticle = styled.article`
  width: 70%;
  padding-left: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function Body() {
  return (
    <BodyContainer>
      <LeftArticle>
        <Info />
        <Contact />
      </LeftArticle>
      <RightArticle>
        <Experience />
        <Skill />
      </RightArticle>
    </BodyContainer>
  );
}

export default Body;
