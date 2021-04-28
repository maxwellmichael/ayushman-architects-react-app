import React, {Component} from 'react';
import {connect} from 'react-redux';
import {GET_PRODUCTS} from '../redux/products/products.actions';
import {ADD_PRODUCT_FORM_MODAL, SET_MODALS_HIDDEN} from '../redux/utils/modals/modals.actions';
import Modals from '../components/utils/modals';
import ProductCard from '../components/utils/productCard';




class Products extends Component{



    componentDidMount(){
        this.props.dispatch(GET_PRODUCTS())
    }

    componentWillUnmount(){
    }
    

    render(){
        return(
            <React.Fragment>
                <Modals show={!this.props.modals.hidden} onHide={()=>this.props.dispatch(SET_MODALS_HIDDEN())} />

                <div>
                    <button onClick={()=>this.props.dispatch(ADD_PRODUCT_FORM_MODAL())}>Add Product</button>
                </div>
                {this.props.products.map(product=>{
                    console.log(product);
                    return(
                        <ProductCard product={product} />
                    )
                })}

            </React.Fragment>
        );
    }
}

const mapStateToProps=(state)=>{
    return({
            products: state.products,
            modals: state.modals,
    })
}
export default connect(mapStateToProps)(Products);