import _ from 'lodash'


export const validateName = (name) => {
    const regex = /^[a-zA-Z]+(?:-[a-zA-Z]+)*$/
    return (name.match(regex) !== null)
}

export const validatePhone = (name) => {
    const regex = /^\d{10}$/;
    return (name.match(regex) !== null)
}
export const validateEmail = name => {
    const regex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return (name.match(regex) !== null)
}

export const validateFile = ip => {
    return !_.isEmpty(ip)
}

export const validateEmpty = ip => {
    return !_.isEmpty(ip)
}

export const validateTextAreaContents = ip => {
    //todo make sure text area contents not exceeding 300 chars
    return true;    
}

export const decideValidationType = (type=undefined,ip) => {
    switch (type) {
        case "text":
            return validateEmpty(ip)

        case "name":
            return validateName(ip)

        case "phone":
            return validatePhone(ip)

        case "email":
            return validateEmail(ip)

        default:
            return validateEmpty(ip)
    }
}