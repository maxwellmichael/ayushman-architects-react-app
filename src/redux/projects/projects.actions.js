import axios from 'axios';
import Cookies from 'js-cookie';
import {FLASH_A_MESSAGE, FLASH_A_MESSAGE_AND_REDIRECT} from '../utils/flashMessages/flashMessages.actions';



export const ADD_PROJECT = (project)=>{

    return({
        type: "ADD_PROJECT",
        payload:{
            project: project,
        },
    });
}

export const CLEAR_PROJECTS = ()=>{

  return({
      type: "CLEAR_PROJECTS",
  });
}

export const POST_PROJECT = (data, backendUrl)=>async (dispatch)=>{
    let projectFormData = new FormData();
    projectFormData.append('title', data.title);
    projectFormData.append('location', data.location);
    projectFormData.append('description', data.description);
    projectFormData.append('image1', data.image1[0]);
    projectFormData.append('image2', data.image2[0]);
    projectFormData.append('image3', data.image3[0]);
    projectFormData.append('image4', data.image4[0]);
    projectFormData.append('image5', data.image5[0]);
    projectFormData.append('image6', data.image6[0]);
    projectFormData.append('category', data.category);
  

    axios({
        method: 'post',
        url: `${backendUrl}/project`,
        data: projectFormData,
        withCredentials: true,
        headers:{
          'Content-Type': 'multipart/form-data',
          'content-type': 'multipart/form-data',
          'Access-Control-Allow-Credentials': true,
          'Access-Control-Allow-Methods': '*',
          //Requires CSRF Header to access jwt_requireed protected routes
          'X-CSRF-TOKEN-ACCESS': Cookies.get('csrf_access_token'),
         
        }
  
      }).then(
          res=>{
            console.log(res.data)
            dispatch(FLASH_A_MESSAGE({type:'SUCCESS', message:'Project has been Saved'}))
          })
        .catch(err=>{
            console.log("err", err)

            if(err.response){
              console.log('Status Code', err.response.status)
              if(err.response.status===401){
                const values = {type:'ERROR', message:"Please Login To Continue", shouldRedirect:true, redirectUrl:'/userauthenticate'}
                dispatch(FLASH_A_MESSAGE_AND_REDIRECT(values));
              }
              
            }
            else{
              dispatch(FLASH_A_MESSAGE({type:'ERROR', message:err.message}))
            }
        })

}

export const GET_PROJECTS = (data, backendUrl)=>(dispatch)=>{

    axios({
        method: 'get',
        url: `${backendUrl}/project`,
        withCredentials: true,
        headers:{
          'Access-Control-Allow-Credentials': true,
          'Access-Control-Allow-Methods': '*',
        }
      })
        .then(res=>{
            if(res.status===200){
              dispatch(CLEAR_PROJECTS());
              const data=res.data;
              for(const project in data){
                dispatch(ADD_PROJECT(data[project]));
              }
            }
        })
        .catch(err=>{
            console.log(err)
        })
}

export const PUT_PROJECT = (data, backendUrl)=>async (dispatch)=>{
  axios({
      method: 'put',
      url: `${backendUrl}/project`,
      params: data,
      withCredentials: true,
      headers:{
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Methods': '*',
        //Requires CSRF Header to access jwt_requireed protected routes
        'X-CSRF-TOKEN-ACCESS': Cookies.get('csrf_access_token'),
      }
  })
  .then(
        res=>{
          console.log(res.data)
          dispatch(FLASH_A_MESSAGE({type:'SUCCESS', message:'Project has been Saved'}))
      })
  .catch(err=>{
          console.log("err", err)
          if(err.response){
            console.log('Status Code', err.response.status)
            if(err.response.status===401){
              const values = {type:'ERROR', message:"Please Login To Continue", shouldRedirect:true, redirectUrl:'/userauthenticate'}
              dispatch(FLASH_A_MESSAGE_AND_REDIRECT(values));
            }    
          }
          else{
            dispatch(FLASH_A_MESSAGE({type:'ERROR', message:err.message}))
          }
  })

}

export const DELETE_PROJECT = (data, backendUrl)=>async (dispatch)=>{
  axios({
      method: 'delete',
      url: `${backendUrl}/project`,
      params: data,
      withCredentials: true,
      headers:{
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Methods': '*',
        //Requires CSRF Header to access jwt_requireed protected routes
        'X-CSRF-TOKEN-ACCESS': Cookies.get('csrf_access_token'),
      }
  })
  .then(
        res=>{
          console.log(res.data)
          dispatch(FLASH_A_MESSAGE({type:'SUCCESS', message:'Project has been Saved'}))
      })
  .catch(err=>{
          console.log("err", err)
          if(err.response){
            console.log('Status Code', err.response.status)
            if(err.response.status===401){
              const values = {type:'ERROR', message:"Please Login To Continue", shouldRedirect:true, redirectUrl:'/userauthenticate'}
              dispatch(FLASH_A_MESSAGE_AND_REDIRECT(values));
            }    
          }
          else{
            dispatch(FLASH_A_MESSAGE({type:'ERROR', message:err.message}))
          }
  })

}
