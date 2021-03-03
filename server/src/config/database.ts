
import mongoose from "mongoose";

var database = process.env.DATABASE || "127.0.0.1";
var port = process.env.DATABASE_PORT || "27017";
var user = process.env.DATABASE_USER || "smartBuilding";
var password = process.env.DATABASE_PASSWORD || "5mar7Bu1ld1ng";

(mongoose as any).Promise = global.Promise;

  mongoose.connect("mongodb://" + user + ":" + password + "@" + database +":" + port +"/admin", {
    useNewUrlParser: true,
    useCreateIndex: true
  });

export { mongoose };
