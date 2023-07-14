const FETCH_USERS = 'FETCH_USERS';
const ADD_USER = 'ADD_USER';
const REMOVE_USER = 'REMOVE_USER';

const initialState = {
    users : [
        {id : Date.now() * Math.random(), name : 'Iaroslav'},
        {id : Date.now() * Math.random(), name : 'Iana'}
    ]
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
       case FETCH_USERS : 
        return {...state, users : [...state.users, ...action.payload]}

       case ADD_USER : 
        return {...state, users : [...state.users, action.payload]}

       case REMOVE_USER :
        let users = state.users.filter(item => item.id !== action.payload)
        return {...state, users}

    default :
        return state;
    }
}

export default userReducer;

export const fetchUsersAction = (payload) => ({type : FETCH_USERS, payload})
export const addUserAction = (payload) => ({type : ADD_USER, payload})
export const removeUserAction = (payload) => ({type : REMOVE_USER, payload})