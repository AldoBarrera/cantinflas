﻿import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpClientModule }  from '@angular/common/http';

import { DishesComponent } from "./dishes/dishes.component"; 
import { DishesPublicComponent } from "./dishespublic/dishespublic.component"; 
import { DishesService } from "./dishes/shared/dishes.service"; 
import { DishesPublicService } from "./dishespublic/shared/dishespublic.service"; 
import { DishesDetailComponent } from "./dishes/dishes-detail/dishes-detail.component"; 
import { DishesAddComponent } from "./dishes/dishes-add/dishes-add.component"; 
import { DishesEditComponent } from "./dishes/dishes-edit/dishes-edit.component"; 
import { DishesSearchComponent } from "./dishes/dishes-search/dishes-search.component"; 
import { dishesRouting } from "./dishes/dishes.routing"; 
import { dishesPublicRouting } from "./dishespublic/dishespublic.routing"; 

import { OrderComponent } from "./order/order.component"; 
import { OrderPublicComponent } from "./order/orderpublic.component";

import { OrderService } from "./order/shared/order.service"; 
import { OrderDetailComponent } from "./order/order-detail/order-detail.component"; 
import { OrderAddComponent } from "./order/order-add/order-add.component"; 
import { OrderAddModalComponent } from "./order/order-add/order-addmodal.component"; 
import { OrderEditComponent } from "./order/order-edit/order-edit.component"; 
import { OrderSearchComponent } from "./order/order-search/order-search.component"; 
import { orderRouting } from "./order/order.routing"; 
import { OrderDetailsComponent } from "./orderdetails/orderdetails.component"; 
import { OrderDetailsPublicComponent } from "./orderdetails/orderdetailspublic.component"; 

import { OrderDetailsService } from "./orderdetails/shared/orderdetails.service"; 
import { OrderDetailsDetailComponent } from "./orderdetails/orderdetails-detail/orderdetails-detail.component"; 
import { OrderDetailsAddComponent } from "./orderdetails/orderdetails-add/orderdetails-add.component"; 
import { OrderDetailsAddModalComponent } from "./orderdetails/orderdetails-add/orderdetails-addmodal.component"; 

import { OrderDetailsEditComponent } from "./orderdetails/orderdetails-edit/orderdetails-edit.component"; 
import { OrderDetailsSearchComponent } from "./orderdetails/orderdetails-search/orderdetails-search.component"; 
import { orderDetailsRouting } from "./orderdetails/orderdetails.routing"; 
import { InventoryComponent } from "./inventory/inventory.component"; 
import { InventoryService } from "./inventory/shared/inventory.service"; 
import { InventoryDetailComponent } from "./inventory/inventory-detail/inventory-detail.component"; 
import { InventoryAddComponent } from "./inventory/inventory-add/inventory-add.component"; 
import { InventoryEditComponent } from "./inventory/inventory-edit/inventory-edit.component"; 
import { InventorySearchComponent } from "./inventory/inventory-search/inventory-search.component"; 
import { inventoryRouting } from "./inventory/inventory.routing"; 


import { DynamicFormsModule } from '../../dynamicforms/dynamicforms.module';

import { MyFilterPipe } from './orderdetails/shared/pipes/my-filter.pipe';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
	dishesRouting, 
  dishesPublicRouting, 
orderRouting, 
orderDetailsRouting, 
inventoryRouting, 

    DynamicFormsModule,
    
    

  ],
  declarations: [
    DishesComponent, 
    DishesPublicComponent,
DishesDetailComponent, 
DishesAddComponent, 
DishesEditComponent, 
DishesSearchComponent, 
OrderComponent, 
OrderPublicComponent,
OrderDetailComponent, 
OrderAddComponent, 
OrderAddModalComponent,
OrderEditComponent, 
OrderSearchComponent, 
OrderDetailsComponent, 
OrderDetailsPublicComponent,
OrderDetailsDetailComponent, 
OrderDetailsAddComponent,
OrderDetailsAddModalComponent ,
OrderDetailsEditComponent, 
OrderDetailsSearchComponent, 
InventoryComponent, 
InventoryDetailComponent, 
InventoryAddComponent, 
InventoryEditComponent, 
InventorySearchComponent, 
MyFilterPipe,
  ],
  exports: [
    DishesComponent, 
OrderComponent, 
OrderPublicComponent,
OrderDetailsComponent, 
OrderDetailsPublicComponent,
InventoryComponent, 
OrderAddComponent,
OrderDetailsAddModalComponent,
OrderDetailsAddComponent,
OrderAddModalComponent,
  ],
  providers: [
    DishesService, 
    DishesPublicService, 
OrderService, 
OrderDetailsService, 
InventoryService, 

  ]
})
export class RestaurantModule { }
