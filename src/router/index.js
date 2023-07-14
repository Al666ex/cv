import Home from "../pages/Home";
import Login from "../pages/Login";
import UserId from "../pages/UserId";
import Users from "../pages/Users";

export const publicRoutes = [
    {path : '/', component : Home},
    {path : '/users', component : Users},
    {path : '/users/:id', component : UserId}
]

export const privteRoutes = [
    {path : '/login', component : Login}
]