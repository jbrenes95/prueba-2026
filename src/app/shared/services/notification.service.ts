import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private snackBar = inject(MatSnackBar);
  private translate = inject(TranslateService);

  error(message: string): void {
    this.snackBar.open(message, this.translate.instant('COMMON.CLOSE'), {
      duration: 2000,
      panelClass: ['snack-error'],
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }

  success(message: string): void {
    this.snackBar.open(message, this.translate.instant('COMMON.CLOSE'), {
      duration: 2000,
      panelClass: ['snack-success'],
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }
}
