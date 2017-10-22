import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup,FormsModule  } from '@angular/forms';
import { Router,RouterModule } from '@angular/router';
import { Address } from '../model/address';
import { AddressService } from '../service/address.service'; 


@Component({
  selector: 'edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers:[AddressService]
})

export class EditComponent{
  model=new Address();
  name:string;
  address:string;
  contact:number;
  email:string;
  form: any;
    router: Router;
    constructor(private _router: Router,private addressService:AddressService){
      this.router=_router;
    }
    ngOnInit(){
        this.model=new Address(JSON.parse(localStorage.getItem('editedAddress')));
    }
    submitForm(){   
        debugger;   
      this.addressService.updateAddress(this.model,this.model.id).subscribe(res =>{
        this.model=new Address();
    }); 
     this._router.navigateByUrl('/report');

    }

}

