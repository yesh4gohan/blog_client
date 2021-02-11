import React,{Component} from "react";
import {
  FieldContainer,
  Field,
  FormWholeContainer,
  FieldLabelContainer,
  FieldName,
  RequiredKey,
  SelectField,
  OptionField,
  FileInput,
  UploadButton,
  SubmitButton
} from "./styles";
import {} from '../../../helpers/formFieldHelper';
import TextBox from '../../../common/formFields/textBox'
import _ from 'lodash'

// blogTitle,
// blogTitleImg,
// tags,
// intro,
// desc,
// specialNotes,
// cost,
// groupSize,
// stateName,
// baseCamp,
// gallery,
// visitedMonth,
// difficulty,
// author,
// socialLink,
// gmapLink,
// BestTime,

const JobApplyForm = (props) =>{
        return (
            <FormWholeContainer>
              <TextBox handleSetFieldValues = {props.handleSetFieldValues} type = "text" name="blog_title" placeholder="Title of the blog" displayName = "Blog Title" RequiredKey = {true} maxLength = "50" value = {props.fields.blog_title}/>
            </FormWholeContainer>
        )
    
}

export default JobApplyForm;