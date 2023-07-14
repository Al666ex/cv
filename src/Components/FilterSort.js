import React from 'react'

const FilterSort = ({search,setSearch,modal, setModal,sort,setSort}) => {
    const onSort = () => {
        setSort(!sort)
    }
    return (
        <div className='filter-sort'>
            <button className='button' onClick={() => setModal(true)}>Add user</button>
            <div style={{display : 'inline-block'}} className='checkbox-sort'>
                <input 
                    id="checkbox" 
                    onChange={onSort}                
                    type='checkbox' 
                /> 
                <label htmlFor="checkbox">Sorting</label>
            </div>
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value.toLowerCase())} 
                className='input-search' 
                type='text' 
                placeholder='...search by name' 
                autoFocus 
            />          

        </div>     
    )
}

export default FilterSort;