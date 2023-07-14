
const initialState = {isAuth : localStorage.getItem('isAuth')}
const LOGIN = "LIGIN";
const LOGOUT = "LOGOUT";
const ISAUTH = "ISAUTH";

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN :
            localStorage.setItem('isAuth','true');
            return {...state, isAuth : localStorage.getItem('isAuth')}
        case LOGOUT : 
            localStorage.removeItem('isAuth');
            return {...state, isAuth : localStorage.getItem('isAuth')}
        case ISAUTH :             
            return{...state.isAuth}
        default :
            return state
    }
}

export default authReducer;

export const loginAction = () => ({type : LOGIN});
export const logoutAction = () => ({type : LOGOUT});
export const isAuthAction = () => ({type : ISAUTH});