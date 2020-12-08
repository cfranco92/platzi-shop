import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'platzi-shop';

  items = ['cristian', 'santiago', 'ramon'];

  public addItem() {
    this.items.push('nuevo item');
  }
  public deleteItem(index: number) {
    this.items.splice(index, 1);
  }
}
