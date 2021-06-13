import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../../products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: any = {};
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      /**
       * 下記の部分でオブジェクトがnull云々のエラーが出て、講義通りのやり方だとエラーが回避できない
       * tsconfig.json内に"strictNullChecks":falseを追加することでエラーが回避できている
       * 理由はよくわからない
       */
      this.product = products[+params.get('productId')]
    });
  }

}
