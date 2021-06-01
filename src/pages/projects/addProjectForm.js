import React,{useState} from 'react';
import {useForm} from "react-hook-form";
import {connect} from 'react-redux';
import {ADD_PROJECT_TO_FIRESTORE} from '../../redux/firebase/projects/projects.actions'
import AddProjectImagesForm from './addProjectImagesForm';
import { useMediaQuery } from 'react-responsive';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {timestamp} from '../../firebase/config';


const AddProjectForm = (props)=>{
    const {register, handleSubmit} = useForm();
    const isMobile = useMediaQuery({ query: '(max-width: 900px)' });
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());


    const onSubmit = (data)=>{
        data.images=props.projectImages;
        data.projectStartDate=startDate.toUTCString();
        data.projectEndDate=endDate.toUTCString();
        data.createdAt=timestamp();
        console.log(data)
        props.dispatch(ADD_PROJECT_TO_FIRESTORE(data));
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
                    <div className="label">Sub-Title:</div>
                    <input className="input" type="text" name="subtitle" ref={register} />
                </div>

                <div className="form-input">
                    <div className="label">Location:</div>
                    <input className="input" type="text" name="location" ref={register} />
                </div>

                <div className="form-input">
                    <div className="label">Project Size(SF):</div>
                    <input className="input" type="number" name="size" ref={register} />
                </div>

                <div className="form-input">
                    <div className="label">Content:</div>
                    <textarea className="textarea" type="text" name="content" ref={register} />
                </div>

                <div className="form-input" style={{display:'inline-flex'}}>
                    <div style={{marginTop:'auto'}} className="label">Start Date:</div>
                    <div style={{width:'30%',paddingBottom:6,backgroundColor:'transparent',boxShadow:'none'}} className="input">
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                </div>

                <div className="form-input" style={{display:'inline-flex'}}>
                    <div style={{marginTop:'auto'}} className="label">End Date:</div>
                    <div style={{width:'30%',paddingBottom:6,backgroundColor:'transparent',boxShadow:'none'}} className="input">
                        <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
                    </div>
                </div>

                <div className="form-input" style={{display:'inline-flex'}}>
                    <div className="label">Featured:</div>
                    <div style={{display:'inline-flex',margin:'0px 6px 0px 6px', width:isMobile?'100%':'10%'}} className="form-input">
                        <input className="radio" type="radio"  value={true} name="featured" ref={register} /> 
                        <div className="label">Yes</div>
                    </div>
                    <div style={{display:'inline-flex',margin:'0px 6px 0px 6px', width:isMobile?'100%':'10%'}} className="form-input">
                        <input className="radio" type="radio" defaultChecked value={false} name="featured" ref={register} /> 
                        <div className="label">No</div>
                    </div>
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
                    <AddProjectImagesForm />
                </div>

            </div>
               
            <button type="submit" className="form-submit">Sumbit</button>            
        </form>
    )

}



const mapStateToProps = (state)=>{
    return({
        projectImages: state.projectImages,
    })
}


export default connect(mapStateToProps)(AddProjectForm);