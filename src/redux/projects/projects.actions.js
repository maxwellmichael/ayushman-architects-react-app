import axios from 'axios';
import Cookies from 'js-cookie';
import {SET_MODALS_HIDDEN} from '../utils/modals/modals.actions'



export const ADD_PROJECT = (project)=>{

    return({
        type: "ADD_PROJECT",
        payload:{
            project: project,
        },
    });
}

export const CLEAR_PROJECTS = (project)=>{

  return({
      type: "CLEAR_projectS",
  });
}

export const POST_PROJECT = (data)=>async (dispatch)=>{
    console.log("Data", data.image1[0])
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
        url: `${data.backendUrl}/project`,
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
            dispatch(SET_MODALS_HIDDEN())
          })
        .catch(err=>{
            dispatch(SET_MODALS_HIDDEN())
            console.log("err", err)})
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
              const data=res.data;
              dispatch(CLEAR_PROJECTS());
              for(const project in data){
                console.log('project',data[project]);
                dispatch(ADD_PROJECT(data[project]));
              }
                
              }
        })
        .catch(err=>{
            console.log(err)
        })

}