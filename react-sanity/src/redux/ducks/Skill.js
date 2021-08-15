import client from '../../client';
import { returnErrors } from './Error';

const GETT_ALLSKILLS = '/react-sanity/skill/GETT_ALLSKILLS';


const initialState = {
    skills: []
};

export default function Skill(state = initialState, action){
    switch (action.type) {
        case GETT_ALLSKILLS:
            return {
                skills: action.payload
            }    
            
        default:
            return state;
    }
};

export const getAllSkills = () => dispatch => {
    client.fetch(`*[_type == 'skill']{
        _id,
        name,
        pourcentage
    }`).then(res => 
        dispatch({
            type: GETT_ALLSKILLS,
            payload: res
        })
    ).catch(err => dispatch(returnErrors(err)))
}