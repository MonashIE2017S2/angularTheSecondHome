import { Component } from '@angular/core';

@Component({
  selector: 'layout-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./layout.component.css']
})
export class FooterComponent {
  today: number = Date.now();
}
