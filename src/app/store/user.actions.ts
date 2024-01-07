import { createAction, props } from "@ngrx/store";

export const login=createAction('[LoginPage] login',props<{username:string}>());
export const logout=createAction('[LogOut] logout');
