import { Component, OnInit, inject, signal, effect } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslatePipe } from '@ngx-translate/core';
import { UsersService } from '../services/users.service';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PASSWORD_PATTERN = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).+$/;

@Component({
  selector: 'app-user-detail',
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    TranslatePipe,
  ],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.scss',
})
export class UserDetail implements OnInit {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private fb = inject(FormBuilder);
  usersService = inject(UsersService);

  showPassword = signal(false);
  isEditing = signal(false);

  editForm = this.fb.group({
    name: [''],
    surname: [''],
    email: ['', [Validators.required, Validators.pattern(EMAIL_PATTERN)]],
    password: ['', [Validators.required, Validators.pattern(PASSWORD_PATTERN)]],
  });

  constructor() {
    effect(() => {
      if (this.usersService.userDetailError()) {
        this.usersService.userDetailError.set(false);
        this.router.navigate(['/users']);
      }
    });
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.usersService.loadUserDetail(id);
  }

  goBack(): void {
    this.router.navigate(['/users']);
  }

  startEdit(): void {
    const user = this.usersService.userDetail();
    if (!user) return;
    this.editForm.setValue({
      name: user.name,
      surname: user.surname,
      email: user.email,
      password: user.password,
    });
    this.isEditing.set(true);
  }

  cancelEdit(): void {
    this.isEditing.set(false);
  }

  saveEdit(): void {
    if (this.editForm.invalid) return;
    const user = this.usersService.userDetail();
    if (!user) return;
    const { name, surname, email } = this.editForm.getRawValue();
    this.usersService.updateUser(user.id, { name: name!, surname: surname!, email: email! });
    this.isEditing.set(false);
  }
}
