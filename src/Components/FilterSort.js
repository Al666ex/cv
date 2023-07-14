import React from 'react'

const FilterSort = ({search,setSearch,modal, setModal,sort,setSort}) => {
    const onSort = () => {
        setSort(!sort)
    }
    return (
        <div>
            <button className='button' onClick={() => setModal(true)}>Add user</button>
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)} 
                className='input-search' 
                type='text' 
                placeholder='...search by name' 
                autoFocus 
            />          
            <span className='checkbox-sort'>
                <input 
                    id="checkbox" 
                    onChange={onSort}                
                    type='checkbox' 
                /> 
                <label htmlFor="checkbox">Sorting</label>
            </span>
        </div>     
    )
}

export default FilterSort;