import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
    return (
        <div>
            <Link id='heroes-link' to="/heroes">Heroes</Link>
            <Link id='villains-link' to="/villains">Villains</Link>
        </div>
    );
}

export default Nav;