import React from 'react';


const CauroselCard = (props)=>{

    


    return(
        <React.Fragment>

                    <article className="card">
                        <div className="card-img" style={{backgroundImage: `url(${props.url})`}}></div>
                        <div className="card-info">
                            <h3 className="card-title">{props.title}</h3>
                            <p className="card-message">{props.message}</p>
                        </div>
                        <div className="card-shrink">
                            <button>
                                View
                            </button>
                        </div>
                    </article>
          
        </React.Fragment>
        
    );
}


export default CauroselCard;