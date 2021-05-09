import React, {useEffect, useState, useRef} from 'react';
import {useSpring, animated} from 'react-spring';
import {debounce} from './debounce';





const ParallaxContainer = (props)=>{

    const [offsetY, setOffsetY] = useState(0);

    let parallaxContainerRef = useRef();


    useEffect(()=>{
        const handleScroll = () => setOffsetY(parallaxContainerRef.current.getBoundingClientRect().y);
        window.addEventListener('scroll', debounce(handleScroll));

        return () => {
            window.removeEventListener('scroll', debounce(handleScroll));
        };
    }, [offsetY])


    const [{ animationOffsetY }, setAnimationOffsetY] = useSpring(() => ({
        animationOffsetY: 0
      }));

    setAnimationOffsetY({ animationOffsetY: offsetY });

      const PrallaxContentTranslateY = animationOffsetY.interpolate(o => `translateY(${o*0.6}px)`);
      const PrallaxBGTranslateY = animationOffsetY.interpolate(o => `translateY(${o*0.3}px)`);


    return(
        <div ref={parallaxContainerRef} className="parallax-container-main">
            <animated.div style={{backgroundImage:`url(${props.bgUrl})`, transform: offsetY<0 && PrallaxBGTranslateY}} className="parallax-container-bg"></animated.div>
            <animated.div style={{transform: offsetY<0 && PrallaxContentTranslateY}} className="parallax-container-content">{props.children}</animated.div>
        </div>
    );
}


export default ParallaxContainer;