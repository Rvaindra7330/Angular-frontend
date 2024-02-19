import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-product-info',
  standalone: true,
  imports: [],
  templateUrl: './product-info.component.html',
  styleUrl: './product-info.component.css'
})
export class ProductInfoComponent implements OnInit {
httpCLient = inject(HttpClient);
data:any[]=[];
ngOnInit(): void {
    this.fetchData();
}
fetchData(){
  this.httpCLient.get('http://localhost:8080/api/products').subscribe((data:any)=>{
    console.log(data);
    this.data=data;
  });
}
}
