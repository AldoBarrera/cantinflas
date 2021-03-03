import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../../../../message.service';
import { CommonsService } from '../../../../common/shared/commons.service';
import {default as config} from '../../config/config.json';
import { environment } from '../../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class GrupFieldsPrivileguesService extends CommonsService {

  constructor(http: HttpClient,
    messageService: MessageService) 
  { 
    super(http, messageService);
    this.urlRelative = (config["grupFieldsPrivilegues"].component.urlRelative).toLowerCase();
    this.urlModule = config.module.urlRelative;
    this.url = environment.appConfig.url +  this.urlModule + this.urlRelative ;
    this.name = config['grupFieldsPrivilegues'].component.name;
	  this.pref = config['grupFieldsPrivilegues'].component.prefix  ;
    this.setKeyName("_id");
    this.createRemoteEvents();
  } 
}
