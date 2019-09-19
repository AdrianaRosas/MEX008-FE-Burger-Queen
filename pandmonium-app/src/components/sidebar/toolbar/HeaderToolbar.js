import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

import '../SideDrawer/DrawerToggleButton';
import './HeaderToolbar.css';


const header = props => (
  <hearder className="toolbar">
    <nav className="toolbar__navigation">
      <div> 
        <DrawerToggleButton click={props.drawerClickHandler}/>

      </div>
      {/* <div className="toolbar__logo"><a href="/">LOGO</a></div> */}
      <div className="spacer"/>
      <div className="toolbar_navigation-items">
        <ul>
          <li><a href="/">Productos</a></li>
          <li><a href="/">Usuarios</a></li>
        </ul>
      </div>
    </nav>
  </hearder>
);

export default header;