import React, {useState} from 'react';
import {useTransition, animated, config} from 'react-spring';
import CauroselCard from './cauroselCard';
import { useMediaQuery } from 'react-responsive'
import {ReactComponent as LeftArrow}from '../../images/icons/previous.svg';
import {ReactComponent as RightArrow}from '../../images/icons/next.svg';
import ArchitectureBG from '../../images/backgrounds/architecture_bg2.jpg';
import ConstructionBG from '../../images/backgrounds/construction.jfif';
import ProjectPlanningBG from '../../images/backgrounds/project-planning.jpg';
import EstimationBG from '../../images/backgrounds/estimation.jpg';









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

    const totalCards = 4;

    const data=[
        {title:'Architecture Designs', url: ArchitectureBG, message:'Good architects are practical dreamers, balancing the visionary with the realistic.'},
        {title:'Construction', url: ConstructionBG, message:'specializes in the design and construction of industrial, commercial and hotel projects. It has a nationwide network to provide a structure of efficiency and quality service.'},
        {title:'Interior Designs', url:'https://super.homelane.com/products/07dec18/homeinteriors/2.jpg',message:'Our interior designs for your bedroom ensure that you have a serene, beautiful hide-out to escape'},     
        {title:'Project Planning', url: ProjectPlanningBG, message:'Offering complete consultancy and designing services from conception to go-live for all types of projects including Architectural, Structural, Refrigeration, Thermal Insulation, Electrical and other allied consultancy services; all under one roof, in order to achieve the benefits of integrated project design and economy in implementation.'},
        {title:'Estimation', url: EstimationBG,message:'We estimate and takeoff your entire project for you based on local pricing. We perform construction estimating services for busy contractors.'},
        
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