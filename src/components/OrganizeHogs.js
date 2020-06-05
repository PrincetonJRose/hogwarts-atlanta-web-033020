import React from 'react'

const OrganizeHogs =( props )=> {
    
    return (
        <div>
            <p>
                Greasy boyz only?
                <input
                    type='checkbox'
                    onChange={ (e)=> props.changeFilter(e) }
                />
                {' '}
                Sort By:
                <select onChange={ (e)=> props.changeSort(e.target.value) }>
                    <option>
                        None
                    </option>
                    <option>
                        Name
                    </option>
                    <option>
                        Weight
                    </option>
                </select>
            </p>
        </div>
    )
}

export default OrganizeHogs