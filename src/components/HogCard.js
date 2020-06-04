import React from 'react'

const HogCard =( props )=> {

    let hog = props.hog
    let imgUrl = hog.name.toLowerCase().split(' ').join('_')
    let hogPic = require(`../hog-imgs/${imgUrl}.jpg`)

    return (
        <div
            className='ui eight wide column'
            onClick = { ()=> props.showHogInfo(hog) }
        >
            {
                props.clickedHogs.includes(hog.name) ?
                    <div className='description pigTile card'>
                        <p>Specialty: {hog.specialty}</p>
                        <p>Weight: {hog.weight}</p>
                        <p>Highest Medal Achieved: {hog['highest medal achieved']}</p>
                        <p>Greased Up: { hog.greased ? 'Yup':'Nope'}</p>
                    </div>
                :
                    <div className='pigTile card'>
                        <img src={hogPic} alt=''/>
                        <p>{hog.name}</p>
                    </div>
            }
        </div>
    )
}

export default HogCard