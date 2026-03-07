import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-list',
  imports: [MatTableModule, MatProgressSpinnerModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss',
})
export class UserList implements OnInit {
  displayedColumns = ['id', 'name', 'surname', 'email'];

  constructor(
    public usersService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.usersService.loadUsers();
  }

  goToDetail(id: number): void {
    this.router.navigate(['/users', id]);
  }
}
