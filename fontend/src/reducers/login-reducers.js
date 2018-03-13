export const LOGIN='login';
export const LOGOUT='logout';
const initialState={
    user:localStorage.getItem('authUser') || null
};

export default (state=initialState,action)=>{
    switch (action.type){
        case 'USER_LOGIN':
            debugger;
            return {...state,user:action.res};
        case 'USER_LOGOUT':
            return {...state,user:action.res};
        default:
            return state;
    }
}