import React from 'react';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <NavLink className="navbar-brand" to={''}>News Blog</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04"
                    aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/articles/" className="nav-link">News</NavLink>
                    </li>
                </ul>
                <ul className="navbar-nav d-flex align-items-center">
                    <li className="nav-item">
                        {props.isAuth ? <NavLink to={`/profile/${props.username}`} className="nav-link">{props.username}</NavLink> : <NavLink to="/login" className="nav-link">Login</NavLink>}
                    </li>
                    <li className="nav-item">
                        {props.isAuth ? <NavLink to="/logout" className="nav-link">Logout</NavLink> : <NavLink to="/register" className="nav-link">Register</NavLink>}
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;