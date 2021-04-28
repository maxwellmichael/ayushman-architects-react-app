
export const SET_IMAGE_LOADED=(Action, value)=>(dispatch)=>{
    dispatch(Action(value))
    dispatch(UPDATE_ALL_IMAGES_LOADED())
}



export const SET_AEROPLANE_IMAGE_LOADED =(value)=>{

    return({
        type: 'SET_AEROPLANE_IMAGE_LOADED',
        payload: value
    })
}

export const SET_BUILDING1_IMAGE_LOADED =(value)=>{

    return({
        type: 'SET_BUILDING1_IMAGE_LOADED',
        payload: value
    })
}

export const SET_BUILDING2_IMAGE_LOADED =(value)=>{

    return({
        type: 'SET_BUILDING2_IMAGE_LOADED',
        payload: value
    })
}

export const SET_SKY_IMAGE_LOADED=(value)=>{

    return({
        type: 'SET_SKY_IMAGE_LOADED',
        payload: value
    })
}


export const UPDATE_ALL_IMAGES_LOADED=()=>{

    return({
        type: 'UPDATE_ALL_IMAGES_LOADED',
    })
}