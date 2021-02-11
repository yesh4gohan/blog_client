import axios from 'axios';
import { isEmpty } from 'lodash';
let count = 0;
export const uploadImageData = async (post_id, img_arr, user) => {
    // console.log({post_id,img,user})
    // console.log({img_arr})
    // const img_data = await axios.post(`${process.env.REACT_APP_S3_UPLOAD_URL}`, { post_id, img_arr, user })
    // console.log({ img_data })
    // return img_data;
    return Promise.resolve(`https://example${count++}.com`)
}

export const sortImages = (images_object) => {
    const sorted_image_array = [];
    const sorted_image_desc_url = {};
    const sections = Object.keys(images_object);
    sections.sort((sec1, sec2) => (sec1.localeCompare(sec2)))
    sections.forEach(section => {
        sorted_image_desc_url[section] = []
        const img_obj_vals = Object.values(images_object[section]);
        img_obj_vals.forEach((val) => {
            sorted_image_array.push(val.data);
            sorted_image_desc_url[section].push({
                img_desc: val.img_desc,
                img_url: ''
            })
        })
    })
    // console.log({ sorted_image_array })
    // console.log({ sorted_image_desc_url })
    return {
        sorted_image_array,
        sorted_image_desc_url
    };
}
export const fetchWrapper = (URL, method, data) => {
    try {

        return axios({ method, url: `${process.env.REACT_APP_BASE_URL}${URL}`, data })
            .then((response) => {
                return response.data;
            })
    } catch (error) {
        handleInvalidRequest(error);
    }
}

const handleInvalidRequest = (error) => {
    throw new Error(error);
}

export const handleMultipleUpload = async ({
    post_id,
    img_data,
    user
}) => {

    const { sorted_image_array, sorted_image_desc_url } = sortImages(img_data);

    try {
        const img_s3_url_arr = await uploadImageData(post_id, sorted_image_array, user);
        const sections = Object.keys(sorted_image_desc_url);
        let count = 0;
        sections.forEach((sec) => {
            sorted_image_desc_url[sec].forEach((each) => {
                console.log({each})
                each.img_url = img_s3_url_arr[count];
                count++;
            })
        })
        console.log({sorted_image_desc_url})
        return sorted_image_desc_url;
    } catch (error) {
        console.log({ error })
        return null;
    }
}

export const fetchUser = async () => {
    const res = await axios.get('/api/current_user');
    return res.data;
};

export const createPost = async (payload) => {
    const res = await axios.post('/api/blog',payload);
    return res.data;
}