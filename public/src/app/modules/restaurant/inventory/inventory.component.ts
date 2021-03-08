import { Component, Input } from '@angular/core';
import {CommonsComponent} from "../../../common/commons.component";
import {default as config} from '../config/config.json';
import {InventoryService} from "./shared/inventory.service";

@Component({
  selector: 'app-' + config['inventory'].component.name.toLowerCase() ,
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent extends CommonsComponent {

  @Input() datafromadd: any[] = [];
  constructor(private inventoryService: InventoryService) { 
    super(inventoryService);
    this.name = config['inventory'].component.name  ;
	  this.pref = config['inventory'].component.prefix  ;
	  this.keyName =  "_id";
  }
  ngOnInit() {    
    super.ngOnInit(); 
  }
}
