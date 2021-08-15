import client from '../../client';
import { returnErrors } from './Error';

const GET_ALLREVIEWS = '/react-sanity/review/GET_ALLREVIEWS';


const initialState = {
    reviews: []
};

export default function Review(state = initialState, action){
    switch (action.type) {
        case GET_ALLREVIEWS:
            return {
                reviews: action.payload
            }    
            
        default:
            return state;
    }
};

export const getAllReviews = (num) => dispatch => {
    client.fetch(`*[_type == 'review'][${num}]{
        _id,
        content,
        client,
        clientJob,
        rating,
        clientImage{
            asset->{
                url
            }
        }
    }`).then(res => 
        dispatch({
            type: GET_ALLREVIEWS,
            payload: res
        })
    ).catch(err => dispatch(returnErrors(err)))
}