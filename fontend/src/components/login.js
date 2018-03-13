import React from 'react';
import {login,logout} from './../actionMethod/actions';
import {bindActionCreators} from 'redux';
import './componentLogin.css';
import { connect} from 'react-redux';

class Login extends React.Component{
    constructor(){
        super();
        this.state={
            userValues:{
                username:'',
                password:''
            }
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({a:'a'});
    }
    loginHandler=()=>{
        debugger;
        this.props.login(this.state.userValues);
    };
    changeHandler=(e)=>{
        const {userValues}=this.state;
        userValues[e.target.name]=e.target.value;
        this.setState({userValues});
    };

    render() {
        return (
            <div className="container">
                <div className="card card-container">
                    <img id="profile-img" className="profile-img-card"
                         src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"/>
                    <form className="form-signin">
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address"
                                name="username" value={this.state.userValues.username} onChange={this.changeHandler} required />
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password"
                               name="password" value={this.state.userValues.password} onChange={this.changeHandler} required />
                        <div id="remember" className="checkbox">
                            <label>
                                <input type="checkbox" value="remember-me"/> Remember me
                            </label>
                        </div>
                        <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit" onClick={this.loginHandler}>Sign in</button>
                    </form>
                    <a href="#" className="forgot-password">
                        Forgot the password?
                    </a>
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{return{
    user:state.login.user
}};

const mapDispatchToProps=(dispatch)=>bindActionCreators({login,logout},dispatch);
export default connect(mapStateToProps,mapDispatchToProps)(Login);