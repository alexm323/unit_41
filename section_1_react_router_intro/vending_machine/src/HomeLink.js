import React from 'react';
import {BrowserRouter,NavLink} from 'react-router-dom';

const HomeLink = () => {
    return(
        <NavLink exact to="/">Back to Vendotron</NavLink>
    )
}

export default HomeLink;