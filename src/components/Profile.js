import React from 'react';

export default function Profile(props) {
  return (
    <div className="pr" style={{ display: 'flex', justifyContent: 'left', padding :'50px' }}>
      <div>
        <h1>Hello Everyone</h1>
        <h2>{props.name}</h2>
        <hr />
      </div>
    </div>
  );
}
