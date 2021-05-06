
let initialState = [];


const projectsReducer = (state=initialState, action)=>{
    let projects = [...state];
    switch(action.type){

        case 'ADD_PROJECT':
            projects.push(action.payload.project);
            return projects;
        
        case 'CLEAR_PROJECTS':
            return [];

        default:
            return [...state];

    }
}

export default projectsReducer;