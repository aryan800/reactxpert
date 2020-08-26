import React, { Component } from 'react';
import baseUrl from '../../baseUrl';
import { Link } from 'react-router-dom';

export default class Sidebar extends Component {

    render() {
        return (

        <nav id="sidebar">
            <div className="sidebar-header">
                <h3>Admin Panel</h3>
                <strong>AP</strong>
            </div>

            <ul className="list-unstyled components">
                <li className="active">
                    <a href="dashboard" data-toggle="collapse" aria-expanded="false">
                        <i className="fas fa-home"></i>
                        Dashboard
                    </a>
                </li>

                <li>                    
                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                        <i className="fas fa-copy"></i>
                        Student Management
                    </a>
                    <ul className="collapse list-unstyled" id="pageSubmenu">
                        <li>
                            <a href="#">New Registration</a>
                        </li>
                        <li>
                            <a href="#">Registration Records</a>
                        </li>
                        <li>
                            <a href="#">Certificate Records</a>
                        </li>
                        <li>
                            <a href="#">Fees Management</a>
                        </li>
                    </ul>
                </li>

                <li>
                    <a href="#"><i className="fas fa-briefcase"></i>
                        Blog
                    </a>
                </li>

                <li>
                    <a href="#">
                        <i className="fas fa-image"></i>
                        Gallery
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fas fa-question"></i>
                        Change Password
                    </a>
                </li>

            </ul>

        </nav>

        )
    }
}
