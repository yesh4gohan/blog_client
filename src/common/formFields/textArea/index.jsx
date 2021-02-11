import React,{useState} from 'react';
import {} from './styles';
import {decideValidationType} from '../../../helpers/formFieldHelper'
import {FieldContainer,FieldLabelContainer,FieldName,RequiredKey,TextArea} from '../../commonStyles';
export default function TextAreaComponent(props) {
    const {type, name, maxLength, rows,cols, placeholder,displayName,RequiredKey } = props
    const [err,setErr] = useState(false);
    const setValCB = e => {
        setErr(!decideValidationType(type,e.target.value));
        props.handleSetFieldValues(e.target.name,e.target.value)
    }
    return (
     <FieldContainer err = {err}>

        <TextArea 
            placeholder={placeholder}   
            type={type} 
            name={name} 
            value = {props.value} 
            onChange = {setValCB} 
            maxLength = {maxLength || "100"} 
            rows = {rows || "2"}
            cols = {cols || "100"}
            err = {err}
        />
      </FieldContainer>
    )
}
