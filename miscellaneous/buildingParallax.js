import React, { useEffect, useRef, useState } from 'react';
import { animated, useSpring, config } from 'react-spring';
import { useMediaQuery } from 'react-responsive'
import {connect} from 'react-redux';

//Actions
import {SET_IMAGE_LOADED, SET_AEROPLANE_IMAGE_LOADED, SET_BUILDING1_IMAGE_LOADED, SET_BUILDING2_IMAGE_LOADED, SET_SKY_IMAGE_LOADED} from '../../redux/loadImages/buildingParallaxImages/buildingParallaxImages.actions';
import {SET_LOADER} from '../../redux/utils/loader/loader.actions';

import Sky from '../../images/building_parallax/sky.png';
import Building1 from '../../images/building_parallax/building1.png';
import Building2 from '../../images/building_parallax/building2.png';
import Aeroplane from '../../images/building_parallax/aeroplane.png';


const imageList = [Sky, Building1, Building2, Aeroplane];
    






const BuildingParallax = (props) => {

    
    const elementRef = useRef();
    const [planeInitialValue]= useState({x:0,y:200});
    const isMobile = useMediaQuery({ query: '(max-width: 900px)' })
    const [{ offset }, set] = useSpring(() => ({ offset: 0 }));
    const buildingStyle = useSpring(() => ({
        from: {
            transform: 'translateY(200px)',
        },
        to: {
            transform: 'translateY(-100px)',
        },
        config: config.wobbly,
        delay: 3000,
    }));

    const buildingsInitialValue = isMobile ? 1.5 : 1;

    useEffect(() => {
        // hides the Loader when all images are loaded
        /*if(props.images.allImagesLoaded && !props.loader.isHidden){
            props.dispatch(SET_LOADER({isHidden: true}))
        }*/
        
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      });



    const calc = o => `translateY(${planeInitialValue.y-(o/10)}px)`;
    const calcBuilding = o => `scale(${buildingsInitialValue+(o*0.0001)})`;

    const handleScroll = () => {
        const posY = elementRef.current.getBoundingClientRect().top;
        const offset = window.pageYOffset - posY;
        set({ offset });
    };

 

 

  return (
    
        
        <div  ref={elementRef} className="building-parallax" >
            <div className="image-container">
                <animated.img onLoad={()=>props.dispatch(SET_IMAGE_LOADED(SET_SKY_IMAGE_LOADED, true))} className="sky" src={imageList[0]} />
                <animated.img onLoad={()=>props.dispatch(SET_IMAGE_LOADED(SET_AEROPLANE_IMAGE_LOADED, true))} className="aeroplane" style={{transform: offset.interpolate(calc)}} src={imageList[3]}  />
                <animated.img onLoad={()=>{props.dispatch(SET_IMAGE_LOADED(SET_BUILDING1_IMAGE_LOADED, true))}} className="building1" style={{...buildingStyle[0], transform: offset.interpolate(calcBuilding)}}  src={imageList[1]} />
                <animated.img onLoad={()=>{props.dispatch(SET_IMAGE_LOADED(SET_BUILDING2_IMAGE_LOADED, true))}} className="building2" style={{...buildingStyle[0], transform: offset.interpolate(calcBuilding)}}  src={imageList[2]} />   
            </div>
        </div>

  )
}

const mapStateToProps=(state)=>({
    images: state.loadImages.buildingParallaxImages,
    loader: state.loader,
})

export default connect(mapStateToProps)(BuildingParallax);



