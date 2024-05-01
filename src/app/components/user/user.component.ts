import { Component } from '@angular/core';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';
import { UserCardComponent } from '../user-card/user-card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [UserCardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})

export class UserComponent{
  constructor(private userService: UserService){}
  error = false
  users!: User[];
  loading = false
  totalPages!: number;
  currentPage: number = 1;
  cachedData!: { users: User[], totalPages: number };

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    if (this.cachedDataExists()) {
      this.populateUsersFromCache();
    } else {
      this.populateUsersCache();
    }
  }

  populateUsersCache = async () => {
    this.loading = true;
    (await this.userService.getALlUsers(this.currentPage))
      .subscribe(users => {
        this.loading = false
        this.users = users.data;
        this.totalPages = users.total_pages;
        this.cachedData = { users: this.users, totalPages: this.totalPages };
      }, (error) => {
        error = true
        this.loading = false
      }
    );
  }

  populateUsersFromCache = (): void => {
    // Populate users from cached data
    this.users = this.cachedData.users;
    this.totalPages = this.cachedData.totalPages;
  }

  cachedDataExists = (): boolean => {
    return this.cachedData !== undefined && this.cachedData !== null;
  }

  nextPage = (): void => {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadUsers();
    }
  }

  prevPage = (): void => {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadUsers();
    }
  }

  goToPage = (pageNumber: number): void => {
    if (pageNumber >= 1 && pageNumber <= this.totalPages) {
      this.currentPage = pageNumber;
      this.loadUsers();
    }
  }
}
