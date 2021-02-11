import styled from "styled-components";

export const FormWholeContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 1px #b4b4b4;
  background-color: white;
  margin:2%;
`;
export const FieldContainer = styled.div`
  margin: 2%;
`;
export const FieldLabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const FieldName = styled.div`
  font-family: Avenir-Roman;
  font-size: 11px;
  line-height: 23px;
  text-align: left;
  color: #a6adb4;
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
  border: solid 1px #ebeded;
  background-color: white;
  height: 40px;
  width: 100%;
  font-size: 14px;
  line-height: 19px;
  text-align: left;
  ::placeholder {
    font-family: Avenir-Roman;
    font-size: 14px;
    line-height: 19px;
    text-align: left;
    color: #b4b4b4;
    padding-left: 10px;
  }
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
  accept: props.accept
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
  background-color: rgb(228, 29, 54);
  border: 1px solid rgb(228, 29, 54);
`;

export const SubmitButton = styled.button.attrs((props)=>({
    disabled:props.disabled
}))`
${props => (props.disabled ? 'background-color:#b4b4b4;' : 'background-color:rgb(228, 29, 54);')}
${props => (!props.disabled ? 'border: 1px solid rgb(228, 29, 54);' : 'border: 1px solid #b4b4b4')}

    width:100%;
    position:sticky;
    bottom:0px;
    font-family: Avenir;
    font-size: 12px;
    font-weight: 900;
    line-height: 16px;
    text-align: center;
    color: white;
    padding:5%;
`;

