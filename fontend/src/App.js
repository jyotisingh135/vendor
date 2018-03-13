import React, { Component } from 'react';
import './App.css';
import {BrowserRouter,Route,Redirect} from 'react-router-dom';
import { connect} from 'react-redux';
import Login from './components/login';
import Home from './components/home';
import Header from './components/header';
import Footer from './components/footer';

class App extends Component {
    render() {
        console.log('this.props.users ', this.props.users );
        debugger;
        const PrivateRoute=({component:Component,...rest})=>{
            return (
                <Route {...rest} render={(routeProps)=>(
                    this.props.users || this.props.users==='Success' ?
                        <div>
                            <Header />
                            <Component {...routeProps}/>
                            <Footer />
                        </div>

                        :<Redirect to="/login"/>)}/>

            )
        };

        const PublicRoute=({component:Component,...rest})=>{
            return (
                <Route {...rest} render={(routeProps)=>(
                    !this.props.users || this.props.users==='Fail' ?
                        <Component {...routeProps}/>:
                        <Redirect to="/"/>
                )}/>
            )
        };

        return (
            <BrowserRouter>
                <div className="App">
                    <PrivateRoute exact path="/" component={Home}/>
                    <PublicRoute exact path="/login" component={Login}/>
                </div>
            </BrowserRouter>
        );
    }
}
const mapStateToProps=(state)=>{return{
    users:state.login.user
}};

export default connect(mapStateToProps,null)(App);
