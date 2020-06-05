import React from "react";
import HogCard from './HogCard'

const HogContainer =( props )=>  {
    
  function mapHogs () {
    return props.hogs.map(hog =>
      <HogCard
        clickedHogsIds={props.clickedHogsIds}
        hog={hog}
        flipHogCard={props.flipHogCard}
      />
    )
  }

  // Higer Order Functions === Enumberables
  return (
    <div className='ui grid container'>
      {mapHogs()}    
    </div>
  );
}

export default HogContainer;
