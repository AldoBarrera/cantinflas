import { mongoose } from "../../../../config/database";
import { Document, Model, Schema } from "mongoose";
import * as App from "../../../../common/models/mongoose/model";
import {Inventory} from './inve-inventory.model';

class InveInventoryModel extends App.CommonModel {
    constructor() {
        super();
        this.name = "inventory";
	    this.namePref = "inve";
        this.model = Inventory;
	    this.keyName = "_id";
    }    
}


export const InventoryModel = new InveInventoryModel();
