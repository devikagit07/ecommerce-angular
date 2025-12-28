import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Apiservice } from '../apiservice';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail  {
  // product: any;
  // loading = true;
  // error: string | null = null;
  
  // constructor(private route: ActivatedRoute, private apiservice: Apiservice) {}

  // ngOnInit() {
  //   const productid = this.route.snapshot.paramMap.get('id');
  //   console.log('Product ID:', productid);
    
  //   if (productid) {
  //     this.apiservice.getsingleProducts(productid).subscribe({
  //       next: (data: any) => {
  //         console.log('Product data:', data);
  //         this.product = data;
  //         this.loading = false;
  //       },
  //       error: (err) => {
  //         console.error('Error loading product:', err);
  //         this.error = 'Failed to load product details';
  //         this.loading = false;
  //       }
  //     });
  //   } else {
  //     this.error = 'No product ID provided';
  //     this.loading = false;
  //   }
  // }
}