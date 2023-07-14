import { useEffect, useState } from 'react';

import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {fetchUsersAction, addUserAction} from '../store/usersReducer'
import UserList from '../Components/UserList';
import Modal from '../Components/Modal';
import '../Styles/InputSearch.scss';
import '../Styles/Checkbox.scss';
import { useUsers } from '../hooks/useUsers';
import FilterSort from '../Components/FilterSort';

const Users = ({item}) => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users.users);    
       
    const [modal, setModal] = useState(false);
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState(false);
    const sortedUsers = useUsers(users, search, sort);
      
    const fetchUsers = async() => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');            
        dispatch(fetchUsersAction(response.data));
      } catch (error) {
        
      } 
    }  

    const addUser = (user) => {            
      let newUser = user;
      newUser.id = Date.now() * Math.random()
      dispatch(addUserAction(newUser))
    }
  
    useEffect(() => {
      if(users.length < 3 ){
        fetchUsers();
      }
    },[]);
  
    return (
      <div >
        <FilterSort 
          search={search}
          setSearch={setSearch}
          modal={modal}
          setModal={setModal}
          sort={sort}
          setSort={setSort}
        />
       
        <Modal 
          visible={modal} 
          setVisisble={setModal} 
          submit={addUser} 
        />          
        
        {
          sortedUsers.length ? 
            <UserList users={sortedUsers} />: 
              <h1>No users</h1>
        }
      </div>
    );
}

export default Users;