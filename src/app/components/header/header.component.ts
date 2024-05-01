import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SidebarComponent, CommonModule, FormsModule, MatIconModule, MatTooltipModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent{
  constructor(private router: Router){}
  search = false
  showSidebar = false
  searchValue!: string
  @Output() getImageByCategory = new EventEmitter<string>()

  searchInput = () => this.search = !this.search
  toggleSidebar = () => this.showSidebar = !this.showSidebar

  getCategoryImage = (category: string) => {
    this.getImageByCategory.emit(category)
  }

  searchUser = () => {
    this.router.navigate(['search'], { queryParams: { id: this.searchValue } })
  }
}
