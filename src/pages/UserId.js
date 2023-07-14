import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
//import MyButton from "../components/UI/MyButton/MyButton";
import '../Styles/UserId.scss';
import { useSelector } from "react-redux";

const UserId = () => {
    const {id} = useParams()
    const navigte = useNavigate()
    const [user, setUser] = useState({});
    const users = useSelector(state => state.users.users); 
    
    const showUser = () => {
        let tempUser = users.find(item => item.id == id);
        setUser(tempUser);    
    }

    useEffect(() => {
        showUser();
    },[user])
    

//     const getUserById = async() => {
//         try {
// //            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
// //            setUser(response.data);
//               let tempUser = await users.find(item => item.id === id)
//               console.log(tempUser)
//               setUser(tempUser);
//         } catch (error) {
//             setUser({
//                 // name : 'Empty',
//                 // email : 'Empty',
//                 // phone : 'Empty'
//             })
//         }
//     }  
    
//     useEffect(() => {
//         getUserById();
//     },[])

    return(
        user ? 
        <div className="App userCard">
            <h3>Name: {user?.name}</h3>
            <div>Username: {user?.username}</div>            
            <div>Email: {user?.email}</div>            
            <div>Phone : {user?.phone}</div>
            <button className="button" onClick={() => navigte(-1)}>Back</button>
        </div> : <h1>There is no user</h1>   
    )
}


export default UserId;