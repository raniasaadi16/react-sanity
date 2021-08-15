import client from '../../client';
import { returnErrors } from './Error';

const GET_ALLCATEGORIES = '/react-sanity/category/GET_ALLCATEGORIES';


const initialState = {
    categories: []
};

export default function Category(state = initialState, action){
    switch (action.type) {
        case GET_ALLCATEGORIES:
            return {
                categories: action.payload
            }    
            
        default:
            return state;
    }
};

export const getAllcategories = () => dispatch => {
    client.fetch(`*[_type == 'category']{
        _id,
        title
    }`).then(res => 
        dispatch({
            type: GET_ALLCATEGORIES,
            payload: res
        })
    ).catch(err => dispatch(returnErrors(err)))
}