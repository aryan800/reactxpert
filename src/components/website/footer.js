import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="container-fluid">
            <div className="row footer-img">


                <div className="col-md-4 col-12 left-div">


                            <div className="card border-primary rounded-0">
                                <div className="card-header p-0">
                                    <div className="bg-info text-white text-center py-2">
                                        <h3><i className="fa fa-envelope"></i> Contact Us</h3>
                                        <p className="m-0">Send your message.</p>
                                    </div>
                                </div>
                                    <div className="card-body p-3">

                                        <div className="form-group">
                                            <div className="input-group mb-2">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">
                                                        <i className="fa fa-user text-info"></i>
                                                    </div>
                                                </div>
                                                <input type="text" className="form-control" id="name" name="name" placeholder="Your name" required />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group mb-2">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">
                                                        <i className="fa fa-envelope text-info"></i>
                                                    </div>
                                                </div>
                                                <input type="email" className="form-control" id="email" name="email" placeholder="example@gmail.com" required />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="input-group mb-2">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text"><i className="fa fa-edit text-info"></i></div>
                                                </div>
                                                <textarea className="form-control" placeholder="Message" rows="4" required></textarea>
                                            </div>
                                        </div>

                                        <div className="text-center">
                                            <input type="submit" value="Send" className="btn btn-info btn-block rounded-0 py-2" />
                                        </div>
                                    </div>

                                </div>

                </div>

                <div className="col-md-4 col-12 center-div">

                    <h4 className=" text-center">Contact Information</h4>
                    
                    <table>
                        <tbody>
                        <tr>
                            <td>
                            <i className="fa fa-envelope"></i>
                            </td>
                            <td> 
                            info@xpertcomputerclasses.com
                            </td>
                        </tr>

                        <tr>
                            <td>
                            <i className="fa fa-mobile-alt"></i>
                            </td>
                            <td>
                            +91- 931 932 6000    
                            </td>
                        </tr>

                        <tr>
                            <td>
                            <i className="fa fa-map-marker-alt"></i>
                            </td>
                            <td>
                            Kiraoli Market Road, Purani Galla Mandi,<br/> Kiraoli, Agra, Uttar Pradesh 283122<br/>India
                            </td>
                        </tr>
                        </tbody>
                    </table><br/><br/>

                    <div className="text-center">
                    <h4>Stay connected with us</h4>
                <span><i className="fab fa-facebook-f"></i></span>
                <span><i className="fab fa-twitter"></i></span>
                <span><i className="fab fa-google-plus-g"></i></span>
                <span><i className="fab fa-linkedin-in"></i></span>
                </div>


                </div>

                <div className="col-md-4 col-12 right-div">

                <div style={{overflow:"hidden",width:"100%"}}>
                <iframe title="Google Map" width="100%" height="390px" src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=Kiraoli%2C%20Agra+(xpertcomputerclasses)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed" frameBorder="0" scrolling="no"></iframe>
                </div>
            
                </div>

                    <div className="row footer-strip">
                    <div className="col-md-12 pt-2">
                        <p className="text-center">Copyright
                        &copy; X-pert Computer Classes. All Rights Reserved | Design and Developed by:
                        <span style={{color:"#fff"}}> ARUN KUMAR</span>
                        </p>
                    </div>
                    </div>

            </div>

        </div>

        )
    }
}
