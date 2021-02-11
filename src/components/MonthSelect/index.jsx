import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { month_names } from '../../app_constants';
import { TagWrapper } from '../../common/commonStyles'

const options = month_names
    .map((month, index) => {
        return {
            value: (index + 1),
            label: month
        }
    })
const MonthSelector = ({ handleSetFieldValues }) => {
    const [tags, setTags] = useState([]);
    useEffect(() => {
        handleSetFieldValues("blog_month_visited", tags)
    }, [tags])
    const handleOnchange = (opts) => {
        setTags(opts.label)
    }
    return (
        <TagWrapper>
            <Select
                options={options}
                placeholder="Month you visited"
                onChange={handleOnchange}
            />
        </TagWrapper>
    )
}

export default MonthSelector;