import styled from "styled-components";

export const BarContainer = styled.div`
  width: 100%;
  margin: 5% 1%;
`;


export const SlideBar = styled.input.attrs(props => ({
  type: props.type,
  max: props.max,
  min: props.min,
  right:Number(props.value)
}))`
  -webkit-appearance: none; /* Override default CSS styles */
  appearance: none;
  width: 50%; /* Full-width */
  height: 15px;
  border-radius: 5px;
  background: #d3d3d3; /* Grey background */
  outline: none; /* Remove outline */
  opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
  -webkit-transition: 0.2s; /* 0.2 seconds transition on hover */
  transition: opacity 0.2s;
  &:hover {
    opacity: 1;
  }
  ::-webkit-slider-thumb {
    position: relative;
    right: ${props => Number(props.value)};
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    width: 25px; /* Set a specific slider handle width */
    height: 25px;
    border-radius: 50%;
    background: #4caf50; /* Green background */
    cursor: pointer; /* Cursor on hover */
  }
  ::-moz-range-thumb {
    width: 25px; /* Set a specific slider handle width */
    height: 25px; /* Slider handle height */
    background: #4caf50; /* Green background */
    cursor: pointer; /* Cursor on hover */
  }
`;

export const RangeLabel = styled.span`
    display: inline-block;
    position: relative;
    color: white;
    height: 8px;
    line-height: 9px;
    text-align: center;
    border-radius: 3px;
    background: grey;
    padding: 5px 10px;
    left: 1%;
    top: -2px;
    right: 0px;
  &:after {
    position: absolute;
    top: 2px;
    left: -6px;
    width: 0;
    height: 0;
    border-top: 7px solid transparent;
    border-right: 7px solid grey;
    border-bottom: 7px solid transparent;
    content: '';
  }

`;

export const PriceDisplayer = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  width:50%;
`
export const PriceContent = styled.div`
  text-align:center;
`