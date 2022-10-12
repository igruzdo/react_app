import * as authTypes from "../actionsTypes/authActionsTypes"

export const registerLoading = () => ({
    type: authTypes.LOADING_REGISTER
})

export const registerError = () => ({
    type: authTypes.ERROR_REGISTER
})

export const registerSuccess = (user) => ({
    type: authTypes.SUCCESS_REGISTER,
    payload: user
})

export const loginLoading = () => ({
    type: authTypes.LOADING_LOGIN
})

export const  loginError = () => ({
    type: authTypes.ERROR_LOGIN
})

export const  loginSuccess = (user) => ({
    type: authTypes.SUCCESS_LOGIN,
    payload: user
})

export const logoutLoading = () => ({
    type: authTypes.LOADING_LOGIN
})

export const  logoutError = () => ({
    type: authTypes.ERROR_LOGIN
})

export const  logoutSuccess = () => ({
    type: authTypes.SUCCESS_LOGIN,
})