import React,{useState} from 'react';
import {connect} from 'react-redux';
import ProgressBar from '../../components/utils/tinyProgressBar';

const AddProjectImagesForm = (props)=>{
    const [file, setFile] = useState(null);
    const types = ['image/png', 'image/jpeg']
    
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
        <React.Fragment>
            {file && <ProgressBar file={file} setFile={setFile} />}
            {props.projectImages.map((image, i)=><div key={i} className="sub-label">{image.name}</div>)}
            <input onChange={changeHandler} className="input" type="file" accept=".jpg,.jpeg,.png" />
        </React.Fragment>
    )

}


const mapStateToProps = (state)=>({

    projectImages: state.projectImages,
})

export default connect(mapStateToProps)(AddProjectImagesForm);