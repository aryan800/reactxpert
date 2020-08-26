import React, { Component } from 'react';
import Sidebar from './sidebar';
import Topbar from './topbar';
import baseUrl from '../../baseUrl';
import axios from "axios";

export class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            mobile:''
        }

        axios.get(baseUrl+'dashboard.php')
            .then(res => {
                console.log(res);
            })

    }

    render() {
        return (
            <div className="container-fluid">
                {/* <div className="row"> */}
                    <div className="wrapper">

                        <Sidebar />
                        
                        <div id="content">
                        <Topbar />
                        



                        </div>

                    </div>
                {/* </div> */}
            </div>
        );
    }
}
