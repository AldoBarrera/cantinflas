import { InventoryModel } from "./models/inventory.model";
import * as App from "../../../common/component";

class InveInventoryComponent extends App.CommonComponent {
    constructor() {
        super();
        this.modelDb = InventoryModel;
	    this.namePref = InventoryModel.namePref;
	    this.name = InventoryModel.name;
        this.keyName = InventoryModel.keyName;
    }   
    async GetAllDataInventory(date) {      
        if(date) {
            const dataResponse = await this.modelDb.find({inve_date:date});
            return dataResponse;
        }  
        const dataResponse = await this.modelDb.find({});
        return dataResponse;
    }

    async GetAllRestrictDataInventory(restrict: any) {        
        const dataResponse = await this.modelDb.find({}, {restrict:restrict});
        return dataResponse;
    }

    async GetPopulateDataInventory(date) {   
        var populate = this.modelDb.getPopulateFields();
        
        if(date) {
            const dataResponse = await this.modelDb.find({inve_date:date},{populate:populate});
            return dataResponse;
        } 
        const dataResponse = await this.modelDb.find({},{populate:populate});
        return dataResponse;
    }

    async InsertData(data: any) {
        const inventoryFound = await this.FindOne({inve_date:data.inve_date, inve_dish_id:data.inve_dish_id});
        if(!inventoryFound) {
            let key = data[this.modelDb.keyName];
            data[this.modelDb.keyName] = !key || key == "" ? this.modelDb.generateKey():key;
            const dataResponse = await this.modelDb.create(data);
            return dataResponse;
        }
        inventoryFound.inve_available = inventoryFound.inve_available + parseInt(data.inve_available);
        const inventoryUpdate = await this.UpdateData({_id:inventoryFound._id},inventoryFound);
        return inventoryFound;
    }
}
var inveInventoryComponent = new InveInventoryComponent();
export {inveInventoryComponent};
export default inveInventoryComponent;
