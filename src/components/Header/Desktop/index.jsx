import React, { useContext } from "react";
import { HeaderWrapper, HeaderItemsContainer, StyledLink, StyledAnchor, HeaderLogoContainer, LogoImage } from "./styles";
import { UserContext } from '../../../contexts/userContexts'
const DesktopHeader = () => {
    const user = useContext(UserContext);
    const renderContent = () => {
        switch (user) {
            case null:
                return;
            case false:
                return <StyledAnchor href={`${process.env.REACT_APP_BASE_URL}/auth/google`}>Login With Google</StyledAnchor>
            default:
                return [
                    <StyledLink to="/create-new">Create your blog</StyledLink>,
                    <StyledAnchor href={`${process.env.REACT_APP_BASE_URL}/auth/logout`}>Logout</StyledAnchor>
                ];
        }
    }
    return <HeaderWrapper>
        <HeaderLogoContainer>
            <LogoImage />
        </HeaderLogoContainer>
        <HeaderItemsContainer>
            {renderContent()}
        </HeaderItemsContainer>
    </HeaderWrapper>
};

export default DesktopHeader;
