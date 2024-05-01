import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

export const routes: Routes = [
  { path: '', title: 'Manage Users Effectively', pathMatch: 'full', component: HomeComponent },
  { path: 'search', title: 'Search', component: SearchComponent },
  { path: 'details', title: 'Details', component: UserDetailsComponent }
];
