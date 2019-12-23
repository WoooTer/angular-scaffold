import { Component } from '@angular/core';

@Component({
  selector: 'app-my-templates',
  template: `
  <app-sizer [size]="fontSizePx" (sizeChange)="fontSizePx=$event; myAlert()"></app-sizer>
  `
})
export class MyTemplatesComponent {

  fontSizePx = 20;

  showFontSize(): void {
    alert(this.fontSizePx);
  }

  myAlert() {
    alert(this.fontSizePx);
  }

}
