


export const SHOW_FLASH_MESSAGES = ()=>{

    return({
        type: 'SHOW_FLASH_MESSAGES',
    })
}

export const HIDE_FLASH_MESSAGES = ()=>{

    return({
        type: 'HIDE_FLASH_MESSAGES',
    })
}

export const SET_FLASH_MESSAGE = (values)=>{

    return({
        type: 'SET_FLASH_MESSAGE',
        payload:{
            type: values.type,
            message: values.message,
            shouldRedirect: values.shouldRedirect,
            redirectUrl: values.redirectUrl,
        }
    })
}


export const FLASH_A_MESSAGE_AND_REDIRECT = (values)=>(dispatch)=>{
    console.log('Called flash a message:', values);
    dispatch(SET_FLASH_MESSAGE(values));
    dispatch(SHOW_FLASH_MESSAGES());
    setTimeout(()=>dispatch(HIDE_FLASH_MESSAGES()), 4000)
    
}

export const FLASH_A_MESSAGE = (values)=>(dispatch)=>{
    values.shouldRedirect=false;
    values.redirectUrl=null;
    dispatch(SET_FLASH_MESSAGE(values));
    dispatch(SHOW_FLASH_MESSAGES());
    setTimeout(()=>dispatch(HIDE_FLASH_MESSAGES()), 4000)
}