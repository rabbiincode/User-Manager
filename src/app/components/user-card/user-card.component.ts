import { Component, Input } from '@angular/core';
import { User } from '../../interfaces/user';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})

export class UserCardComponent{
  constructor(private router: Router){}
  @Input() show = false
  @Input() user!: User[]
  @Input() details = false
  getUserDetails = (userId: string) => {
    this.router.navigate(['details'], { queryParams: { id: userId } })
  }
}
