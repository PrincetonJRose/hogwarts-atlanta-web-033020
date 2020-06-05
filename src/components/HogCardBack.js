import React from 'react'

const HogCardBack =( props )=> {

    let hog = props.hog

    function isGreasy () {
        if (hog.greased)
            return "Yup!!!"
        else return "Nope!"
    }

    return (
        <div className='pigTile ui card'>
            <p>
                Name: {hog.name}
            </p>
            <p>
                Speciality: {hog.specialty}
            </p>
            <p>
                Greasy?: { isGreasy() }
            </p>
            <p>
                Weight: {hog.weight}
            </p>
            <p>
                Highest Medal Achieved: {hog['highest medal achieved']}
            </p>
        </div>
    )
}

export default HogCardBack