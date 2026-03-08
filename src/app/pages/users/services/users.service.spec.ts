import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { vi } from 'vitest';
import { UsersService } from './users.service';
import { NotificationService } from '../../../shared/services/notification.service';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../../../environments/environment';

const API_URL = `${environment.apiUrl}/users`;

const mockApiUsers = [
  { id: 1, name: 'Ana', surname: 'García', email: 'ana@test.com' },
  { id: 2, name: 'Luis', surname: 'Pérez', email: 'luis@test.com' },
];

describe('UsersService - loadUsers', () => {
  let service: UsersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UsersService,
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: NotificationService, useValue: { error: vi.fn(), success: vi.fn() } },
        { provide: TranslateService, useValue: { instant: (key: string) => key } },
      ],
    });

    service = TestBed.inject(UsersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should populate the users signal with mapped data on success', () => {
    service.loadUsers();

    const req = httpMock.expectOne(API_URL);
    expect(req.request.method).toBe('GET');
    req.flush(mockApiUsers);

    expect(service.users().length).toBe(2);
    expect(service.users()[0]).toEqual({ id: 1, name: 'Ana', surname: 'García', email: 'ana@test.com' });
    expect(service.loading()).toBe(false);
  });

  it('should not make a second HTTP request if users are already cached', () => {
    service.loadUsers();
    httpMock.expectOne(API_URL).flush(mockApiUsers);

    service.loadUsers();
    httpMock.expectNone(API_URL);
  });

  it('should set error signal and clear loading on HTTP failure', () => {
    service.loadUsers();

    const req = httpMock.expectOne(API_URL);
    req.flush('Server error', { status: 500, statusText: 'Internal Server Error' });

    expect(service.error()).not.toBeNull();
    expect(service.loading()).toBe(false);
  });
});
