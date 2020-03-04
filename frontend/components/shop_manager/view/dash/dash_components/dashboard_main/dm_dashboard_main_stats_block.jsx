import React from 'react';

const DMDMStatsBlock = (props) => {
  return(
    <div className="SM-dashboard-main-stats-block-container">
      <p>{props.name}</p>
      <p>{props.num}</p>
      <p>--% YoY</p>
      <p>Just Now</p>
    </div>
  );
}

export default DMDMStatsBlock;