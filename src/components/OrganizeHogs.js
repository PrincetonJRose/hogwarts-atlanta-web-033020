import React from 'react'

const OrganizeHogs =( props )=> {

    return (
        <div>
            Greasy? <input type='checkbox' onChange={(e)=> props.changeFilter()} name='filter'/>
            {`   `}
            Sort By:
            <select onChange={(e)=> props.changeSort(e.target.value)}>
                <option>None</option>
                <option>Name</option>
                <option>Weight</option>
            </select>
        </div>
    )
}

export default OrganizeHogs