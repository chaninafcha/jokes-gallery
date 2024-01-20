// login.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isAuticated:boolean=false;

  constructor(private fb: FormBuilder,private router: Router) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl ('', Validators.required),
      password: new FormControl('', Validators.required)
    }) ;
 
  }
  login()
  {
    if(this.loginForm?.valid)
    {
      this.router.navigate(['/gallery']);
    }
    
  }

 
 
}
