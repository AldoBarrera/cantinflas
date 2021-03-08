import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../../../../message.service';
import { CommonsService } from '../../../../common/shared/commons.service';
import {default as config} from '../../config/config.json';
import { environment } from '../../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class InventoryService extends CommonsService {

  constructor(http: HttpClient,
    messageService: MessageService) 
  { 
    super(http, messageService);
    this.urlRelative = (config["inventory"].component.urlRelative).toLowerCase();
    this.urlModule = config.module.urlRelative;
    this.url = environment.appConfig.url +  this.urlModule + this.urlRelative ;
    this.name = config['inventory'].component.name;
	  this.pref = config['inventory'].component.prefix  ;
    this.setKeyName("_id");
    this.createRemoteEvents();
  } 
}
