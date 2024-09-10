import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <nav>
      <ul>
        <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a></li>
        <li><a routerLink="/about" routerLinkActive="active">About</a></li>
        <li><a routerLink="/projects" routerLinkActive="active">Projects</a></li>
        <li><a routerLink="/contact" routerLinkActive="active">Contact</a></li>
      </ul>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [`
    nav {
      background-color: #f8f9fa;
      padding: 1rem;
    }
    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
      display: flex;
      justify-content: space-around;
    }
    li {
      display: inline;
    }
    a {
      text-decoration: none;
      color: #007bff;
      font-weight: bold;
      transition: color 0.3s ease;
    }
    a:hover {
      color: #0056b3;
    }
    .active {
      color: #0056b3;
      text-decoration: underline;
    }
    @media (max-width: 600px) {
      ul {
        flex-direction: column;
        align-items: center;
      }
      li {
        margin-bottom: 0.5rem;
      }
    }
  `]
})
export class AppComponent {
  title = 'portfolio-website';
}