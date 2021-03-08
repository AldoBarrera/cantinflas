import { Component, Input } from '@angular/core';
import {CommonsComponent} from "../../../common/commons.component";
import {default as config} from '../config/config.json';
import {DishesPublicService} from "./shared/dishespublic.service";

@Component({
  selector: 'app-' + config['dishes'].component.name.toLowerCase() + 'public' ,
  templateUrl: './dishespublic.component.html',
  styleUrls: ['./dishespublic.component.css']
})
export class DishesPublicComponent extends CommonsComponent {

  @Input() datafromadd: any[] = [];
  constructor(private dishesService: DishesPublicService) { 
    super(dishesService);
    this.name = 'dishespublic';
	  this.pref = 'disp';
	  this.keyName = "_id";
  }
  ngOnInit() {    
    super.ngOnInit(); 
  }

  onCurrentDataChange(data) {
    this.currentData = JSON.parse(JSON.stringify(data));
  }
}
