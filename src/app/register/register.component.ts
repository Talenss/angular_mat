import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

// Custom validator for password
function passwordValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value as string;

  if (!value) {
    return null;
  }

  const errors: ValidationErrors = {};

  // Must start with a letter
  if (!/^[a-zA-Z]/.test(value)) {
    errors['startsWithLetter'] = true;
  }

  // Only alphanumeric characters
  if (!/^[a-zA-Z0-9]+$/.test(value)) {
    errors['onlyAlphanumeric'] = true;
  }

  // At least 8 characters
  if (value.length < 8) {
    errors['minlength'] = true;
  }

  // Return errors object if any validation failed
  if (Object.keys(errors).length > 0) {
    return errors;
  }

  return null;
}

// Custom validator for date of birth (must be 2006 or below)
function birthDateValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value as Date;

  if (!value) {
    return null;
  }

  const birthDate = new Date(value);
  const cutoffDate = new Date('2006-12-31');

  if (birthDate > cutoffDate) {
    return { birthDateAfter2006: true };
  }

  return null;
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    DatePipe,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatRippleModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  isDarkMode = false;
  myColor = 'rgba(0, 0, 0, 0.2)';
  minSkillLevel = 1;
  maxSkillLevel = 10;
  submitted = false;

  userName = '';
  email = '';
  password = '';
  gender = '';
  address = '';
  birthDate!: Date;
  angularSkillLevel = 5;

  formdata = new FormGroup({
    userName: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, passwordValidator]),
    gender: new FormControl('', [Validators.required]),
    birthDate: new FormControl(null, [Validators.required, birthDateValidator]),
    address: new FormControl(''),
    angularSkillLevel: new FormControl(5)
  });

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
  }

  onClickSubmit(data: any) {
    this.userName = data.userName || '';
    this.email = data.email || '';
    this.password = data.password || '';
    this.gender = data.gender || '';
    this.address = data.address || '';
    this.birthDate = data.birthDate || new Date();
    this.angularSkillLevel = data.angularSkillLevel || 5;
    this.submitted = true;

    console.log('Form Submitted:', data);
  }
}
