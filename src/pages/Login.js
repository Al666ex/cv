
import { useDispatch } from "react-redux";
import { loginAction } from "../store/authReducer";
import '../Styles/Login.scss';

const Login = () => {
    const dispatch = useDispatch()

    const login = (e) => {
      e.preventDefault();  
      dispatch(loginAction());
    }
    return(
        <div className="login" >
            <form onSubmit={login}>
                <input type='text' placeholder='...any name' required />
                <input type='password' placeholder='...any password' required />
                <div><button className='button'>Login</button></div>
            </form>
        </div>

    )
}

export default Login;