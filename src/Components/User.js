
import { useNavigate } from "react-router-dom";
import '../Styles/User.scss'

const User = ({item, removeUser}) => {
    const navigate = useNavigate();

    return(
        <div className='item' onClick={() => navigate(`/users/${item.id}`)}>
            <div>
                {item.name}
            </div>
            <span className="remove" onClick={(e) => {
                e.stopPropagation()
                removeUser(item.id)}
            }  ></span>

            
        </div>  
    )

}

export default User;