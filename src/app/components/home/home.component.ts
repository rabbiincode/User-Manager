import { Component } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, UserComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent{
}
