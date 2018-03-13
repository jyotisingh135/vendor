import {LOGIN, LOGOUT} from './../reducers/login-reducers'
import axios from 'axios';
export const login = (info) => {
    return((dispatch)=>{
        return fetch('http://localhost:3001/api/login').then((response)=>{
            debugger;
            response.json((res)=>{
                console.log(res);
                dispatch({type:'USER_LOGIN',res})
            })
        })
    })
};

export const logout = () => {
    return (dispatch) => {
        localStorage.setItem('authUser', null);
        dispatch({
            type: LOGOUT
        });
    }
};
