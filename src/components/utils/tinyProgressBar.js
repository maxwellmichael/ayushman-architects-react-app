import React, {useEffect} from 'react';
import useStorage from '../../firebase/useStorage';
import {connect} from 'react-redux'
import {ADD_IMAGE} from '../../redux/firebase/images/project_images/images.actions';

const ProgressBar = ({file, setFile, dispatch})=>{
    const {url, progress} = useStorage(file);
    console.log(url, progress)
    
    useEffect(()=>{
        if(url){
            const image={url:url, name:file.name}
            dispatch(ADD_IMAGE(image))
            setFile(null)
        }
    },[url, setFile, file, dispatch])

    return(
        <div className="tiny-progress">
            <div style={{width: `${progress}%`}} className="filler"></div>
        </div>
    )
}

export default connect()(ProgressBar);