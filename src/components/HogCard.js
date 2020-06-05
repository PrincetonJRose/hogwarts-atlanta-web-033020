import React from 'react'
import HogCardFront from './HogCardFront'
import HogCardBack from './HogCardBack'

const HogCard =( props )=> {

    let hog = props.hog

    function displayHogCard () {
        return !props.clickedHogsIds.includes(hog.id) ?
            <HogCardFront
                hog={hog}
            />
            :
            <HogCardBack
                hog={hog}
            />
    }

    return (
        <div
            className='ui eight wide column'
            onClick={()=> props.flipHogCard(hog)}
        >
            { displayHogCard() }
        </div>
    )
}

export default HogCard