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
}
var inveInventoryComponent = new InveInventoryComponent();
export {inveInventoryComponent};
export default inveInventoryComponent;
