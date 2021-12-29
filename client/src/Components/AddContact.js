import {Button, FormControl, FormLabel, Modal} from 'react-bootstrap';
import {useState } from 'react';
import { addContact } from '../redux/actions/contactActions';
import { useDispatch } from 'react-redux';





export default function AddContact() {
    const dispatch=useDispatch();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [contact,setContact] = useState({name:"",email:"",age:0})
    const handleChange=(e)=>{
      setContact({...contact,[e.target.name]:e.target.value})
    }
    const handleSubmit=()=>{
      dispatch(addContact(contact))
    }
    
    return(

              <>
                <Button variant="primary" onClick={handleShow}>
                  Add contact
                </Button>
          
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Fill the form below !</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                      <FormLabel>Name</FormLabel>
                      <FormControl name="name" placeholder="Enter the name..." onChange={handleChange} ></FormControl>
                      <FormLabel>Email</FormLabel>
                      <FormControl name="email" placeholder="Enter the email address..." onChange={handleChange} ></FormControl>
                      <FormLabel>Age</FormLabel>
                      <FormControl name="age" placeholder="Enter your age..." onChange={handleChange} ></FormControl>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={()=>{handleSubmit();handleClose()}}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </>
    )
};
