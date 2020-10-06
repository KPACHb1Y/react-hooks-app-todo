import React from 'react';
import {NavLink} from "react-router-dom";

export const Navbar = () => (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='navbar-brand'>
            Note App
        </div>

        <ul className="nav">
            <li className="nav-item">
                <NavLink
                    className="nav-link"
                    to={'/'}
                    exact
                >
                    Main
                </NavLink>
            </li>
            <li className="nav-link">
                <NavLink
                    className="nav-item"
                    to={'/about'}
                >
                    Info
                </NavLink>
            </li>
        </ul>
    </nav>
)