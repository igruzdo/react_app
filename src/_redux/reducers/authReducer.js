import { loginError, loginLoading, loginSuccess, registerError, registerLoading, registerSuccess, logoutLoading, logoutSuccess, logoutError } from "../actions/actionsCreators/authActions";
import * as authActions from "../actions/actionsTypes/authActionsTypes";
import { auth } from "../../services/firebase";



const initialState = {
    user: null,
    loading: false,
    error: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case authActions.LOADING_REGISTER: 
        case authActions.LOADING_LOGIN: 
        case authActions.LOADING_LOGOUT:
            return {
                ...state,
                loading: true
            }

        case authActions.ERROR_REGISTER:
        case authActions.ERROR_LOGIN:
        case authActions.ERROR_LOGOUT: 
            return {
                ...state,
                loading: false,
                error: true
            }
        case authActions.SUCCESS_REGISTER:
        case authActions.SUCCESS_LOGIN: 
            return {
                ...state,
                loading: false,
                error: false,
                user: action.payload
            }
        case authActions.SUCCESS_LOGOUT: 
            return {
                ...state,
                loading: false,
                error: false,
                user: null
            }
        default: 
            return state
    }
}

export const registerInitiate = (email, password, name) => {
    return (dispatch) => {
        dispatch(registerLoading());
        auth.createUserWithEmailAndPassword(email, password)
        .then(({user}) => {
            user.updateProfile({
                displayName: name
            })
            dispatch(registerSuccess(user))
        })
        .catch((e) => dispatch(registerError()))
    }
}

export const loginInitiate = (email, password) => {
    return (dispatch) => {
        dispatch(loginLoading());
        auth.signInWithEmailAndPassword(email, password)
        .then(({user}) => {
            dispatch(loginSuccess(user))

        })
        .catch((e) => dispatch(loginError()))
    }
}

export const logoutInitiate = () => {
    return (dispatch) => {
        dispatch(logoutLoading());
        auth.signOut()
        .then(() => {
            dispatch(logoutSuccess())
        })
        .catch((e) => dispatch(logoutError()))
    }
}