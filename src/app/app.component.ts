import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public menus = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Pets', url: '/pets', icon: 'paw' },
    { title: 'Adoção', url: '/adocao', icon: 'person-add' },
    { title: 'Vacinas', url: '/vacinas', icon: 'eyedrop' },
  ];
  constructor() {}
}
