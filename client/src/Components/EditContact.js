import {Button, FormControl, FormLabel, Modal} from 'react-bootstrap';
import {useEffect, useState } from 'react';
import { editContact, getOneContact } from '../redux/actions/contactActions';
import { useDispatch, useSelector } from 'react-redux';





export default function EditContact({contact}) {
    const [editedContact,setEditedContact]=useState({name:"",email:"",age:0})
    const dispatch=useDispatch();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const contactEdit = useSelector(state=>state.contactReducer.contact)
    
    const handleChange=(e)=>{
      setEditedContact({...editedContact,[e.target.name]:e.target.value})
    }

    useEffect(()=>{
      setEditedContact({name:contactEdit.name,email:contactEdit.email,age:contactEdit.age})
    },[contactEdit])
    return(
              <>
                <Button variant="primary" onClick={()=>{handleShow();dispatch(getOneContact(contact._id))}}>
                  Edit
                </Button>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Fill the form below !</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                      <FormLabel>Name</FormLabel>
                      <FormControl name="name" value={editedContact.name} placeholder="Enter the name..." onChange={handleChange} ></FormControl>
                      <FormLabel>Email</FormLabel>
                      <FormControl name="email" value={editedContact.email}  placeholder="Enter the email address..." onChange={handleChange} ></FormControl>
                      <FormLabel>Age</FormLabel>
                      <FormControl name="age" value={editedContact.age} placeholder="Enter your age..." onChange={handleChange} ></FormControl>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={()=>{dispatch(editContact(contactEdit._id,editedContact));handleClose()}}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </>
    )
};
