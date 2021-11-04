import sequelize from "../index.js";
import s from "sequelize"
const {DataTypes} = s

const Category = sequelize.define("categories",{
    id:{
        primaryKey:true,
        type:DataTypes.INTEGER,
        autoIncrement:true,

    },
    product_name:{
        type:DataTypes.STRING,
        allowNull: false,

    }
})

export default Category