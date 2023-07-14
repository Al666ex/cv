import { useDispatch } from "react-redux";
import { removeUserAction } from "../store/usersReducer";
import User from "./User";

const UserList = ({users}) => {    
    const dispatch = useDispatch();   

    return(        
            users.map(item => 
                <User 
                    key={item.id} 
                    item={item} 
                    removeUser={() => dispatch(removeUserAction(item.id))} 
                />   
            )         
    )
}

export default UserList; 