// import {Card} from 'react-bootstrap';
// import axios from "axios"
// import { useEffect, useState } from "react"
// import { useParams } from 'react-router';
// import { Spinner } from "react-bootstrap";


// export default function Profile() {
//     const [user, setUser] = useState()
//     const [loading, setLoading] = useState(true)
//     const { userId } = useParams()
//     // useEffect(() => {
//     //     axios
//     //     .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
//     //     .then(resp => setUser(resp.data))
//     //     .then (() => 
//     //     setTimeout(() => {
//     //         setLoading(false)
//     //     }, 3000))
//     //     .catch((err) => console.log(err))
//     // },[userId])


//     return (
//         <>
//         {loading ? (
//             <>
            
//                 <Spinner style={{ marginTop  :"300px", marginLeft:"150px" }} animation="grow" variant="primary" />
//                 <Spinner style={{ marginTop  :"300px", marginLeft:"150px" }} animation="grow" variant="secondary" />
//                 <Spinner style={{ marginTop  :"300px", marginLeft:"150px" }} animation="grow" variant="success" />
//                 <Spinner style={{ marginTop  :"300px", marginLeft:"150px" }} animation="grow" variant="danger" />
//                 <Spinner style={{ marginTop  :"300px", marginLeft:"150px" }} animation="grow" variant="warning" />
//                 <Spinner style={{ marginTop  :"300px", marginLeft:"150px" }} animation="grow" variant="info" />
//                 <Spinner style={{ marginTop  :"300px", marginLeft:"150px" }} animation="grow" variant="dark" />
//             </>
//         )
//        : (
//            <>
//             <div>
//                 <Card style={{ marginTop :"100px", marginLeft: "30%" , borderRadius:".75rem", width : "30rem"}}>
//                     <Card.Body>
//                         <h1>{user.name}</h1>
//                         <h1>{user.email}</h1>
//                         <h4>{user.address.street},{user.address.suite},{user.address.city}</h4>
//                     </Card.Body>
//                 </Card>
//             </div>
//            </>
//        )
//     }
//       </>
//     )
// };
