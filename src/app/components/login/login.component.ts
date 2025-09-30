import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { login } from '../../store/user/user.actions';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';
import { logout } from '../../store/user/user.actions';
import { clearTasks } from '../../store/tasks/tasks.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    loginForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store ,   private router: Router ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onLogin() {
    const user: User = { email: this.loginForm.value.email };
    this.store.dispatch(login({ user }));
    this.router.navigate(['/tasks']);
    
  }
  logoutUser() {
  this.store.dispatch(logout());       
  this.store.dispatch(clearTasks()); 
}

}
