import React from "react";
import {
  FooterContainer,
  Heading,
  ContentContainer,
  Content,
  ContentHeading,
  ContentContent
} from "./styles";
const MobileFooter = React.forwardRef((props,ref) =>{
  return (
    <FooterContainer ref = {ref}>
      <Heading>Contact Us</Heading>
      <ContentContainer>
        <Content>
          <ContentHeading>Email id</ContentHeading>
          <ContentContent style={{ textDecoration: "underline" }}>
            careers@licious.com
          </ContentContent>
        </Content>
        <Content>
          <ContentHeading>PHONE NO</ContentHeading>
          <ContentContent>1800-4190-786</ContentContent>
        </Content>
        <Content>
          <ContentHeading>ADDRESS</ContentHeading>
          <ContentContent>
            Zed Pearl,
            <br />
            Domlur I Stage,
            <br />
            1st Stage, Domlur,
            <br />
            Bengaluru,
            <br />
            Karnataka 560071
          </ContentContent>
        </Content>
        <Content>
          <ContentHeading>FOLLOW @IAMLICIOUS</ContentHeading>
          <ContentContent>Yet to provide</ContentContent>
        </Content>
      </ContentContainer>
    </FooterContainer>
  );
})

export default MobileFooter;