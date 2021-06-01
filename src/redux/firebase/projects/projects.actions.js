import {projectDatabase} from '../../../firebase/config';


export const ADD_PROJECT = (project)=>{

    return({
        type: "ADD_PROJECT",
        payload:{
            project: project,
        },
    });
}

export const ADD_PROJECTS = (projects)=>{

    return({
        type: "ADD_PROJECTS",
        payload:{
            projects: projects,
        },
    });
}

export const CLEAR_PROJECTS = ()=>{

  return({
      type: "CLEAR_PROJECTS",
  });
}

export const GET_PROJECTS_FROM_FIRESTORE = ()=>async(dispatch)=>{
    let documents = []
    projectDatabase.collection('projects')
        .onSnapshot((snap)=>{
            snap.forEach(doc=>{
                documents.push({...doc.data(), id:doc.id})
            })
        })
    dispatch(CLEAR_PROJECTS())
    dispatch(ADD_PROJECTS(documents))
}

export const MODIFY_PROJECT_ON_FIRESTORE = (project)=>async (dispatch)=>{

}

export const REMOVE_PROJECT_FROM_FIRESTORE = (id)=>async (dispatch)=>{

}

export const ADD_PROJECT_TO_FIRESTORE = (data)=>async (dispatch)=>{
    const project = {title:data.title, subtitle:data.subtitle, location:data.location, content:data.content, category:data.category, images:data.images, size:data.size, projectStartDate:data.projectStartDate, projectEndDate:data.projectEndDate, createdAt:data.createdAt, featured:data.featured}
    const collectionRef = projectDatabase.collection('projects');
    collectionRef.add(project).then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        dispatch(ADD_PROJECT(docRef))
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });

}