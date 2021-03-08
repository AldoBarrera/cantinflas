import { mongoose } from "../../../../config/database";
import { Document, Model, Schema } from "mongoose";

var order = {
    ordn_name: { 
type:String, 
unique:true, 
required:true, 
}, 
ordn_date: { 
type:Date, 
unique:false, 
required:false, 
}, 

}

var orderSchema = new Schema(order);
export const Order = mongoose.model("ordn_order", orderSchema);
