import { ChangeDetectionStrategy, Component } from '@angular/core';
import { products } from '../products';
import { IProduct } from '../model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  public products: IProduct[] = products;

  public trackByProducts(index: number): number {
    return index;
  }

  public share(): void {
    window.alert('The product has been shared!');
  }

  public onNotify(): void {
    window.alert('You will be notified when the product goes on sale');
  }
}
