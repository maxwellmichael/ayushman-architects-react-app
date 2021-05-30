export const ADD_IMAGE = (image)=>{

    return({
        type: "ADD_IMAGE",
        payload:{
            image: image,
        },
    });
}

export const CLEAR_IMAGES = ()=>{

  return({
      type: "CLEAR_IMAGES",
  });
}