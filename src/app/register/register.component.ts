import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
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
    MatRippleModule,
    MatSliderModule,
    MatSlideToggleModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  isDarkMode = false;
  myColor = 'rgba(207, 72, 72, 0.32)';
  userName: string = '';
  email: string = '';
  password: string = '';
  gender: string = '';
  address: string = '';
  birthDate!: Date;
  angularSkillLevel: number = 5;
  minSkillLevel: number = 1;
  maxSkillLevel: number = 10;
  submitted: boolean = false;

  formdata = new FormGroup({
    userName: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    gender: new FormControl('', [Validators.required]),
    birthDate: new FormControl(null, [Validators.required]),
    address: new FormControl(''),
    angularSkillLevel: new FormControl(5)
  });
isSubscribedToEmailsMessage: any;

toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
  }
onClickSubmit(data: Partial<{
  userName: string | null;
  email: string | null;
  password: string | null;
  gender: string | null;
  address: string | null;
  birthDate: Date | null;
  angularSkillLevel: number | null;
}>) {
  this.userName = data.userName ?? '';
  this.email = data.email ?? '';
  this.password = data.password ?? '';
  this.gender = data.gender ?? '';
  this.address = data.address ?? '';
  this.birthDate = data.birthDate ?? new Date();
  this.angularSkillLevel = data.angularSkillLevel ?? 5;
  this.submitted = true;

  console.log('Form Submitted:', data);
}
  resetForm() {
    this.formdata.reset();
    this.submitted = false;
    this.userName = '';
    this.email = '';
    this.password = '';
    this.gender = '';
    this.address = '';
    this.birthDate = new Date();
    this.angularSkillLevel = 5;
  }
}
