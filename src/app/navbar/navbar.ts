import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Apiservice } from '../apiservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
  products: any[] = [];
  showProductDropdown = false;

  constructor(private apiservice: Apiservice){}

  ngOnInit(){
    this.apiservice.getProduct().subscribe((data: any) => {
      this.products = data.slice(0, 6); // Show only first 6 products
    });
  }

  toggleProductDropdown() {
    this.showProductDropdown = !this.showProductDropdown;
  }
}
