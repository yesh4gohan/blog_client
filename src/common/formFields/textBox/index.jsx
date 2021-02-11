import React,{useState, useEffect,useRef} from 'react';
import {} from './styles';
import {decideValidationType} from '../../../helpers/formFieldHelper'
import {FieldContainer,FieldLabelContainer,FieldName,RequiredKey,Field,TitleField} from '../../commonStyles';
export default function TextBox(props) {
    const {title,error, type, name, maxLength, size, placeholder,displayName,RequiredKey,onChangeHandler } = props
    const [err,setErr] = useState(false);
    const setValCB = e => {
        setErr(!decideValidationType(type,e.target.value));
        props.handleSetFieldValues(e.target.name,e.target.value)
    }
    const textInput = useRef(null);

    useEffect(() => {
        textInput.current && textInput.current.focus();
    }, [])
    return (
     <FieldContainer>
        {title?
        <TitleField 
            ref = {textInput}
            placeholder={placeholder}   
            type={type} 
            name={name} 
            value = {props.value} 
            onChange = {onChangeHandler || setValCB} 
            maxLength = {maxLength || "100"} 
            size = {size || "100"}
            err = {error || err}
        />
        :
        <Field 
            placeholder={placeholder}   
            type={type} 
            name={name} 
            value = {props.value} 
            onChange = {onChangeHandler || setValCB} 
            maxLength = {maxLength || "100"} 
            size = {size || "100"}
            err = {error || err}
        />
    }
      </FieldContainer>
    )
}
