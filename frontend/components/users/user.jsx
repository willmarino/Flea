import React from 'react';

const User = (props) => (
  <li>
    <p>{props.user.username}</p>
    <p>{props.user.description}</p>
  </li>
)

export default User;


