import {Routes, Route} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { publicRoutes, privteRoutes } from '../router';
import Home from '../pages/Home';
import Login from '../pages/Login';

const AppRouter = () => {
    const isAuth = useSelector(state => state.isAuth.isAuth);
    console.log(isAuth)    

    return (                     
                isAuth ?
                <Routes>
                    
                    {publicRoutes.map(route => 
                        <Route key={route.path} path={route.path} element={<route.component />} />
                    )}
                    <Route path="*" element={<Home />} />
                </Routes>
                :
                
                <Routes>
                    {privteRoutes.map(route =>                         
                        <Route key={route.path} path={route.path} element={<route.component />} />
                    )}
                    <Route path="*" element={<Login />} />
                </Routes>
    )
}




export default AppRouter;

