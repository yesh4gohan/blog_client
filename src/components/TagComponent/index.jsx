import React, { useState,useEffect } from 'react'
import Select from 'react-select'
import {popular_tags} from '../../app_constants'
import {TagWrapper} from '../../common/commonStyles'

const options = popular_tags
                .map((tag,ind)=>{
                    return {
                        value:(ind+1).toString(),
                        label:tag
                    }
                })
const TagComponent = ({handleSetFieldValues}) => {
    const [tags,setTags] = useState([]);
    useEffect(() => {
        handleSetFieldValues("blog_tags",tags)
    }, [tags])
    const handleOnchange = (opts) => {
        const keys = 
        opts && opts    
                .map((ip,ind)=>{
                    return ip.label
                })
        setTags(keys);      
    }
    return (
    <TagWrapper>
        <Select 
            options={options} 
            isMulti = {true}
            placeholder = "Add one or more tags to best describe the trek..."
            onChange = {handleOnchange}
        />      
    </TagWrapper>
    );
  
}

export default TagComponent;