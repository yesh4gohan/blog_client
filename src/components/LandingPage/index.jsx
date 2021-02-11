import React from 'react'
import { withTheme } from 'styled-components'
import MobileFooter from './Mobile'
import Desktophome from './Desktop'
const Homepage = props => {
    const { theme } = props
    const { isMobilePlatform } = theme
    return isMobilePlatform ? <MobileFooter ref = {props.inputRef}/> : <Desktophome />
}

export default withTheme(Homepage)
