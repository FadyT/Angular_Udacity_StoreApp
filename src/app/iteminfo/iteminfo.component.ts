import { Component  } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { product } from '../models/product';
import { ProductsdataService } from '../services/productsdata.service';
import { RouterLink ,RouterOutlet} from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-iteminfo',
  standalone: true,
  imports: [ProductItemComponent , RouterLink , RouterOutlet , CommonModule],
  templateUrl: './iteminfo.component.html',
  styleUrl: './iteminfo.component.css'
})
export class IteminfoComponent {

  item: product;

  ngOnInit() {

    this.item = this.productservice.getCurrentItem()
  }

constructor(private productservice :ProductsdataService){
  this.item = {
    id:0,
    name : '',
    price: 0,
    url:'',
    description:'',
    amount:0
  }
}
}
