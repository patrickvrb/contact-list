import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'contact-list';

  constructor(private router: Router) {}

  home(): Promise<boolean> {
    return this.router.navigate(['']);
  }
}
