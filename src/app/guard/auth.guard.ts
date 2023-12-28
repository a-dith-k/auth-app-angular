import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../services/auth.service";


export const authGuard: CanActivateFn = (route, state) => {
  const authService=inject(AuthService);
  const router=inject(Router);
  let requestedUsername=route.paramMap.get('username')
  console.log(requestedUsername);
  if(authService.isLoggedIn()){
    if(authService.currentUser()===requestedUsername)
      return true;

    router.navigateByUrl('**').then()
  }
  else{
    router.navigateByUrl('sign-in').then()
  }
  return false;
};
