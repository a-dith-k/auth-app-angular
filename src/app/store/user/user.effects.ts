import { AuthService } from './../../services/auth/auth.service';
import { Injectable } from "@angular/core";
import { Actions } from "@ngrx/effects";

@Injectable()
export class UserEffects{

	constructor(private action$:Actions,private authService:AuthService){

	}


}