import { useMemo } from "react"

export const useUsers = (users, search, sort) => {
    const filterUsers = useMemo(() => {
        if(search === ''){
            if(sort){
              return [...users].sort((a,b) => a.name.localeCompare(b.name))
            }
            return users
          }
          if(sort === true){
            return [...users].filter(item => item.name.toLowerCase().includes(search)).sort((a,b) => a.name.localeCompare(b.name));
          }
          return [...users].filter(item => item.name.toLowerCase().includes(search)) 
    },[users, search, sort]); 
    return filterUsers;
}