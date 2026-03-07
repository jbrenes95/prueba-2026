import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { User, UserApi } from '../../../core/models/user.model';
import { mapUser } from '../../../core/mappers/user.mapper';

@Injectable({ providedIn: 'root' })
export class UsersService {
  private readonly apiUrl = `${environment.apiUrl}/users`;

  users = signal<User[]>([]);
  loading = signal(false);
  error = signal<string | null>(null);

  private http = inject(HttpClient);

  loadUsers(): void {
    if (this.users().length > 0) return;

    this.loading.set(true);
    this.error.set(null);
    this.http.get<UserApi[]>(this.apiUrl).pipe(
      map(data => data.map(mapUser))
    ).subscribe({
      next: (users) => {
        this.users.set(users);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Error al cargar los usuarios');
        this.loading.set(false);
      },
    });
  }
}
