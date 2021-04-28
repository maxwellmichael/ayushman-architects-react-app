import React, { Component } from 'react';




class ProductCard extends Component{



    render(){


        return(
            <React.Fragment>
                <div id="project-container">
                    <div id="left">
                        <div id="product">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/dre.png" alt="" />
                        </div>
                        <div id="overlay"></div>
                    </div>
                    <div id="right">
                        <h2>{this.props.product.name}</h2>
                        <p class="price">₹ {this.props.product.price}</p>
                        <p>{this.props.product.description}</p>
                        <ul>
                            <li>Clear highs and deep lows for premium sound quality</li>
                            <li>Rotating earcups to hear the sound around you</li>
                            <li>Durable housing and cushioned headband for long hours in the studio</li>
                            <li>Share what you're hearing through dual audio ports with DaisyChain™ connection</li>
                        </ul>
                        <button class="purchase">Proceed to checkout<i class="fa fa-arrow-right" aria-hidden="true"></i></button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


export default ProductCard;