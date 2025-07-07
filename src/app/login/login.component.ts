import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   loginForm: FormGroup;
  errorMessage = '';

  constructor(private fb: FormBuilder, private http: HttpClient) { 

     this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }


  submitForm() {
  this.errorMessage = '';

  if (this.loginForm.valid) {
    this.http.post('http://localhost:3000/login', this.loginForm.value)
      .subscribe((res: any) => {
        if (res.success === false) {
          alert('sorry' + res.error); 
        } else {
          alert(' congratulation User created!');
          this.loginForm.reset();
        }
      }, (err) => {
        alert('⚠️ Server error occurred.');
      });
  }
}


}
