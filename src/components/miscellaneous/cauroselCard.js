import React from 'react';
import {useTransition, animated, config} from 'react-spring';



const CauroselCard = (props)=>{

    


    return(
        <React.Fragment>

                    <article class="card">
                        <div class="card-img" style={{backgroundImage: `url(${props.url})`}}></div>
                        <div class="card-info">
                            <h3 class="card-title">{props.title}</h3>
                            <span class="card-message">{props.message}</span>
                        </div>
                        <div className="card-shrink">
                            <button>
                            <i class="fas fa-external-link-alt"></i>
                            </button>
                        </div>
                    </article>
          
        </React.Fragment>
        
    );
}


export default CauroselCard;