import React from "react";
import styled from "styled-components";
import Contact from "./Contact";
import Experience from "./Experience";
import Info from "./Info";
import Skill from "./Skill";

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

const BodyContainer = styled.section`
  display: flex;
  max-width: 1400px;
  margin: 30px auto;
  padding: 0 35px;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
    padding: 0 40px;
  }
`;
const LeftArticle = styled.article`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;
const RightArticle = styled.article`
  width: 70%;
  padding-left: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 1200px) {
    margin-top: 40px;
    width: 100%;
    padding-left: 0px;
  }
`;
