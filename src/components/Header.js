import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFoundPage = () => (
    <header>
        <NavLink to="/" exact activeClassName="active-link">Home</NavLink> |
        <NavLink to="/create" activeClassName="active-link">Create</NavLink> |
        <NavLink to="/update" activeClassName="active-link">Update</NavLink> |
        <NavLink to="/help" activeClassName="active-link">Help</NavLink> |
        <NavLink to="/about" activeClassName="active-link">About</NavLink>
    </header>
);

export default NotFoundPage;