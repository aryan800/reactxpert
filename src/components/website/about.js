import React, { Component } from 'react'
import Header from './header'
import Footer from './footer';

export class About extends Component {
    render() {
        return (
            <div>

                <Header />

                <div className="container-fluid">
                    <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 col-12 mt-4" style={{boxShadow:"0px 0px 5px #999"}}><br/>
                    <h5 style={{color:"#666"}}>Dear Students,</h5><br/>
                <p style={{textAlign: "justify",color:"#555"}}>It’s my privilege to welcome you to <strong>X-PERT COMPUTER CLASSES</strong>,The Institute is located in the city of Taj, which has been glorified by various historical monuments. <strong>X-PERT COMPUTER CLASSES</strong> started its Journey since 1999, today it is evident from our performance that it is the Institute of National repute &amp; one of the best in Agra region. It would not have been possible without the constant support and contribution of Management &amp; Society.</p>
                <p style={{textAlign:"justify",color:"#555"}}>In today’s world, education is the most important investment for a successful future. In my opinion education is the vehicle of knowledge, values and success. It gives us the facility to distinguish between right or wrong, a belief in morality and the importance of hard work.</p>
                <p style={{textAlign: "justify",color:"#555"}}>The mission of <strong>X-PERT COMPUTER CLASSES</strong> is to excel in the field of technology where young students emerge as successful professionals. With dramatic developments in the field of Science &amp; Technology in the recent past it has become extreme important for all of us to strive hard to keep pace with the changing scenario. The key to our success depends on the shoulders of our dedicated staff. We need to work hard to maintain excellence. I strongly believe, like me you would also love to enjoy the proud privilege of <strong>becoming a part of this Institute.</strong></p>
                <br/>
                <p style={{textAlign:"justify",color:"#555"}}>With Best Wishes,<strong><br/>
                Mr.Nitin Agarwal<br />
                Director </strong></p>
                </div>
                <br/>
                

                <div className="col-md-2"></div>
                    </div><br/><br/>
                </div>   



                <Footer />

            </div>
        )
    }
}
