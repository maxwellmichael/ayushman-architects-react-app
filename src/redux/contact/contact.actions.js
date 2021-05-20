import {FLASH_A_MESSAGE} from '../utils/flashMessages/flashMessages.actions';
import emailjs from 'emailjs-com';


export const SUBMIT_CONTACT_FORM = (e)=>(dispatch)=>{

    emailjs.sendForm('service_mf4idu9', 'template_8wttjxp', e.target, 'user_4b3btXxpzQyO4cLqbyMLU')
    .then((result) => {
        console.log("Form Status:", result)
        const message = {type:'SUCCESS', message:"Success We will contact you shortly"}
        dispatch(FLASH_A_MESSAGE(message))
    }, 
    (error) => {
        console.log("Form Error:", error)
        const message = {type:'ERROR', message:"An Error occured please retry again"}
        dispatch(FLASH_A_MESSAGE(message))
    });


}