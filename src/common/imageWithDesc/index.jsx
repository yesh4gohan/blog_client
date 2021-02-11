import React, { useState, useEffect } from 'react';
import { } from './styles';
import { decideValidationType } from '../../helpers/formFieldHelper'
import TextBox from '../formFields/textBox'
import ImageUploader from 'react-images-upload'
import { uploadImageData, handleMultipleUpload } from '../../Network/ApiCallsHandler'
import { FieldContainer, FieldLabelContainer, FieldName, Field, UploadButton, FileInput, FormWholeContainer } from '../commonStyles';
import {isEmpty,isArray} from 'lodash'
export default function ImgBox(props) {
    const { placeholder, displayName, blog_images, coverPhoto, handleSetFieldValues, section } = props
    const [err, setErr] = useState(false);
    const [placeHolder, setPlaceHolder] = useState(placeholder);
    const [updateBtnEnable, setUpdateBtnEnable] = useState(false);
    const [imgData, setImgData] = useState(null)
    const [imgDesc, setImgDesc] = useState("");
    const [gallery_part, setGalleryPart] = useState([])
    useEffect(() => {
        setUpdateBtnEnable(validateImgData());
    }, [imgDesc])

    const setValCB = async (failed_images, successImages) => {
        if (!isEmpty(successImages) && isArray(successImages)) {
            //handleMultipleUpload(successImages);
            let new_images_obj = { ...blog_images };
            let names_arr = [];
            let new_img_section = { ...new_images_obj[section]} || {} 
            for (let i = 0; i < successImages.length; i++) {
                const parts = successImages[i].split(';');
                const mime = parts[0].split(':')[1];
                const name = parts[1].split('=')[1];
                const data = parts[2];
                names_arr.push(name);
                if (!new_img_section[name]) {
                    new_img_section[name] = {
                        img_desc: imgDesc,
                        data: {
                            mime,
                            name,
                            image: data
                        }
                    }
                }
            }
            let keys_arr = Object.keys(new_img_section)
                      .filter((obj)=>{
                        return !names_arr.includes(obj)
                      })  
            if(!isEmpty(keys_arr) && isArray(keys_arr)){
                keys_arr.forEach((key)=>{
                    delete new_img_section[key];
                })
            }
            new_images_obj[section] = new_img_section;
            setImgDesc("")
            handleSetFieldValues("blog_images", new_images_obj)
            //blog_images
        }
    }
    const handleImgDescChange = e => {
        setErr(!decideValidationType("text", e.target.value));
        setImgDesc(e.target.value)
    }

    const validateImgData = () => {
        return decideValidationType("text", imgDesc)
    }
    return (
        <FormWholeContainer border_show={coverPhoto}>
            {!coverPhoto ?
                <TextBox
                    error={err}
                    onChangeHandler={handleImgDescChange}
                    type="text"
                    name="img_desc"
                    placeholder="Brief description for image..."
                    displayName="Image Description"
                    RequiredKey={true}
                    maxLength="50"
                    value={imgDesc || ""}
                />
                :
                null
            }
            <FieldContainer>

                <ImageUploader
                    withLabel={false}
                    fileContainerStyle={{ 'align-items': 'start', 'box-shadow': 'none', 'padding': '0px', 'margin': '0% 1%','width':'50%' }}
                    labelStyles={{ 'text-align': 'left' }}
                    key="image-uploader"
                    withIcon={false}
                    singleImage={coverPhoto}
                    withPreview={true}
                    label="Maximum size file: 10MB"
                    buttonText={props.button_text}
                    onChange={setValCB}
                    imgExtension={['.jpg', '.png', '.jpeg']}
                    maxFileSize={10485760}
                    buttonStyles={(!coverPhoto && !updateBtnEnable) ? { 'background-color': '#b4b4b4', 'pointer-events': 'none', 'text-align': 'left', 'margin': '0% 0%' } : { 'background-color': '#4caf50', 'text-align': 'left', 'margin': '0% 0%' }}
                ></ImageUploader>
            </FieldContainer>
        </FormWholeContainer>
    )
}
