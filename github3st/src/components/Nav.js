import React from 'react';
import { NavLink } from 'react-router-dom';
// import Combination from "@/page/Battle/Combination";

export default class Nav extends React.Component {
  // click = () => {
  //   window.location.hash='#/battle'
  // }

  render() {
    return (
      <div>
        <ul style={{ display: 'flex', justifyContent: 'left', listStyle: 'none' ,marginTop:'30px'}}>
          <li key="popular" style={{ margin: '0 10px' }}>
            <NavLink exact activeStyle={{ color: '#1890ff' }} to="/popular">popular</NavLink>
          </li>
          <li key="battle">
            <NavLink exact to="/battle">battle</NavLink>
          </li>
        </ul>
      </div>

    );
  }
}
