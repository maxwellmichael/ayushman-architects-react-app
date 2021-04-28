import React,{useEffect, useState} from 'react';
import {animated, useTransition, config} from 'react-spring';



const SlideContent = (props)=>{

    

    const [reveal, setReveal] = useState(true);


    const titleTransition = useTransition(reveal, null, {
        from: {opacity: 0, transform: "translateX(-10vw)"},
        enter: {opacity: 1, transform: "translateX(3%)"},
        leave: {opacity: 0, transform: "translateX(110vw)"},
        delay: 100,
        config: config.wobbly,
    })



    //useEffect(()=>{
        //setTimeout(()=>{setReveal(false)}, 6000);
    //})


    return(
        <React.Fragment>
            {titleTransition.map(({item, key, props: style})=>{
                
                return(
                    item ?<animated.div key={key} className="slide-content" style={style}>
                        <h1>{props.data.title}</h1>
                        <p>{props.data.message}</p>
                        <button>Learn More</button>
                    </animated.div>:null
                )
            })}
        </React.Fragment>
    )
}


export default SlideContent;