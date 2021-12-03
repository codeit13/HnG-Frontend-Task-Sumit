import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light mx-3 bg-light navbar-nav" id="mainNav">
            <div className="container-fluid">
                <a className="navbar-brand js-scroll-trigger" href="#page-top"><h1>{props.navbar.brand}</h1></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#features">Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#features">Cosmetics</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#features">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#features">Signup</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
