'use strict';

import {ModelBase} from '../../../../config/databasemysql';
export default ModelBase.extend({
    tableName: 'dishes',
    idAttribute: 'dish_key',
});
