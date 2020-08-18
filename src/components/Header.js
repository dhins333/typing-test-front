import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div className='header-container'>
            <div className='header'>
                <Link to='/' style = {{textDecoration:'none'}}><h3 className='header-text'>Typing Test</h3></Link>
            </div>
        </div>
    )
}

export default Header;