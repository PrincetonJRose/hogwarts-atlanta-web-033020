import React from 'react'
import HogCard from './HogCard'

const HogContainer =(props)=> {

    function mapHogs() {
        return props.hogs.map(hog =>
        <HogCard
            hog = {hog}
            clickedHogs = {props.clickedHogs}
            showHogInfo = {props.showHogInfo}
        />)
    }

    return (
        <div className='ui grid container'>
            {mapHogs()}
        </div>
    )
}

export default HogContainer