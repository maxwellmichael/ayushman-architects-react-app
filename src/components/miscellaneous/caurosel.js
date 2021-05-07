import React, {useState} from 'react';
import {useTransition, animated, config} from 'react-spring';
import CauroselCard from './cauroselCard';
import { useMediaQuery } from 'react-responsive'
import {ReactComponent as LeftArrow}from '../../images/icons/previous.svg';
import {ReactComponent as RightArrow}from '../../images/icons/next.svg';






const Caurosel=()=>{

   
   
    const [fromValue, setFromValue] = useState("-101");
    const [leaveValue, setLeaveValue] = useState("101");
    const isMobile = useMediaQuery({ query: '(max-width: 450px)' })
    const isTablet = useMediaQuery({ query: '(max-width: 900px)' })

    const Factor = ()=>{
        if(isMobile){
            return 1;
        }
        else if(isTablet){
            return 2;
        }
        else{
            return 3;
        }
    };
    const [StartIndex, setStartIndex] = useState(Factor());

    const totalCards = 9;

    const data=[
        {title:'Eclectic Theme Interiors For Living Room', url:'https://super.homelane.com/products/07dec18/homeinteriors/6.jpg', message:'Live the way you deserve with beautiful living room spaces. Check out our complete range of home'},
        {title:'Indian Theme Home Interiors', url:'https://super.homelane.com/products/07dec18/homeinteriors/1.jpg',message:'Cozy, beautiful bedrooms with clever storage designs are a must-have for all urbanites.'},
        {title:'Kid Friendly Theme Home Interiors', url:'https://super.homelane.com/products/07dec18/homeinteriors/2.jpg',message:'Our interior designs for your bedroom ensure that you have a serene, beautiful hide-out to escap'},
        
        {title:'Eclectic Theme Interiors For Living Room', url:'https://super.homelane.com/products/07dec18/homeinteriors/6.jpg', message:'Live the way you deserve with beautiful living room spaces. Check out our complete range of home'},
        {title:'Indian Theme Home Interiors', url:'https://super.homelane.com/products/07dec18/homeinteriors/1.jpg',message:'Cozy, beautiful bedrooms with clever storage designs are a must-have for all urbanites.'},
        {title:'Kid Friendly Theme Home Interiors', url:'https://super.homelane.com/products/07dec18/homeinteriors/2.jpg',message:'Our interior designs for your bedroom ensure that you have a serene, beautiful hide-out to escap'},
        
        {title:'Eclectic Theme Interiors For Living Room', url:'https://super.homelane.com/products/07dec18/homeinteriors/6.jpg', message:'Live the way you deserve with beautiful living room spaces. Check out our complete range of home'},
        {title:'Indian Theme Home Interiors', url:'https://super.homelane.com/products/07dec18/homeinteriors/1.jpg',message:'Cozy, beautiful bedrooms with clever storage designs are a must-have for all urbanites.'},
        {title:'Kid Friendly Theme Home Interiors', url:'https://super.homelane.com/products/07dec18/homeinteriors/2.jpg',message:'Our interior designs for your bedroom ensure that you have a serene, beautiful hide-out to escap'},
        
    ]

    

    const handleRightButtonClick = ()=>{
        let newIndex = StartIndex;
        setFromValue('-100')
        setLeaveValue('100')
        if(StartIndex<totalCards){
            setStartIndex(newIndex+Factor());
            console.log("Start Index", StartIndex);
        }
        else if(StartIndex===totalCards){
            console.log("Start Index", StartIndex);
        }
    }

    const handleLeftButtonClick = ()=>{
        let newIndex = StartIndex;
        setFromValue('100')
        setLeaveValue('-100')
        if(StartIndex>Factor()){
            setStartIndex(newIndex-Factor());
            console.log("Start Index", StartIndex);
        }
        else if(StartIndex===Factor()){
            console.log("Start Index", StartIndex);
        }
    }

    const cauroselCardsTransition = useTransition(StartIndex, null, {
        from: {transform: `translateX(${fromValue}vw)`},
        enter: {transform: "translateX(0px)"},
        leave: {transform: `translateX(${leaveValue}vw)`},
        config: config.gentle,
    })

   

    return(
        <div className="caurosel-main">

            <div className="caurosel-buttons-container">
                <button onClick={()=>handleLeftButtonClick()}><LeftArrow /></button>
                <button onClick={()=>handleRightButtonClick()}><RightArrow /></button>
            </div>

            <div className="caurosel-cards-main">
                {cauroselCardsTransition.map(({item, key, props: style})=>{
                
                return (
                    <animated.div key={key} className="caurosel-cards-container" style={style}>
                        {data.slice(item-Factor(), item).map( value=>{
                            return(<CauroselCard key={data.indexOf(value)} title={value.title} url={value.url} message={value.message} />)
                        })}
                    </animated.div>
                )})}
                

            </div>
            
        </div>
    );
}


export default Caurosel;