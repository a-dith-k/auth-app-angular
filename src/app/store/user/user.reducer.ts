import { createReducer, on } from "@ngrx/store";
import { login, logout, logiN} from "./user.actions";
import { userState } from "./user.state";

export const reducer=createReducer(
	true,
	on(login,(state)=>true),
	on(logout,(state)=>false)

);

const _userReducer=createReducer(userState,
	on(logiN,(state)=>{
		
		return {
			...state,isLoading:true,
		}
	}
	))

export function UserReducer(state:any,action:any){
		return _userReducer(state,action)
}