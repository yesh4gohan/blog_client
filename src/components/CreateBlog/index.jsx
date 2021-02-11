import React, { useState, useContext } from 'react'
import { withTheme } from 'styled-components'
import MobileCreateBlog from './Mobile'
import DesktopCreateBlog from './Desktop'
import { isEmpty } from 'lodash'
import { handleMultipleUpload, createPost } from '../../Network/ApiCallsHandler'
import { SubmitButton, PreviewButton } from '../../common/commonStyles'
import { UserContext } from '../../contexts/userContexts'
import { v4 as uuidv4 } from 'uuid';
import { createBlogPayload } from '../../helpers/blogPayloadHelper';
const CreateBLog = props => {
    const user = useContext(UserContext);
    const { theme } = props
    const { isMobilePlatform } = theme
    const [blogTitle, setblogTitle] = useState("");
    const [blogTitleImg, setblogTitleImg] = useState(null);
    const [tags, setTags] = useState([]);
    const [intro, setIntro] = useState("");
    const [desc, setDesc] = useState("");
    const [specialNotes, setSpecialNotes] = useState("");
    const [cost, setCost] = useState("");
    const [groupSize, setGroupSize] = useState(0);
    const [stateName, setStateName] = useState("");
    const [baseCamp, setBaseCamp] = useState("");
    const [gallery, SetGallery] = useState(null);
    const [visitedMonth, setVisitedMonth] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [author, setAuthor] = useState("");
    const [socialLink, setSocialLink] = useState("");
    const [gmapLink, setGmapLink] = useState("");
    const [file_place_holder, setFilePlaceHolder] = useState("Formats: .jpg, .pdf, .png");
    // onFileChange = (e) => {
    //     e.stopPropagation();
    //     let file_name = e.target.value.split('\\');
    //     const len = e.target.value.split('\\').length;
    //     if(len){
    //         file_name = file_name[len-1];
    //     }
    //     this.setState({
    //         file_place_holder:file_name,
    //         file_input:e.target.value
    //     },this.validateInputFields)
    // }

    // onChange = e => {
    //     e.preventDefault();
    //     this.setState({
    //         [e.target.name]:e.target.value
    //     },this.validateInputFields)
    // }

    // validateInputFields = () => {
    //     let submitDisableFlag = !(validateName(blogTitle) && 
    //                        validateName(author) &&
    //                        validateEmail(mailId) &&
    //                        validatePhone(ph_no) &&
    //                        validateName(stateName) &&
    //                        validateFile() && 
    //                        validateFile(exp))
    //     this.setState({submit_disable:submitDisableFlag})
    // }

    // const createBlogProps = {
    //     setblogTitle,
    //     setblogTitleImg,
    //     setTags,
    //     setIntro,
    //     setDesc,
    //     setSpecialNotes,
    //     setCost,
    //     setGroupSize,
    //     setStateName,
    //     setBaseCamp,
    //     SetGallery,
    //     setVisitedMonth,
    //     setDifficulty,
    //     setAuthor,
    //     setSocialLink,
    //     setGmapLink,
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
    //     onChange,
    //     validateInputFields
    // }

    const submitImages = async (post_id) => {
        const image_payload = {
            post_id,
            img_data: fields.blog_images,
            user
        }
        if (!isEmpty(fields) && !isEmpty(fields["blog_images"])) {
            const success_arr = await handleMultipleUpload(image_payload)
            return success_arr;
        }
    }
    const handleImageFileChange = e => {
        e.stopPropagation();
        let file_name = e.target.value.split('\\');
        const len = e.target.value.split('\\').length;
        if (len) {
            file_name = file_name[len - 1];
        }
        setFilePlaceHolder(file_name)
        this.setState({
            file_place_holder: file_name,
            file_input: e.target.value
        }, this.validateInputFields)
    }
    const createBlogProps = {
        file_place_holder,
        handleImageFileChange
    }
    const finalProps = { ...props, ...createBlogProps }
    const [fields, setFieldValues] = useState({
        blog_images: {}
    });

    const handleSetFieldValues = (field, val) => {
        const fields_copy = { ...fields };
        fields_copy[field] = val;
        setFieldValues(fields_copy);
    }
    const SubmitButtonComponent = ({ disabled }) => {
        return (
            <SubmitButton disabled={disabled} onClick={handleBlogSubmit}>Publish Blog</SubmitButton>
        )
    }
    const handleBlogSubmit = async () => {
        let post_id = "";
        if (sessionStorage.getItem("post_id") !== null && sessionStorage.getItem("post_id") !== "") {
            post_id = sessionStorage.getItem("post_id")
        }
        else {
            post_id = `post_${uuidv4()}`;
            sessionStorage.setItem("post_id", post_id)
        }
        const images_data = await submitImages(post_id);
        console.log({images_data})
        if (!isEmpty(images_data)) {
            setPayloadAttributes(images_data,post_id)
            console.log({field_val_final:fields})
            const payload = createBlogPayload(fields,user.displayName,post_id,images_data);
            const added_post = await createPost(payload);

        }
    }

    const setPayloadAttributes = (images_data,post_id) => {
        return new Promise((resolve,reject)=>{
            handleSetFieldValues("blog_images", images_data)
            handleSetFieldValues("blog_id", post_id)
            handleSetFieldValues("blog_author_name", user.displayName)
            resolve();
        })
    }
    const PreviewButtonComponent = () => {
        return (
            <PreviewButton>Preview Blog</PreviewButton>
        )
    }
    return isMobilePlatform ?
        <MobileCreateBlog
            previewButton={PreviewButtonComponent}
            SubmitButton={SubmitButtonComponent}
            fields={fields}
            handleSetFieldValues={handleSetFieldValues}
            {...finalProps}
        />
        :
        <DesktopCreateBlog
            previewButton={PreviewButtonComponent}
            SubmitButton={SubmitButtonComponent}
            fields={fields}
            handleSetFieldValues={handleSetFieldValues}
            {...finalProps}
        />
}

export default withTheme(CreateBLog)
