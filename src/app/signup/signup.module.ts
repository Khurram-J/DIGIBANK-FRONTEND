import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { signupComponent } from './signup.component';


@NgModule({
  imports: [
    // CommonModule,
    // RouterModule.forChild(AdminLayoutRoutes),
    // FormsModule,
    // ReactiveFormsModule,
    // MatButtonModule,
    // MatRippleModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatSelectModule,
    // MatTooltipModule,

  ],

  declarations: [
    signupComponent,
  ],
  exports: [
    signupComponent,
  ]
})

export class SignupModule { }
