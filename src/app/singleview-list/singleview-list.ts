import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apiservice } from '../apiservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-singleview-list',
  imports: [CommonModule],
  templateUrl: './singleview-list.html',
  styleUrl: './singleview-list.css',
})
export class SingleviewList  {
   singleproduct: any 
   
   constructor(public route: ActivatedRoute, private apiservice: Apiservice, private cdr: ChangeDetectorRef){
   }
   
   ngOnInit() {
     const productId = this.route.snapshot.paramMap.get('id');
     
     if(productId) {
      this.apiservice.getsingleProducts(productId).subscribe((data) => {
         this.singleproduct = data;
         console.log(data)
         this.cdr.detectChanges()
       });
      }
    }
  }
     
   
   