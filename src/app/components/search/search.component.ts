import { Component } from '@angular/core';
import { User } from '../../interfaces/user';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { HeaderComponent } from '../header/header.component';
import { UserCardComponent } from '../user-card/user-card.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [HeaderComponent, UserCardComponent, MatIconModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})

export class SearchComponent{
  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router){}
  user: User[] = [];
  error = false
  loading = false
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
