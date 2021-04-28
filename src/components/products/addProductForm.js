import React from 'react';
import {useForm} from 'react-hook-form';
import {connect} from 'react-redux';
import {POST_PRODUCT} from '../../redux/products/products.actions';


function AddProductForm(props){

    const { handleSubmit, register, errors } = useForm();
    const onSubmit = (formValues) => {
        console.log('Form Values', formValues);

        let newValues = {...formValues}
        props.dispatch(POST_PRODUCT(newValues))
        
    };

    return(
        <React.Fragment>

        <form className="add-item-form" onSubmit={handleSubmit(onSubmit)}>

            <input className="add-item-form-input" placeholder="Product Name"
                name="productname"
                ref={register({
                required: "Required",
                pattern: {
                    message: "Invalid Name"
                }
                })}
            />
            {errors.name && errors.name.message}

            <input
                className="add-item-form-input"
                placeholder="Price"
                name="price"
                ref={register({
                required: "Required",
                pattern: {
                    value: /\$?(?!0.00)(([0-9]{1,3},([0-9]{3},)*)[0-9]{3}|[0-9]{1,3})(\.[0-9]{2})?$/,
                    message: "Invalid Price",
                }
                })}
            />
            {errors.price && errors.price.message}

            <input
                className="add-item-form-input"
                placeholder="Stock"
                name="stock"
                ref={register({
                required: "Required",
                })}
            />
            {errors.stock && errors.stock.message}

            <input
                className="add-item-form-input"
                placeholder="Any Specific Information...."
                name="description"
                ref={register}
            />
            {errors.description && errors.description.message}

            <input
                className="add-item-form-input"
                placeholder="The Link of The Product Image"
                name="images"
                ref={register}
            />
            {errors.images && errors.images.message}

            <select className="add-item-form-input" name="category" ref={register({
                required: "Required",
                })}>
                <option name="Table">Table</option>
                <option name="Chair">Chair</option>
                <option name="Stool">Stool</option>
                <option name="Bed">Bed</option>
                <option name="Cupboard">Cupboard</option>
                <option name="Door">Door</option>
            </select>
            {errors.category && errors.category.message}
            

            <button className="add-item-form-submit" type="submit">Submit</button>
        </form>
        </React.Fragment>
    );
}

const mapStateToProps = (state)=>{

    return{
        products: state.products,
    }
}

export default connect(mapStateToProps)(AddProductForm);