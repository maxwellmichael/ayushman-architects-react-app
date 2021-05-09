import React from 'react';
import { useMediaQuery } from 'react-responsive';




const Article = (props)=>{

    const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

    const content = (leftSide)=>{
        return(
            <div className={leftSide?"article-content-left":"article-content"}>
                <div className="article-intro">{props.data.intro}</div>
                <div className="article-title">{props.data.title}</div>
                <div className="article-description">{props.data.description}</div>
                <button className="article-button">View</button>
            </div>
        )
    }

    const image = ()=>{

        if(isMobile){
            return(
                <div className="article-image-container">
                    
                    <div style={{backgroundImage:`url(${props.data.imageUrl})`}} className="article-image"></div>
                      
                </div>
            )
        }
        
        else{

            return(
                <div className="article-image-container">
                    
                    <div style={{backgroundImage:`url(${props.data.imageUrl})`}} className="article-image"></div>
                      
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
