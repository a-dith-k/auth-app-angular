import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

export const adminGuard: CanActivateFn = (route, state) => {

  const token=localStorage.getItem('token');
  const router=inject(Router);
  
  if(!token){
    router.navigateByUrl("").then();
    return false;
  }

  if(isUserAdmin(token))
    return true;
  else{
    router.navigateByUrl("").then();
    return false;
  }
 
};

function isUserAdmin(token:string){
  const helper:JwtHelperService
                    =new JwtHelperService();
  try{
    const decodedToken=helper.decodeToken(token);
    return decodedToken.admin;
  }catch(err){
    console.error("decodeTokenError:",err)
    return false;
  }

}
