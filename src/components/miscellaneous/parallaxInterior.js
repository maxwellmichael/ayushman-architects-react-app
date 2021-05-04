import React, {useEffect, useState} from 'react';
import {useSpring, animated} from 'react-spring';
import {debounce} from '../utils/debounce';
import InteriorBg from '../../images/backgrounds/interior_bg.jpg';





const ParallaxInterior = (props)=>{

    const [offsetY, setOffsetY] = useState(0);


    useEffect(()=>{
        const handleScroll = () => setOffsetY(window.scrollY);
        window.addEventListener('scroll', debounce(handleScroll));

        return () => {
            window.removeEventListener('scroll', debounce(handleScroll));
        };
    }, [debounce])


    const [{ animationOffsetY }, setAnimationOffsetY] = useSpring(() => ({
        animationOffsetY: 0
      }));

    setAnimationOffsetY({ animationOffsetY: offsetY });

      const parallaxContent1HeaddingOffset = animationOffsetY.interpolate(o => `translateY(-${o*0.5}px)`);

    return(
        <animated.div className="parallax-main">
            <animated.div  className="parallax-container">
                <animated.div style={{backgroundImage: `url(${InteriorBg})`}} className="parallax-content-img" >
                    <animated.div style={{transform: parallaxContent1HeaddingOffset}} className="parallax-heading">AYUSHMAN.COM</animated.div>
                    <animated.div style={{transform: parallaxContent1HeaddingOffset}} className="parallax-description">
                        Architecture Design - Interior Design - Product Design - Construction        
                    </animated.div>
                </animated.div>
            </animated.div>
        </animated.div>
    );
}


export default ParallaxInterior;