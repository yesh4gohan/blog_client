import React from "react";
import { min_slider_price, max_slider_price } from '../../app_constants'
import { BarContainer, SlideBar, RangeLabel, PriceDisplayer, PriceContent } from './styles';
import { FieldName } from "../../common/commonStyles";
const ProgressBar = ({handleSetFieldValues}) => {
    const [val, setVal] = React.useState(0);
    const onInput = e => {
        setVal(e.target.value)
        handleSetFieldValues("blog_appx_cost",e.target.value)
    };
    return (
        <BarContainer>
                <FieldName>
                    Let us know appx cost per person
                </FieldName>    
            <SlideBar
                type="range"
                min="1"
                max="100"
                value={val}
                id="myRange"
                onInput={onInput}
            />
            <RangeLabel>
                {` ₹ ${val*(max_slider_price-min_slider_price)/100}`}
            </RangeLabel>
            <PriceDisplayer>
                <PriceContent>{` ₹ ${min_slider_price}`}</PriceContent>
                <PriceContent>{` ₹ ${max_slider_price}`}</PriceContent>
            </PriceDisplayer>
        </BarContainer>
    );
};

export default ProgressBar;