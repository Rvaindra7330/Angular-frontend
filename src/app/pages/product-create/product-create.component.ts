import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { error } from 'console';

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent {
productObj: product;
constructor(private http:HttpClient){
  this.productObj=new product();
}
  onCreate(){
    this.http.post('http://localhost:8080/api/products',this.productObj).subscribe((res:any)=>{
      //check if successfully added to database or not 
      console.log('Product added successfully:', res);
      alert("product details added");
    },
    (error)=>{
      console.error(error);
      alert("error while adding,check console");
    }
    )
  }
}

export class product{
  category:string;
  name:string;
  description:string;
  units:number;
  constructor(){
    this.category='';
    this.name='';
    this.description='';
    this.units=0;
  }

}