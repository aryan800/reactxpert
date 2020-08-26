import React, { Component } from 'react';
import baseUrl from '../../baseUrl';
import { Link } from 'react-router-dom';

import Login from './login';

export default class Header extends Component {

    render() {
        return (
                <div>
                <div className="container-fluid">
                    <div className="row header-strip">

                        <div className="col-md-10">
                        <i className="fa fa-map-marker-alt"> Agra, India</i>
                        <i className="fa fa-mobile-alt"> +91-931 932 6000</i>
                        <i className="fas fa-envelope">
                            info@xpertcomputer.com</i>
                        </div>
                    
                        <div className="col-md-2 icons-div">
                        <span><i className="fab fa-facebook-f"></i></span>
                        <span><i className="fab fa-twitter"></i></span>
                        <span><i className="fab fa-google-plus-g"></i></span>
                        <span><i className="fab fa-linkedin-in"></i></span>
                        </div>

                    </div>
                    </div>

                    <nav className="navbar navbar-expand-lg navbar-light navbar-row">
                    <a className="navbar-brand" href="/">
                        <img src={baseUrl+"img/head.gif"} alt="Xpert" srcSet="" className="head-logo" />
                    <span className="head-text"> X-PERT Computer Classes</span>
                    </a>
                    {/* <a className="navbar-brand" href="index"><img src="includes/img/head.gif" alt="Xpert" srcSet="" className="head-logo" />
                    <span className="head-text"> X-PERT Computer Classes</span>
                    </a> */}
                    <span style={{color:"green",fontSize:"14px",marginTop:"50px",marginLeft:"-250px"}}>Where dreams come to true</span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">ABOUT US</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/courses" className="nav-link">COURSES</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/services" className="nav-link">SERVICES</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/gallery" className="nav-link">GALLERY</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/verification" className="nav-link btn btn-info text-white">VERIFICATION</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/admin_login" className="nav-link btn btn-warning text-white" data-toggle="modal" data-target="#myModal">LOGIN</Link>
                        </li>
                        </ul>
                    </div>
                    </nav>

                    {/* Login */}
                    <Login />


                </div>

        )
    }
}
