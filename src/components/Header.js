import React from 'react';
import { Link,NavLink } from 'react-router-dom';

const Header = () => {
    return(
        <div className='header-container'>
            <div className='header'>
                <div className='header-title'>
                    <Link to='/' style = {{textDecoration:'none'}}><h3 className='header-text'>Typing Test</h3></Link>
                </div>
                <div className='header-navs'>
                    <NavLink to='/' className='header-nav-text'>Home</NavLink>
                    <NavLink to='/practice' className='header-nav-text'>Practice</NavLink>
                </div>                
            </div>
        </div>
    )
}

export default Header;