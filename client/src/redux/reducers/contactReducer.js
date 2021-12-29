import { GETALLCONTACTS, GETCONTACT } from "../types";




const initialState={
    contacts:[],
    contact:{}
}


const contactReducer=(state=initialState,action)=>{
    switch (action.type) {
        case GETALLCONTACTS:
            return {
                ...state,contacts:action.payload.contacts
            }
        case GETCONTACT:
            return {
                ...state,contact:action.payload
            }
        default:
            return state
    }
}

export default contactReducer