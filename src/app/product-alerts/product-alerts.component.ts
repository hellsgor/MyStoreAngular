import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../model';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss'],
})
export class ProductAlertsComponent {
  @Input() public product: IProduct | undefined;

  @Output() notify: EventEmitter<MouseEvent> = new EventEmitter();
}
