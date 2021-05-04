import axios from 'axios';
import Cookies from 'js-cookie';
import {SET_MODALS_HIDDEN} from '../utils/modals/modals.actions'


const backendUrl = "http://www.backend.ayushman.com:5000";

export const ADD_PRODUCT = (product)=>{

    return({
        type: "ADD_PRODUCT",
        payload:{
            product: product,
        },
    });
}

export const CLEAR_PRODUCTS = (product)=>{

  return({
      type: "CLEAR_PRODUCTS",
  });
}

export const POST_PRODUCT = (data)=>async (dispatch)=>{
    console.log("Data", data)
    let productFormData = new FormData();
    productFormData.append('name', data.productname);
    productFormData.append('price', data.price);
    productFormData.append('stock', data.stock);
    productFormData.append('images', data.images);
    productFormData.append('description', data.description);
    productFormData.append('category', data.category);

    axios({
        method: 'post',
        url: `${backendUrl}/product`,
        data: productFormData,
        withCredentials: true,
        headers:{
          'Access-Control-Allow-Credentials': true,
          'Access-Control-Allow-Methods': '*',
          //Requires CSRF Header to access jwt_requireed protected routes
          'X-CSRF-TOKEN-ACCESS': Cookies.get('csrf_access_token'),
         
        }
  
      }).then(
          res=>{
            console.log(res.data)
            dispatch(SET_MODALS_HIDDEN())
          })
        .catch(err=>{
            dispatch(SET_MODALS_HIDDEN())
            console.log("err", err)})
}

export const GET_PRODUCTS = ()=>(dispatch)=>{

    axios({
        method: 'get',
        url: `${backendUrl}/product`,
        withCredentials: true,
        headers:{
          'Access-Control-Allow-Credentials': true,
          'Access-Control-Allow-Methods': '*',
        }
      })
        .then(res=>{
            if(res.status===200){
              const data=res.data;
              dispatch(CLEAR_PRODUCTS());
              for(const product in data){
                console.log('Product',data[product]);
                dispatch(ADD_PRODUCT(data[product]));
              }
                
              }
        })
        .catch(err=>{
            console.log(err)
        })

}