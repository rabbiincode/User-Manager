import { Component } from '@angular/core';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';
import { UserCardComponent } from '../user-card/user-card.component';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [HeaderComponent, UserCardComponent, MatIconModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})

export class UserDetailsComponent{
  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router){}
  error = false
  loading = false
  user: User[] = [];
  searchValue!: string

  ngOnInit() {
    this.loading = true
    // Subscribe to route change event and rerender component on route change
    this.activatedRoute.queryParams.subscribe(params => {
      this.searchValue = params['id']
      this.getUserDetails(params['id'])
    })
  }

  getUserDetails = async (id: string) => {
    this.loading = true;
    (await this.userService.getUserById(id))
      .subscribe(user => {
        this.user?.push(user.data);
        this.loading = false
      }, (error) => {
        error = true
        this.loading = false
      }
    );
  }

  back = () => {
    // Navigates back to the previous route
    this.router.navigate(['../']);
  }
}
