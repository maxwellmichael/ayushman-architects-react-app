import React from 'react';
import {useForm} from "react-hook-form";
import {connect} from 'react-redux';
import {POST_PROJECT} from '../../redux/projects/projects.actions';



const AddProjectForm = (props)=>{

    const {register, handleSubmit} = useForm();

    const onSubmit = (data)=>{
        
        props.dispatch(POST_PROJECT(data));
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)} className="form-main">

            <div className="form-title">New Project</div>
            
            <div className="form-inputs-container">

                <div className="form-input">
                    <div className="label">Title:</div>
                    <input className="input" type="text" name="title" ref={register} />
                </div>

                <div className="form-input">
                    <div className="label">Location:</div>
                    <input className="input" type="text" name="location" ref={register} />
                </div>

                <div className="form-input">
                    <div className="label">Description:</div>
                    <textarea className="textarea" type="text" name="description" ref={register} />
                </div>

                <div className="form-input">
                    <div className="label">Category:</div>
                    <select className="select" id="category" name="category" ref={register}>
                        <optgroup label="Project Category">
                            <option value="INTERIOR">Interior</option>
                            <option value="ARCHITECTURE">Architecture</option>
                            <option value="CONSTRUCTION">Construction</option>
                        </optgroup>
                    </select>
                </div>

                <div className="form-input">
                    <div className="label">Images:</div>
                    <input name="image1" className="input" type="file" accept=".jpg,.jpeg,.png" ref={register} />
                    <input name="image2" className="input" type="file" accept=".jpg,.jpeg,.png" ref={register} />
                    <input name="image3" className="input" type="file" accept=".jpg,.jpeg,.png" ref={register} />
                    <input name="image4" className="input" type="file" accept=".jpg,.jpeg,.png" ref={register} />
                    <input name="image5" className="input" type="file" accept=".jpg,.jpeg,.png" ref={register} />
                    <input name="image6" className="input" type="file" accept=".jpg,.jpeg,.png" ref={register} />

                </div>

            </div>
               
            <button type="submit" className="form-submit">Sumbit</button>            
        </form>
    )

}


export default connect()(AddProjectForm);