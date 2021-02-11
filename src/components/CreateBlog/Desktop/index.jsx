import React, { Component} from "react";
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
import TextBox from '../../../common/formFields/textBox'
import TextArea from '../../../common/formFields/textArea'
import ImgBox from '../../../common/imageWithDesc'
import _ from 'lodash'
import TagComponent from '../../../components/TagComponent'
import PriceSlider from '../../../components/PriceSlider'
import MonthSelector from '../../../components/MonthSelect'
import ScaleOneToTen from '../../../components/ScaleOneToTen'

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

const JobApplyForm = ({ fields, handleSetFieldValues,SubmitButton,previewButton }) => {
  console.log({fields})

  return (
    <FormWholeContainer style = {{"margin-bottom":"10%"}}>
      {previewButton()}
      <ImgBox
        displayName="Upload a Cover Photo"
        RequiredKey={true}
        coverPhoto={true}
        button_text="Upload a cover photo"
        blog_images = {fields.blog_images || {}}
        handleSetFieldValues={handleSetFieldValues}
        section = "A"
      />
      <TextBox
        title={true}
        handleSetFieldValues={handleSetFieldValues}
        type="text"
        name="blog_title"
        placeholder="Title of the blog..."
        displayName="Blog Title"
        RequiredKey={true}
        maxLength="50"
        value={fields.blog_title || ""}
      />
      <TagComponent handleSetFieldValues = {handleSetFieldValues}/>

      <TextArea
        handleSetFieldValues={handleSetFieldValues}
        type="text"
        name="blog_intro"
        placeholder="Intro for the blog..."
        RequiredKey={true}
        maxLength="500"
        value={fields.blog_intro || ""}
        rows="2"
        cols="100"
      />
      <ImgBox
        displayName="Upload a Pic"
        RequiredKey={true}
        blog_images = {fields.blog_images || {}}
        handleSetFieldValues={handleSetFieldValues}
        section = "B"
      />
      <TextArea
        handleSetFieldValues={handleSetFieldValues}
        type="text"
        name="blog_desc"
        placeholder="Add some helpful description..."
        RequiredKey={true}
        maxLength="500"
        value={fields.blog_desc || ""}
        rows="2"
        cols="100"
      />
      <ImgBox
        displayName="Upload a Pic"
        RequiredKey={true}
        blog_images = {fields.blog_images || {}}
        handleSetFieldValues={handleSetFieldValues}
        section = "C"
      />
      <TextArea
        handleSetFieldValues={handleSetFieldValues}
        type="text"
        name="blog_conclusion"
        placeholder="Add a summary to end..."
        RequiredKey={true}
        maxLength="500"
        value={fields.blog_conclusion || ""}
        rows="2"
        cols="100"
      />
      <ImgBox
        displayName="Upload a Pic"
        RequiredKey={true}
        blog_images = {fields.blog_images || {}}
        handleSetFieldValues={handleSetFieldValues}
        section = "D"
      />
      <ScaleOneToTen handleSetFieldValues={handleSetFieldValues}/>
      <PriceSlider handleSetFieldValues={handleSetFieldValues}/>
      <MonthSelector handleSetFieldValues = {handleSetFieldValues}/>
      {SubmitButton({disabled:false})}

    </FormWholeContainer>
  )

}

export default JobApplyForm;