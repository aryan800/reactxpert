import React, { Component } from 'react'
import axios from 'axios';
import baseUrl from '../../baseUrl';
import Swal from 'sweetalert2';

export default class Login extends Component {

    constructor(props){
        super(props);
        this.state={
            FormGroup: {
                uname: '',
                pwd:''
            }
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleInputChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        const UserInput = this.state.FormGroup;
        UserInput[name] = value;

        this.setState({
            FormGroup:UserInput
        });

    }

    handleSubmit(event){
        event.preventDefault();

        axios({method:"post",
            url:baseUrl+"AdminLogin.php",
            headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},
            data: this.state.FormGroup,
        })
        .then(res => {
            console.log(res);
            if(res.data.status===1) {
            Swal.fire( res.data.msg,
                        '',
                        'success'
                    );
//            window.location.href="/dashboard";
            }
            else {
                Swal.fire( res.data.msg,'',
                    'error'
                );
            }
        })
        .catch(function (error) {
            console.log(error);
        })

    }

    
    

    render() {
        return (
            <div className="modal" id="myModal">
            <div className="modal-dialog">
            <div className="modal-content">
            
                {/* <!-- Modal Header --> */}
                <div className="modal-header">

                <h4 className="modal-title">Login Now</h4>
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>
                
                {/* <!-- Modal body --> */}
                <form onSubmit={this.handleSubmit}>
                <div className="modal-body">

                <div className="form-group">
                    <label className="text-uppercase">Username</label>
                    <input type="text" value={this.state.FormGroup.uname} onChange={this.handleInputChange}  name="uname" className="form-control" placeholder="Enter username.." required />
                </div>
                <div className="form-group">
                    <label className="text-uppercase">Password</label>
                    <input type="password" value={this.state.FormGroup.pwd} onChange={this.handleInputChange} name="pwd" className="form-control" placeholder="Enter Password" required />
                </div>

                </div>
                
                {/* <!-- Modal footer --> */}
                <div className="modal-footer">
                <input type="submit" className="btn btn-info" value="Sign In" />
                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                </div>
                </form>
            </div>
            </div>
        </div>
        )
    }
}