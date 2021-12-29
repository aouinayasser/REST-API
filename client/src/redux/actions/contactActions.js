
import axios from 'axios';
import { GETALLCONTACTS, GETCONTACT } from '../types';





export const getAllContacts=()=>async(dispatch)=>{
    try {
        const contacts=await axios.get('/api/contacts')
        dispatch({type:GETALLCONTACTS,payload:contacts.data})
    } catch (error) {
        
    }
}

export const addContact=(formData)=>async(dispatch)=>{
    try {
        await axios.post('/api/contacts',formData)
        dispatch(getAllContacts())
    } catch (error) {
        console.log(error)
    }
}

export const deleteContact=(id)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/contacts/${id}`)
        dispatch(getAllContacts())
    } catch (error) {
        console.log(error)
    }
}

export const editContact=(id,formData)=>async(dispatch)=>{
    try {
        await axios.put(`/api/contacts/${id}`,formData)
        dispatch(getAllContacts())
    } catch (error) {
        console.log(error)
    }
}

export const getOneContact=(id)=>async(dispatch)=>{
    try {
        const res=await axios.get(`/api/contacts/${id}`)
        dispatch({type:GETCONTACT,payload:res.data})
        console.log(res.data)
    } catch (error) {
        console.log(error)
    }
}