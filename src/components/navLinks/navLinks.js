import React from 'react';
import {Link} from 'react-router-dom';

const NavLink = (props) => (
    <li className="nav-item"> <Link className="nav-link" to={props.link}>{props.text}</Link></li>
);

export default NavLink;
