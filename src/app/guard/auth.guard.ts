import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../services/auth/auth.service";
import {HttpClient} from "@angular/common/http";


export const authGuard: CanActivateFn = (route, state) => {

  const authService=inject(AuthService);
  const router=inject(Router);
  const http:HttpClient=inject(HttpClient);

  http.get("http://localhost:8080/users/test",{headers:{Authorization:'Bearer '+localStorage.getItem('token') as string, 'content-Type': "application/json"}}).subscribe({
    next:res=>console.log({Authentication:true}),
    error:err=>{
      console.log({Authentication:false})
      localStorage.removeItem('token');
      router.navigateByUrl("").then()
    }
  })

  let requestedUsername=route.paramMap.get('username')

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
