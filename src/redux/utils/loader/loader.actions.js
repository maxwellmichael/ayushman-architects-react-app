

export const SET_LOADER = (values)=>{

    return ({
        type: 'SET_LOADER',
        payload:{
            isHidden: values.isHidden,
            percentageLoaded: values.percentageLoaded,
            message: values.message,
        }

    });
}