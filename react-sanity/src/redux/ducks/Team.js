import client from '../../client';
import { returnErrors } from './Error';

const GET_ALLTEAM = '/react-sanity/team/GET_ALLTEAM';


const initialState = {
    team: []
};

export default function Team(state = initialState, action){
    switch (action.type) {
        case GET_ALLTEAM:
            return {
                team: action.payload
            }    
            
        default:
            return state;
    }
};

export const getAllTeam = () => dispatch => {
    client.fetch(`*[_type == 'team']{
        _id,
        bio,
        name,
        image{
            asset->{
                url
            }
        }
    }`).then(res => 
        dispatch({
            type: GET_ALLTEAM,
            payload: res
        })
    ).catch(err => dispatch(returnErrors(err)))
}