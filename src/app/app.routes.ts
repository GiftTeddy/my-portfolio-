import { Routes } from '@angular/router';
import { HomeComponent } from '../app/pages/home/home.component';
import { AboutComponent } from '../app/pages/about/about.component';
import { ProjectsComponent } from '../app/pages/projects/projects.component';
import { ContactComponent } from '../app/pages/contact/contact.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];