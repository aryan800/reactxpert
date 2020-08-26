import React, { Component } from 'react'
import Header from './header';
import Footer from './footer';
import baseUrl from '../../baseUrl';
import axios from "axios";

export class home extends Component {

    constructor(props) {
        super(props);
        this.state={
            homeData:'',
        }
    
        axios.get(baseUrl + `homepage.php`)
            .then(res => {
                this.setState({ homeData: res.data, loading:false });
            })

    }

    render() {
        return (
            <div>
                <Header />
                
                <div className="slider">
                    <div id="demo" className="carousel slide" data-ride="carousel">

                    <ul className="carousel-indicators">
                        <li data-target="#demo" data-slide-to="0" className="active"></li>
                        <li data-target="#demo" data-slide-to="1"></li>
                        <li data-target="#demo" data-slide-to="2"></li>
                        <li data-target="#demo" data-slide-to="3"></li>
                    </ul>

                    {/*  The slideshow  */}
                    <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={baseUrl+"includes/images/banner1.jpg"} alt="Image1" className="img-responsive"/>
                    </div>
                    <div className="carousel-item">
                        <img src={baseUrl+"includes/images/banner2.jpg"} alt="image2" className="img-responsive"/>
                    </div>
                    <div className="carousel-item">
                        <img src={baseUrl+"includes/images/banner3.png"} alt="image3 " className="img-responsive"/>
                    </div>
                    <div className="carousel-item">
                        <img src={baseUrl+"includes/images/banner4.jpg"} alt="image4" className="img-responsive"/>
                    </div>
                    </div>

                    </div>
                </div>

                <div className="container-fluid border">

                <div className="row">

                    <div className="col-md-4" style={{background:"#ff9933",color:"white" }}>

                        <h4 className="text-center text-white p-1" style={{background:"#ff9933"}}>Our Achievements</h4>

                        <ul>
                            {this.state.homeData.blog1 ? <li>{this.state.homeData.blog1}</li> : ''}
                            {this.state.homeData.blog2 ? <li>{this.state.homeData.blog2}</li> : ''}
                            {this.state.homeData.blog3 ? <li>{this.state.homeData.blog3}</li> : ''}
                            {this.state.homeData.blog4 ? <li>{this.state.homeData.blog4}</li> : ''}
                            {this.state.homeData.blog5 ? <li>{this.state.homeData.blog5}</li> : ''}
                            {this.state.homeData.blog6 ? <li>{this.state.homeData.blog6}</li> : ''}
                            {this.state.homeData.blog7 ? <li>{this.state.homeData.blog7}</li> : ''}
                            {this.state.homeData.blog8 ? <li>{this.state.homeData.blog8}</li> : ''}
                        </ul>

                    </div>

                    <div className="col-md-4" >

                        <h4 className="text-center text-dark p-1" >Latest Results</h4>
                        <ul>
                        {this.state.homeData.rlink1 ? <a href={this.state.homeData.rlink1} target="_blank" rel="noopener noreferrer"><li>{this.state.homeData.result1} </li></a> : '' }

                        {this.state.homeData.rlink2 ? <a href={this.state.homeData.rlink2} target="_blank" rel="noopener noreferrer"><li>{this.state.homeData.result2} </li></a> : '' }

                        {this.state.homeData.rlink3 ? <a href={this.state.homeData.rlink3} target="_blank" rel="noopener noreferrer"><li>{this.state.homeData.result3} </li></a> : '' }

                        {this.state.homeData.rlink4 ? <a href={this.state.homeData.rlink4} target="_blank" rel="noopener noreferrer"><li>{this.state.homeData.result4} </li></a> : '' }

                        {this.state.homeData.rlink5 ? <a href={this.state.homeData.rlink5} target="_blank" rel="noopener noreferrer"><li>{this.state.homeData.result5} </li></a> : '' }

                        {this.state.homeData.rlink6 ? <a href={this.state.homeData.rlink6} target="_blank" rel="noopener noreferrer"><li>{this.state.homeData.result6} </li></a> : '' }

                        {this.state.homeData.rlink7 ? <a href={this.state.homeData.rlink7} target="_blank" rel="noopener noreferrer"><li>{this.state.homeData.result7} </li></a> : '' }

                        {this.state.homeData.rlink8 ? <a href={this.state.homeData.rlink8} target="_blank" rel="noopener noreferrer"><li>{this.state.homeData.result8} </li></a> : '' }

                        </ul>

                    </div>

                    <div className="col-md-4" style={{background:"#128807",color:"white" }}>

                        <h4 className="text-center text-white p-1">Latest Jobs</h4>
                        <ul>

                        {this.state.homeData.jlink1 ? <a className="text-white" href={this.state.homeData.jlink1} target="_blank" rel="noopener noreferrer"><li>{this.state.homeData.job1} </li></a> : '' }

                        {this.state.homeData.jlink2 ? <a className="text-white" href={this.state.homeData.jlink2} target="_blank" rel="noopener noreferrer"><li>{this.state.homeData.job2} </li></a> : '' }

                        {this.state.homeData.jlink3 ? <a className="text-white" href={this.state.homeData.jlink3} target="_blank" rel="noopener noreferrer"><li>{this.state.homeData.job3} </li></a> : '' }

                        {this.state.homeData.jlink4 ? <a className="text-white" href={this.state.homeData.jlink4} target="_blank" rel="noopener noreferrer"><li>{this.state.homeData.job4} </li></a> : '' }

                        {this.state.homeData.jlink5 ? <a className="text-white" href={this.state.homeData.jlink5} target="_blank" rel="noopener noreferrer"><li>{this.state.homeData.job5} </li></a> : '' }

                        {this.state.homeData.jlink6 ? <a className="text-white" href={this.state.homeData.jlink6} target="_blank" rel="noopener noreferrer"><li>{this.state.homeData.job6} </li></a> : '' }

                        {this.state.homeData.jlink7 ? <a className="text-white" href={this.state.homeData.jlink7} target="_blank" rel="noopener noreferrer"><li>{this.state.homeData.job7} </li></a> : '' }

                        {this.state.homeData.jlink8 ? <a className="text-white" href={this.state.homeData.jlink8} target="_blank" rel="noopener noreferrer"><li>{this.state.homeData.job8} </li></a> : '' }


                        </ul>
                    </div>


                </div>
                </div>

                <br></br>

                <div className="container">
                            <div className="row blog">
                                <div className="col-md-12">

                                    <div id="blogCarousel" className="carousel slide" data-ride="carousel">

                                        <ol className="carousel-indicators">
                                            <li data-target="#blogCarousel" data-slide-to="0" className="active"></li>
                                            <li data-target="#blogCarousel" data-slide-to="1"></li>
                                            <li data-target="#blogCarousel" data-slide-to="2"></li>
                                        </ol>
                                        <h3 className="text-center">Students Testimonials</h3>
                                        
                                        <div className="carousel-inner">

                                            <div className="carousel-item active">
                                                <div className="row">
                                                    <div className="col-md-12 bg-white">
                                <i className="fa fa-quote-left" style={{fontSize:"20px",color:"#ff9933"}}></i>
                                            <p style={{float:"left",fontSize:"18px", textAlign:"center"}}>
                    <b>"The commitment and focus of XCC were excellent and surpassed our expectations."</b><br/>
                    Learning With Xpert Computer Classes is an fantastic Experience For Me.
                    The commitment and focus on meeting our expectations by XCC were excellent.<br/>Thank You XCC
                    </p>
                    <p style={{float:"right",fontSize:"18px"}}><i>- Akash, Agra, India</i><br/> <i className="fa fa-quote-right"style={{fontSize:"20px",color:"#ff9933", float:"right" }}></i></p>
                                                    </div>
                                                </div>
                                          
                                            </div>
                                          

                                            <div className="carousel-item">
                                                <div className="row">
                                                    <div className="col-md-12 bg-white">
                                                    <i className="fa fa-quote-left" style={{fontSize:"20px",color:"google"}}></i>                                    
                                                    <p style={{float:"left",fontSize:"18px", textAlign:"center"}}>
                    <b>"It was really good experience of learning CCCA from X-pert Computer Classes."</b><br/>
                    The approach & teaching techniques are quite impressive. The trainers are good & interactive & have a wonderful knowledge of the technology. The labs are also very good.<br/>Thank You XCC
                    </p>
                    
                    <p style={{float:"right",fontSize:"18px"}}><i>- Arun Kumar, Agra, India</i><br/> <i className="fa fa-quote-right"style={{fontSize:"20px",color:"google",float:"right"}}></i></p>
                                                    </div>
                                                </div>
                                    
                                            </div>
                                    

                                            <div className="carousel-item">
                                                <div className="row">
                                                    <div className="col-md-12 bg-white">
                                <i className="fa fa-quote-left" style={{fontSize:"20px",color:"green"}}></i>                                    
                                                    <p style={{float:"left",fontSize:"18px",textAlign:"center"}}>
                    <b>"“It was very excellent experience as a trainee at X-pert Computer Classes."</b><br/>
                    I have done DCA, the trainers gave me full time & attention as a result my concepts of computer are very clear. They helped me a lot in solving my queries.<br/>Thank You XCC
                    </p>
                    <p style={{float:"right",fontSize:"18px"}}><i>- Tanu Bansal, Agra, India</i><br/> <i className="fa fa-quote-right" style={{fontSize:"20px",color:"green",float:"right"}}></i></p>
                                                    </div>
                                                </div>

                                            </div>



                                        </div>

                                    </div>


                                </div>
                            </div>
                </div>


                <br/><br/>

            <div className="container-fluid">
                <div className="row text-center">
                    
                    <div className="col-md-3 col-6 counter-div">
                        <div className="counter">
                            <i className="fa fa-users fa-2x"></i>
                            <br/>
                            <span className="timer count-title count-number" data-to="5000"         data-speed="1500"></span>
                            <span style={{fontSize:"35px"}}>+</span>
                            <p className="count-text ">Students</p>
                        </div>
                    </div>

                    <div className="col-md-3 col-6 counter-div">
                        <div className="counter">
                            <i className="fas fa-chalkboard-teacher fa-2x"></i>
                            <br/>
                            <span className="timer count-title count-number" data-to="50" data-speed="1500"></span>
                            <span style={{fontSize:"35px"}}>+</span>
                            <p className="count-text ">Courses</p>
                        </div>
                    </div>

                    <div className="col-md-3 col-6 counter-div">
                        <div className="counter">
                            <i className="fa fa-desktop fa-2x"></i>
                            <br/>
                            <span className="timer count-title count-number" data-to="200" data-speed="1500"></span>
                            <span style={{fontSize:"35px"}}>+</span>
                            <p className="count-text ">Projects Completed</p>
                        </div>
                    </div>

                    <div className="col-md-3 col-6 counter-div">
                        <div className="counter">
                            <i className="far fa-handshake fa-2x"></i>
                            <br/>
                            <span className="timer count-title count-number" data-to="150" data-speed="1500"></span>
                            <span style={{fontSize:"35px"}}>+</span>
                            <p className="count-text ">Coffee With Clients</p>
                        </div>
                    </div>

                </div>
                <br/>
            </div>

            <Footer />
                
            </div>
        )
    }
}
