import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import baseUrl from '../../baseUrl';

export class Services extends Component {
    render() {
        return (
            <div>
                <Header />                

                <div className="container-fluid">
                    <div className="row">
                    <div className="col-md-2"></div>
                        <div className="col-md-8 col-12">
                        <img src={baseUrl+"includes/images/Services.jpg"} className="img-responsive" style={{width:"100%"}} alt="Services" />
                    </div>
                    <div className="col-md-2"></div>
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}