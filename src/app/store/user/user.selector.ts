import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserModel } from "../models/user.model";

const getUserState=createFeatureSelector<UserModel>('user')

const isUserLoggedIn=createSelector(getUserState,(state)=>{
	return state.loggedIn;
})

const isUserAdmin=createSelector(getUserState,(state)=>{
	return state.isAdmin;
})