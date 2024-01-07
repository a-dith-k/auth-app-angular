import { createReducer, on } from "@ngrx/store";
import { login, logout} from "./user.actions";
import { state } from "@angular/animations";

export const reducer=createReducer(
	false,
	on(login,(state)=>true),
	on(logout,state=>false)

);