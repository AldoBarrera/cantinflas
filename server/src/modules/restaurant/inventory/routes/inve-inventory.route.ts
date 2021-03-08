import { Request, Response, NextFunction } from 'express';
import * as App from "../../../../common/route";
import {inveInventoryComponent as InveInventoryComponent}  from "../inve-inventory.component";
import config from "../../config/config.json";

export class InveInventoryRoute extends App.CommonRouter {

    constructor(inventory:string, io?: any) {        
        super();
        this.dataRoute = "/inventory";
        this.singleDataRoute= "/inventory/:id"; 
	    this.dataRouteSearch = "/inventorySearch";
        this.commonComponent=InveInventoryComponent;
        this.moduleName  = inventory;
        this.moduleUrlRelative = config["module"].urlRelative;
        this.keyName = "_id";
        super.init();
        super.addSocket(io); 
    }
}

