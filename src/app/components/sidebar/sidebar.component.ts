import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatIconModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})

export class SidebarComponent{
  @Output() search = new EventEmitter()
  @Output() getImageByCategory = new EventEmitter<string>()

  searchInput = () => this.search.emit()
  getCategoryImages = (category: string) => {
    this.getImageByCategory.emit(category)
  }
}