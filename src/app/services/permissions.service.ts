import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
//authguard
export class PermissionsService implements CanActivate {

  constructor(private authService: AuthenticationService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

   return this.authService.getAuthState().pipe(
      map(user => {
        if(user){
          return true;
        }
        this.router.navigate(['/login'])
        return false;
      })
    )
  }
}
