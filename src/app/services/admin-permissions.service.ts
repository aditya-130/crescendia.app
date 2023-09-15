import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map, of, switchMap } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminPermissionsService implements CanActivate {

  constructor(private authService: AuthenticationService, private userService: UserService) { }

  public canActivate() {
    return this.authService.getAuthState().pipe(
      switchMap(user => user? this.userService.getUser(user.uid).valueChanges() : of(null)),
      map( appUser => appUser?.isAdmin ? appUser.isAdmin : false)
    )
  }
}

