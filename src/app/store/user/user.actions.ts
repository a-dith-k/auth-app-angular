import { createAction, props } from "@ngrx/store";

const LOGIN='[Auth] Login';
const LOGIN_SUCCESS='[Auth] Login Success';
const LOGIN_FAILED='[Auth] Login Failed';
const LOGOUT='[Auth] Logout';

export const login=createAction('[LoginPage] login',props<{username:string}>());
export const logout=createAction('[LogOut] logout');

export const logiN=createAction(LOGIN,props<{username:string,password:string}>());
export const loginSuccess=createAction(LOGIN_SUCCESS,props<{token:string}>());
export const loginFailure=createAction(LOGIN_FAILED,props<{error:string}>());
export const logouT=createAction(LOGOUT);
