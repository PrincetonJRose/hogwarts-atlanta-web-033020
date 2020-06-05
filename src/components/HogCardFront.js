import React from 'react'

const HogCardFront =( props )=> {

    let hog = props.hog
    let name = hog.name.toLowerCase().split(' ').join('_')
    let hogPic = require(`../hog-imgs/${name}.jpg`)
    
    return (
        <div className='pigTile ui card'>
            <img src={hogPic} alt=''/>
            <p>{hog.name}</p>
        </div>
    )
}

export default HogCardFront