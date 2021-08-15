import client from '../../client';
import { returnErrors } from './Error';

const GET_ALLSERVICES = '/react-sanity/services/GET_ALLSERVICES';


const initialState = {
    services: []
};

export default function Service(state = initialState, action){
    switch (action.type) {
        case GET_ALLSERVICES:
            return {
                services: action.payload
            }    
            
        default:
            return state;
    }
};

export const getAllservices = () => dispatch => {
    client.fetch(`*[_type == 'service']{
        _id,
        name,
        icon,
        description
    }`).then(res => 
        dispatch({
            type: GET_ALLSERVICES,
            payload: res
        })
    ).catch(err => dispatch(returnErrors(err)))
}