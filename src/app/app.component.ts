import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 constructor(private authService: AuthenticationService, private router: Router){
  authService.getAuthState().subscribe(user => {
    if(user){
      let returnUrl = localStorage.getItem('returnUrl');
      if(returnUrl){
        router.navigateByUrl(returnUrl);
      }
      else{
        router.navigate(['/']);
      }
    }
  })
 }
}
