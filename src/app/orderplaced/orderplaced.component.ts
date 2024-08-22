import { Component } from '@angular/core';
import { RouterLink ,RouterOutlet} from '@angular/router';
import { ProductsdataService } from '../services/productsdata.service';
import { user } from '../models/user';

@Component({
  selector: 'app-orderplaced',
  standalone: true,
  imports: [RouterLink , RouterOutlet],
  templateUrl: './orderplaced.component.html',
  styleUrl: './orderplaced.component.css'
})
export class OrderplacedComponent {

  name:string = '';
  price:number = 0;
  data:user;

  constructor(private productsdataservice : ProductsdataService){
    this.data={
      name:'',
      cardnumber:'',
      address:'',
    }
    this.price = productsdataservice.gettotalprice();
  }

  

  ngOnInit() {

    this.data = this.productsdataservice.getuserdata()
    this.name = this.data.name;
  }
}
