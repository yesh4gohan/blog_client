import React from 'react';
import {ScaleBtn,ScaleContainer} from './styles';
import {FieldLabelContainer,FieldName} from '../../common/commonStyles';
const scales = [1,2,3,4,5,6,7,8,9,10]
const ScaleOneToTen = ({handleSetFieldValues}) => {
  const renderBtns = () => {
      return scales.map(scale=>(<ScaleBtn chosen = {scale == selected} scale_id = {scale}>{scale}</ScaleBtn>))
  }
  const [selected,setSelected] = React.useState("1")
  const handleClick = e => {
    e.preventDefault()
    handleSetFieldValues("blog_difficulty",e.target.innerText)
    setSelected(e.target.innerText)
  }
  return (
    <>
    <FieldLabelContainer>
        <FieldName>Let us know how difficult was the trek</FieldName>
    </FieldLabelContainer>
    <ScaleContainer onClick = {handleClick}>
        {
        renderBtns()
        }
    </ScaleContainer>
    </>
  )
}

export default ScaleOneToTen