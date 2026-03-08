import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { TranslatePipe } from '@ngx-translate/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-list',
  imports: [
    FormsModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    TranslatePipe,
  ],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss',
})
export class UserList implements OnInit {
  displayedColumns = ['name', 'surname', 'email'];
  searchTerm = signal('');

  usersService = inject(UsersService);
  private router = inject(Router);

  ngOnInit(): void {
    this.usersService.loadUsers();
  }

  goToDetail(id: number): void {
    this.router.navigate(['/users', id]);
  }

  filteredUsers = computed(() => {
    const term = this.searchTerm().toLowerCase();
    if (!term) return this.usersService.users();
    return this.usersService
      .users()
      .filter(
        (u) =>
          u.name.toLowerCase().includes(term) ||
          u.surname.toLowerCase().includes(term) ||
          u.email.toLowerCase().includes(term),
      );
  });
}
