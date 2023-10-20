import React from 'react';

function DashBoardIcon({ src, alt }) {
  return (
    <img src={process.env.PUBLIC_URL + '/images/Dashboardicon.png'} alt={alt} />
  );
}

export default DashBoardIcon;