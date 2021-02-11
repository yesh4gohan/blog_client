import styled from "styled-components";

export const FormWholeContainer = styled.div`
${props => (
  props.border_show ? 
  'border:none;' : 
  'display: flex;flex-direction: column;border: solid 1px #b4b4b4;background-color: white;margin:1% 1%;'
  )
}
`;

export const FieldContainer = styled.div`
    margin: 1%;
`;

export const FieldLabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const FieldName = styled.div`
  font-family: Avenir-Roman;
  font-size: 14px;
  line-height: 23px;
  text-align: left;
  color: black;
  margin:5px;
`;
export const RequiredKey = styled.div`
  font-family: Avenir-Roman;
  font-size: 11px;
  line-height: 23px;
  text-align: right;
  color: #a6adb4;
`;

export const Field = styled.input.attrs(props => ({
  type: props.type,
  placeholder: props.placeholder,
  accept: props.accept,
  maxlength:props.maxlength,
  size:props.size,
  minlength:props.minlength
}))`
  border: none;
  background: transparent;
  height: 40px;
  width: 90%;
  font-size: 14px;
  line-height: 19px;
  text-align: left;
  border-radius:5px;
  ::placeholder {
    font-family: Avenir-Roman;
    font-size: 14px;
    line-height: 19px;
    text-align: left;
    color: #b4b4b4;
    padding-left: 10px;
  }
  ${props => (props.err ?     
    'border: solid 2px #e41d36;box-shadow: 0 0 5px 1px #e41d36;'
    : 
    'border:none;'
  )}
`;

export const SelectField = styled.select.attrs(props => ({}))`
  border: solid 1px #ebeded;
  background-color: white;
  height: 40px;
  width: 100%;
  font-size: 14px;
  line-height: 19px;
  text-align: left;
`;
export const OptionField = styled.option.attrs(props => ({
  default: props.default
}))`
  border: solid 1px #ebeded;
  background-color: white;
  height: 40px;
  width: 100%;
  font-size: 14px;
  line-height: 19px;
  text-align: left;
`;

export const FileInput = styled.input.attrs(props => ({
  type: props.type,
  placeholder: props.placeholder,
  accept: props.accept,
  disabled:props.show
}))`
    height: 100%;
    opacity: 0;
    overflow: hidden;
    z-index: 1;
    position: relative;
    bottom: 40px;
    float: right;
    padding: 2%;
`;

export const UploadButton = styled.button.attrs(props => ({
  disabled: props.disabled
}))`
  padding: 2.5%;
  width: 23%;
  position: relative;
  bottom: 2px;
  font-family: Avenir;
  font-size: 12px;
  font-weight: 900;
  line-height: 16px;
  text-align: center;
  color: white;
  background-color: #d3d3d3;
  border: 1px solid #d3d3d3;
`;

export const SubmitButton = styled.button.attrs((props)=>({
    disabled:props.disabled
}))`
${props => (props.disabled ? 'background-color:#b4b4b4;' : 'background-color:darkcyan;')}
${props => (!props.disabled ? 'border: 1px solid #d3d3d3;' : 'border: 1px solid darkcyan')}

    width:96%;
    position:fixed;
    bottom:2%;
    font-family: Avenir;
    font-size: 18px;
    font-weight: 900;
    line-height: 10px;
    text-align: center;
    color: white;
    padding:3%;
`;

export const TextArea = styled.textarea.attrs(props => ({
    type: props.type,
    placeholder: props.placeholder,
    accept: props.accept,
    maxlength:props.maxlength,
    size:props.size,
    minlength:props.minlength
  }))`
    outline:none;
    resize:none;
    border: solid 1px #ebeded;
    background-color: white;
    width: 90%;
    font-size: 20px;
    line-height: 19px;
    text-align: left;
    border-radius:5px;
    ::placeholder {
      font-family: Avenir-Roman;
      font-size: 20px;
      line-height: 19px;
      text-align: left;
      color: #b4b4b4;
      padding-left: 10px;
    }
    ${props => (props.err ?     
      'border: solid 2px #e41d36;box-shadow: 0 0 5px 1px #e41d36;'
      : 
      'border:none;'
    )}
  `

export const TitleField = styled.input.attrs(props => ({
  type: props.type,
  placeholder: props.placeholder,
  accept: props.accept,
  maxlength:props.maxlength,
  size:props.size,
  minlength:props.minlength
}))`
${props => (props.err ?     
  'border: solid 2px #e41d36;box-shadow: 0 0 5px 1px #e41d36;'
  : 
  'border:none;'
)}
outline:none;
border: none;
background: transparent;
height: 50px;
width: 90%;
font-weight:900;
font-size: 40px;
line-height: 40px;
text-align: left;
border-radius:5px;
::placeholder {
  font-family: Avenir-Roman;
  font-size: 40px;
  line-height: 50px;
  text-align: left;
  color: #b4b4b4;
  padding-left: 10px;
  font-weight:900;
}
`

export const TagWrapper = styled.div`
  width:60%;
  margin:1%;
`
export const PreviewButton = styled.button.attrs(props=>({
  disabled:props.disabled
}))`
${props => (props.disabled ? 'background-color:#b4b4b4;' : 'background-color:darkslateblue;')}
${props => (!props.disabled ? 'border: 1px solid #d3d3d3;' : 'border: 1px solid darkslateblue')}

    width:30%;
    position:fixed;
    right:2%;
    font-family: Avenir;
    font-size: 18px;
    font-weight: 900;
    line-height: 10px;
    text-align: center;
    color: white;
    padding:3%;
`;