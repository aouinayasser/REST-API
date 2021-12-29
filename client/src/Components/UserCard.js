import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/actions/contactActions'
import EditContact from './EditContact';



function UserCard ({contact}) {
  const dispatch=useDispatch()
    return (
            <div>
            <div>
              <div>
                <div className="card" style={{width: '18rem'}}>
                  <img src="https://thumbs.dreamstime.com/b/vecteur-d-ic%C3%B4ne-de-profil-avatar-par-d%C3%A9faut-image-sociale-utilisateur-m%C3%A9dias-social-182145777.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{contact.name}</h5>
                    <h6 className="card-title">{contact.email}</h6>
                    <h6 className="card-title">{contact.age}</h6>
                    {/* <Button>
                        <Link to={`/profile/${contact._id}`} >
                            Profile
                        </Link>
                    </Button> */}
                    <EditContact contact={contact} />
                    <Button onClick={()=>dispatch(deleteContact(contact._id))} >Delete</Button>
                  </div>
                </div>
              </div>    
              
                </div>
              </div>
    )
}

export default UserCard