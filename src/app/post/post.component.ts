import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '@app/_services';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { 
  }

  ngOnInit(){ 
    this.postForm = this.formBuilder.group({
      url: ['',Validators.required],
      categories: ['',Validators.required]
    });}
  // convenience getter for easy access to form fields
  get f() {return this.postForm.controls};

  onSubmit() {
    this.submitted = true; 

    //stop here if form is invalid
    if (this.postForm.invalid) {
      return;
    }
    
    // this.authenticationService.login(`"${userParams.toString()}"`)
    //     .pipe(first())
    //     .subscribe(
    //       data => {
    //         this.router.navigate([this.returnUrl])
    //       },
    //       error => {
    //         this.error = error;
    //         this.loading = false;
    //       }
    //     )
  }

}
