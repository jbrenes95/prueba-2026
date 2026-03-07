import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { User, UserApi, UserDetail, UserDetailApi } from '../../../core/models/user.model';
import { mapUser, mapUserDetail } from '../../../core/mappers/user.mapper';
import { NotificationService } from '../../../core/services/notification.service';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class UsersService {
  private readonly apiUrl = `${environment.apiUrl}/users`;

  users = signal<User[]>([]);
  loading = signal(false);
  error = signal<string | null>(null);

  userDetail = signal<UserDetail | null>(null);
  loadingDetail = signal(false);
  userDetailError = signal(false);

  private http = inject(HttpClient);
  private notification = inject(NotificationService);
  private translate = inject(TranslateService);

  loadUsers(): void {
    if (this.users().length > 0) return;

    this.loading.set(true);
    this.error.set(null);
    this.http
      .get<UserApi[]>(this.apiUrl)
      .pipe(map((data) => data.map(mapUser)))
      .subscribe({
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

  loadUserDetail(id: number): void {
    this.loadingDetail.set(true);
    this.userDetail.set(null);
    this.userDetailError.set(false);
    this.http
      .get<UserDetailApi>(`${this.apiUrl}/${id}`)
      .pipe(map(mapUserDetail))
      .subscribe({
        next: (user) => {
          this.userDetail.set(user);
          this.loadingDetail.set(false);
        },
        error: () => {
          this.loadingDetail.set(false);
          this.userDetailError.set(true);
        },
      });
  }

  updateUser(id: number, data: Partial<Pick<UserDetail, 'name' | 'surname' | 'email'>>): void {
    this.http.put<UserDetailApi>(`${this.apiUrl}/${id}`, data).subscribe({
      next: (response) => {
        if (response) {
          this.userDetail.update((current) => (current ? { ...current, ...data } : current));
          this.notification.success(this.translate.instant('USER_DETAIL.SAVE_SUCCESS'));
        }
      },
    });
  }
}
