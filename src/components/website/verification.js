import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';

export class Verification extends Component {
    render() {
        return (
            <div>
                <Header />                

                <div className="container-fluid"><br/>
                <div className="row">
                <div className="col-md-2"></div>
                    <div className="col-md-8 col-12 pt-2 mt-4 mb-4 pb-4 border border-success rounded">
                <h2 className="text-center">Verify Your Certificate</h2>
                <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Registration No.</label>
                    <input type="text" className="form-control" name="rn" placeholder="Enter Registration Number" autoFocus required />
                    <small id="emailHelp" className="form-text text-muted" ></small>
                </div>
                <div className="form-group">
                    <label>Father's Name</label>
                    <input type="text" className="form-control" name="fn" placeholder="Enter Father's Name" required />
                </div>

                <button type="submit" className="btn btn-primary">Verify</button>
                </form>

                </div>

                <div className="col-md-2"></div>

                </div>

                </div>

                <Footer />
            </div>
        )
    }
}
