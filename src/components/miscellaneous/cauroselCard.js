import React from 'react';


const CauroselCard = (props)=>{

    


    return(
        <React.Fragment>

                    <article className="card">
                        <div className="card-img" style={{backgroundImage: `url(${props.url})`}}></div>
                        <div className="card-info">
                            <h3 className="card-title">{props.title}</h3>
                            <span className="card-message">{props.message}</span>
                        </div>
                        <div className="card-shrink">
                            <button>
                            <i className="fas fa-external-link-alt"></i>
                            </button>
                        </div>
                    </article>
          
        </React.Fragment>
        
    );
}


export default CauroselCard;