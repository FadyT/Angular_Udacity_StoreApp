import { Component } from '@angular/core';
import { user } from '../models/user';
import { FormsModule } from '@angular/forms';
import { ProductsdataService } from '../services/productsdata.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-userdetails',
  standalone: true,
  imports: [FormsModule , NgIf],
  templateUrl: './userdetails.component.html',
  styleUrl: './userdetails.component.css'
})
export class UserdetailsComponent {
  name:string='';
  address:string = '';
  cardnumber:string='' ;

  constructor(private productservice :ProductsdataService , private router: Router){}

  placeOrder():void{
    console.log(this.name + " : " + this.address + " : " + this.cardnumber);
    this.productservice.saveuserdata({name:this.name , address:this.address , cardnumber: this.cardnumber });
    this.router.navigate(['/orderplaced']);
  }

}
