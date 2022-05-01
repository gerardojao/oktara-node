//impor the conecction with DB
import db from "../database/db.js"
//import sequelize
import {DataTypes} from "sequelize"

const BlogModel = db.define('cats',{
    id:{type:DataTypes.INTEGER,'primaryKey': true },
    name:{type:DataTypes.STRING},
    breed:{type: DataTypes.STRING},
    description: {type:DataTypes.STRING},
  
})
export default BlogModel

