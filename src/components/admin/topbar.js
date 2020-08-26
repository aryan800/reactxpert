import React, { Component } from 'react';
import baseUrl from '../../baseUrl';
import { Link } from 'react-router-dom';

export default class Topbar extends Component {

    render() {
        return (
          <nav className="navbar navbar-expand-lg navbar-light navbar-row">
            <ul className="navbar-nav">
            <button type="button" id="sidebarCollapse" className="btn btn-info">
                  <i className="fas fa-align-left"></i>
                  <span>Toggle Sidebar</span>
              </button>
              <li className="nav-item">
                <a className="nav-link" href="#">Link 1</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link 2</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link 3</a>
              </li>
            </ul>
          </nav>

        )
    }
}
