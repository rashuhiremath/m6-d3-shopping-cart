
import sequelize from "../index.js"
import s from "sequelize";
const { DataTypes }= s;

const Product = sequelize.define("products",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    name:{
        type:DataTypes.STRING,
        allowNull: false
    },
    category:{
        type:DataTypes.STRING,
        allowNull: false
    },
    image:{
        type:DataTypes.TEXT,
        allowNull: false
    },
    price:{
        type:DataTypes.FLOAT,
        allowNull: false

    }
})

console.log("product executed")

export default Product