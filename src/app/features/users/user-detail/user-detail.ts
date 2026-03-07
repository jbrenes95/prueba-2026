import { Component, OnInit, inject, signal, effect } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslatePipe } from '@ngx-translate/core';
import { UsersService } from '../services/users.service';
import { LanguageToggle } from '../../../core/components/language-toggle/language-toggle';

@Component({
  selector: 'app-user-detail',
  imports: [
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    TranslatePipe,
    LanguageToggle,
  ],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.scss',
})
export class UserDetail implements OnInit {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  usersService = inject(UsersService);

  showPassword = signal(false);
  isEditing = signal(false);

  editName = signal('');
  editSurname = signal('');
  editEmail = signal('');

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
    this.editName.set(user.name);
    this.editSurname.set(user.surname);
    this.editEmail.set(user.email);
    this.isEditing.set(true);
  }

  cancelEdit(): void {
    this.isEditing.set(false);
  }

  saveEdit(): void {
    const user = this.usersService.userDetail();
    if (!user) return;
    this.usersService.updateUser(user.id, {
      name: this.editName(),
      surname: this.editSurname(),
      email: this.editEmail(),
    });
    this.isEditing.set(false);
  }
}
