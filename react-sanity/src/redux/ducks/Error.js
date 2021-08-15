const GET_ERRORS = '/react-sanity/error/GET_ERRORS';

const initialState = {
    msg: null
};

export default function Error(state = initialState, action){
    switch (action.type) {
        case GET_ERRORS:
            return {
                msg: action.payload.msg
            }
        default:
            return state;
    }
};

export const returnErrors = (msg)=>{
    return{
        type: GET_ERRORS,
        payload: {
            msg
        }
    }
};
