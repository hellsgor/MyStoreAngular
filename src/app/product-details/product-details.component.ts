import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IProduct } from '../model';
import { products } from '../products';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsComponent implements OnInit {
  public products: IProduct[] = products;

  public product: IProduct | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.route.paramMap.subscribe(() => {
    //   this.product =
    //     products[
    //       +this.route.paramMap.pipe(
    //         map((param: ParamMap) => param.get('productId'))
    //       )
    //     ];
    // });

    this.route.paramMap.subscribe((params) => {
      console.log(products[+!params.get('productId')]);
      this.product = products[+!params.get('productId')];
    });
  }
}
