import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getAllContacts } from "../redux/actions/contactActions";
import UserCard from './UserCard';



export default function UsersList() {
    const contacts=useSelector(state => state.contactReducer.contacts)
    // const [users, setUsers] = useState([])
    const dispatch=useDispatch()
    useEffect(() => {
        dispatch(getAllContacts())
    },[dispatch])

    return(
        <div>
            <div className="Cards">
                    {contacts.map((contact) => (
                        <UserCard contact={contact} key={contact._id} />
                    ))}
            </div>
        </div>
    )
};
