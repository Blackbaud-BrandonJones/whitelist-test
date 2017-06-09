import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html'
})
export class AppNavComponent {
  public nav = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'Learn',
      path: '/learn'
    },
    {
      name: 'API',
      path: '/api'
    },
    {
      name: 'Support',
      path: '/support'
    },
    {
      name: 'Contribute',
      path: '/contribute'
    }
  ];
}
