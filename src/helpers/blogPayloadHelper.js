import {blog_payload_obj} from '../app_constants';
import { validateEmail, validateFile, validateName, validatePhone } from './formFieldHelper'

export const createBlogPayload = (formFields,displayName,post_id,images_data) => {
    //todo add validation for all fields
    Object.keys(formFields).map((field)=>{
        blog_payload_obj[field] = formFields[field];
    })
    blog_payload_obj.blog_images = images_data;
    blog_payload_obj.displayName = displayName;
    blog_payload_obj.blog_id = post_id;
    return blog_payload_obj;
}