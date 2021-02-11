import styled from "styled-components";
import { Link } from 'react-router-dom'

export const HeaderWrapper = styled.header`
  background-color: #3fdaa2;
  width: 100%;
  height: 50px;
  padding:5px;
  position:sticky;
  top:0px;
  left:0px;
`;

export const HeaderItemsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction:row;
`;



export const HeaderLogoContainer  = styled.div`
  float:left;
  margin-left:10px;
  position:absolute;
  top:15px;
`;

export const LogoImage = styled.div`
  width:60px;
  height:30px;
  background-color:yellow;
  border-radius:20px;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: #27604b;
    font-family: Avenir;
    font-size:18px;
    position:relative;
    top:13px;
    margin-right:10%;
    font-weight:700;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export const StyledAnchor = styled.a`
text-decoration: none;
color: #27604b;
font-family: Avenir;
font-size:18px;
position:relative;
top:13px;
margin-right:10%;
font-weight:700;
`;