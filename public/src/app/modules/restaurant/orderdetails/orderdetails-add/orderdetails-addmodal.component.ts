import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonsAddComponent } from '../../../../common/commons-add/commons-add.component';

import {default as config} from '../../config/config.json';

import { OrderDetailsService } from '../shared/orderdetails.service';
import { FormsService } from '../../../../dynamicforms/forms/shared/forms.service';

@Component({
  selector: 'app-' + config['orderDetails'].component.name.toLowerCase()  + '-addform2modal',
  templateUrl: './orderdetails-addmodal.component.html',
  styleUrls: ['./orderdetails-addmodal.component.css'],
  providers:  [FormsService]
})
export class OrderDetailsAddModalComponent extends CommonsAddComponent {

  forms : any = [];
  @Input() product: any = {};
  @Input() order: any = {};
  constructor(router: Router, route: ActivatedRoute, orderDetailsService: OrderDetailsService, formsService: FormsService) 
  {    
    super(router, route, orderDetailsService, formsService);    
    this.name = config['orderDetails'].component.name;
	  this.pref = config['orderDetails'].component.prefix;
	  this.keyName = "_id";
	  this.components = config;
  }

  createForm() {
    this.controlsJson = config['orderDetails'].model; 
    let date = new Date();
    date.setHours(0,0,0,0)  
    this.controlsJson[5].value = date.toISOString().substr(0, 10);
    //this.controlsJson[5].readonly = true;
    //this.controlsJson[5].type = 'text'; 

    //this.controlsJson[2].readonly = true;
    //this.controlsJson[2].control = "textbox";
    //this.controlsJson[4].readonly = true;
	  this.components = config;

    super.createForm();    
  }
  refresh() {
    this.controlsJson = config['orderDetails'].model;    
    let date = new Date();
    date.setHours(0,0,0,0)  
    this.controlsJson[5].value = date.toISOString().substr(0, 10);
    //this.controlsJson[5].readonly = true;

    this.controlsJson[2].value = this.product._id;
    //this.controlsJson[2].readonly = true;
    //this.controlsJson[2].control = "textbox";

    this.controlsJson[4].value =  this.order._id
    //this.controlsJson[4].readonly = true;

	  this.components = config;
    super.updateForm(); 
    this.forms.controls["ordd_date"].setValue( date.toISOString().substr(0, 10));
    this.forms.controls["ordd_dish_id"].setValue( this.product._id);   
    this.forms.controls["ordd_ordn_id"].setValue( this.order._id);   
  }

  onCompleteForm(form) {
    this.forms = form;
  }
}
