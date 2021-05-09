import React, {useState, useEffect} from 'react';
import {debounce} from '../../components/utils/debounce';
import {useSpring, animated} from 'react-spring';
import { useMediaQuery } from 'react-responsive';




const Article = (props)=>{


    const [offsetY, setOffsetY] = useState(0);
    const isMobile = useMediaQuery({ query: '(max-width: 900px)' });


    useEffect(()=>{
        const handleScroll = () => setOffsetY(window.scrollY);
        window.addEventListener('scroll', debounce(handleScroll));

        return () => {
            window.removeEventListener('scroll', debounce(handleScroll));
        };
    }, [])

    const [{ animationOffsetY }, setAnimationOffsetY] = useSpring(() => ({
        animationOffsetY: 0
      }));

    setAnimationOffsetY({ animationOffsetY: offsetY });

    const articleImageOffset = animationOffsetY.interpolate(o => `translateY(-${o*0.06}px)`);
    const articleImageOffsetMobile = animationOffsetY.interpolate(o => `translateY(-${o*0.04}px)`);


    const content = (leftSide)=>{
        return(
            <animated.div className={leftSide?"article-content-left":"article-content"}>
                <div className="article-intro">{props.data.intro}</div>
                <div className="article-title">{props.data.title}</div>
                <div className="article-description">{props.data.description}</div>
                <button className="article-button">View</button>
            </animated.div>
        )
    }

    const image = ()=>{

        if(isMobile){
            return(
                <div className="article-image-container">
                    
                    <animated.div style={{backgroundImage:`url(${props.data.imageUrl})`, transform: articleImageOffsetMobile}} className="article-image"></animated.div>
                      
                </div>
            )
        }
        
        else{

            return(
                <div className="article-image-container">
                    
                    <animated.div style={{backgroundImage:`url(${props.data.imageUrl})`, transform: articleImageOffset}} className="article-image"></animated.div>
                      
                </div>
            )
        }
        
    }

    const handleContentSide=()=>{

        if(props.contentSideLeft && !isMobile){
            return(
               <React.Fragment>
                   {content(true)}
                   {image()}
               </React.Fragment>
            )
        }
        else{
            return(
                <React.Fragment>
                    {image()}
                    {content(false)}
                </React.Fragment>
             )
        }
    }


    return(
        <div className="article-main">
            {handleContentSide()}
        </div>
    )
}

export default Article;
