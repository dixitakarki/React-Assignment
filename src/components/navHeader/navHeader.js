import React from 'react';
import NavLink from '../navLinks/navLinks';
import logo from '../../assets/logo.svg';
class NavHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">  
            <ul className="navbar-nav mr-auto">
                <a className="navbar-brand" href="#">
                    <img src={logo} width="30" height="30" className="d-inline-block align-top" alt=""/>
                    iDreamCareer
                </a>
                <NavLink link="/home" text="Home"/>
                <NavLink link="/home" text="Products"/>
                <NavLink link="/home" text="about"/>
            </ul>
            <ul className="navbar-nav">
                <NavLink link="/home" text="Login"/>
                <NavLink link="/home" text="Register"/>                
                <NavLink link="/home" text="9130005759"/>
            </ul>
        </nav>
    );
  }
}

export default NavHeader;
