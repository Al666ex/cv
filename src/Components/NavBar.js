import {Link} from 'react-router-dom'
//import classes from './NavBar.moduce.css';

import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../store/authReducer';
import '../Styles/NavBar.scss';
import '../Styles/Button.scss'

const NavBar = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.isAuth.isAuth)

    const logout = (e) => {
        e.preventDefault();
        dispatch(logoutAction());
    }

    return(
        <nav >
            <div className='logo'>
                <img src={require('../images/pic_logo.jpg')} alt='logo'  />                                
                {isAuth && <button className='button' onClick={logout}>Logout</button>}
            </div>            
            <div>
                <Link to={'/'}>Home</Link> | {" "}
                <Link className='flash' to={'/users'}>Users</Link>
            </div>
        </nav>
    )
}



export default NavBar;