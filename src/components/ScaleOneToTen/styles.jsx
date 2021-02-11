import styled from "styled-components";

const colorScales = [
  "#33FF00",
  "#66FF00",
  "#99FF00",
  "#CCFF00",
  "#FFFF00",
  "#FFCC00",
  "#FF9900",
  "#FF6600",
  "#FF3300",
  "#FF0000"
];
export const ScaleContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 1%;
`;

export const ScaleBtn = styled.button.attrs(props => ({}))`
  ${props => `background-color:${colorScales[props.scale_id - 1]};border:1px solid ${colorScales[props.scale_id - 1]};`}
  ${props=>(props.chosen?'box-shadow:0 0 0 5px darkgrey;':  '')}
  text-align: center;
  font-weight: bold;
  border-radius:50%;
  width:40px;
  height:40px;
  cursor:pointer;
  outline:none;

  &:focus: {
      outline:none;
  }
`;