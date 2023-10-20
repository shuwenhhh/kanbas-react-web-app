import React from 'react';

function AccountIcon({ src, alt }) {
  return (
    <img src={process.env.PUBLIC_URL + '/images/Accounticon.png'} alt={alt} />
  );
}

export default AccountIcon;