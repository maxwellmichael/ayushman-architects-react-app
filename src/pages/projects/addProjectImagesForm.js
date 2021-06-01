import React,{useState} from 'react';
import {connect} from 'react-redux';
import ProgressBar from '../../components/utils/tinyProgressBar';
import { useMediaQuery } from 'react-responsive';

const AddProjectImagesForm = (props)=>{
    const [file, setFile] = useState(null);
    const types = ['image/png', 'image/jpeg']
    const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

    
    const changeHandler = (e)=>{
        let selected = e.target.files[0];
        console.log(selected)
        if(selected && types.includes(selected.type)){
            setFile(selected);
        }
        else{
            setFile(null);
        }

    }
    

    return(
        <div className="input" style={{width:'30%'}}>
            {props.projectImages.map((image, i)=><div key={i} className="sub-label">{image.name}</div>)}
            {file && <div className="input" style={{width:'30%'}}><div className="sub-label">Uploading: </div><ProgressBar file={file} setFile={setFile} /></div>}
            <input style={{width:isMobile?'100%':'100%', zIndex:3}} onChange={changeHandler} className="input" type="file" accept=".jpg,.jpeg,.png" />
        </div>
    )

}


const mapStateToProps = (state)=>({

    projectImages: state.projectImages,
})

export default connect(mapStateToProps)(AddProjectImagesForm);