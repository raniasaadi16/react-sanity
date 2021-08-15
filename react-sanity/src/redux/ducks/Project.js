import client from '../../client';
import { returnErrors } from './Error';

const GET_ALLPROJECTS = '/react-sanity/project/GET_ALLPROJECTS';
const GET_PROJECT = '/react-sanity/project/GET_PROJECT';


const initialState = {
    projects: [],
    singleProject : []
};

export default function Project(state = initialState, action){
    switch (action.type) {
        case GET_ALLPROJECTS:
            return {
                ...state,
                projects: action.payload
            }    
        case GET_PROJECT:
            return {
                ...state,
                singleProject: action.payload
            }

        default:
            return state;
    }
};

export const getAllprojects = (num) => dispatch => {
    client.fetch(`*[_type == 'project'][${num}]{
        _id,
        title,
        categories->{title},
        url,
        body,
        gallery[]{
            asset->{
                url
            }
        },
        mainImage{
            asset->{
                url
            }
        }
    }`).then(res => 
        dispatch({
            type: GET_ALLPROJECTS,
            payload: res
        })
    ).catch(err => dispatch(returnErrors(err)))
};

export const getProject = (id) => dispatch => {
    client.fetch(`*[_type == 'project' && _id == "${id}"]{
        _id,
        title,
        categories->{title},
        url,
        body,
        gallery[]{
            asset->{
                url
            }
        },
        mainImage{
            asset->{
                url
            }
        }
    }`).then(res => 
        dispatch({
            type: GET_PROJECT,
            payload: res
        })
    ).catch(err => dispatch(returnErrors(err)))
}