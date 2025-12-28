import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Apiservice } from '../apiservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [RouterLink, CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product implements OnInit {
  products: any[] = [];

  constructor(private apiservice: Apiservice,private cdr:ChangeDetectorRef){}

  ngOnInit(){
    this.apiservice.getProduct().subscribe((data: any) => {
      this.products = data;
      this.cdr.detectChanges()
    });
  }

  // onImageError(event: any) {
  //   event.target.src = 'https://via.placeholder.com/280x280?text=No+Image';
  // }
}
