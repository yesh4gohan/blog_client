  import styled from "styled-components";

  export const Heading = styled.div`
    margin: 10px;
    font-family: Avenir;
    font-size: 16px;
    font-weight: 900;
    line-height: 22px;
    text-align: center;
    color: #5c5c5c;
  `;

  export const ContentContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
  `;

  export const Content = styled.div`
    margin: 2%;
  `;

  export const ContentHeading = styled.div`
    font-family: Avenir-Roman;
    font-size: 10px;
    line-height: 23px;
    text-align: left;
    color: #a6adb4;
  `;

  export const ContentContent = styled.div`
    font-family: Avenir-Roman;
    font-size: 12px;
    line-height: 20px;
    text-align: left;
    color: white;
  `;

  export const FooterContainer = styled.footer`
    padding: 5%;
    background-color: black;
  `;
