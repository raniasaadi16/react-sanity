import client from '../../client';
import { returnErrors } from './Error';

const GET_ALLBLOGS = '/react-sanity/blog/GET_ALLBLOGS';
const GET_BLOG = '/react-sanity/blog/GET_BLOG';


const initialState = {
    blogs: [],
    singleBlog: []
};

export default function Blog(state = initialState, action){
    switch (action.type) {
        case GET_ALLBLOGS:
            return {
                ...state,
                blogs: action.payload
            }
        case GET_BLOG:
            return {
                ...state,
                singleBlog: action.payload
            }    
            
        default:
            return state;
    }
};

export const getAllblogs = (num) => dispatch => {
    client.fetch(`*[_type == 'post'][${num}]{
        _id,
        title,
        team->{
            name
        },
        publishedAt,
        body,
        mainImage{
            asset->{
                url
            }
        }
    }`).then(res => 
        dispatch({
            type: GET_ALLBLOGS,
            payload: res
        })
    ).catch(err => dispatch(returnErrors(err)))
};

export const getBlog = (id) => dispatch => {
    client.fetch(`*[_type == 'post' && _id == "${id}"]{
        _id,
        title,
        team->{
            name
        },
        publishedAt,
        body,
        mainImage{
            asset->{
                url
            }
        }
    }`).then(res => 
        dispatch({
            type: GET_BLOG,
            payload: res
        })
    ).catch(err => dispatch(returnErrors(err)))
}