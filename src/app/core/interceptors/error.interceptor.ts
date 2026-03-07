import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { NotificationService } from '../services/notification.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const notification = inject(NotificationService);
  const translate = inject(TranslateService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      const key = `ERROR.${error.status}`;
      const message = translate.instant(key) !== key
        ? translate.instant(key)
        : translate.instant('ERROR.DEFAULT');
      notification.error(message);
      return throwError(() => error);
    })
  );
};
