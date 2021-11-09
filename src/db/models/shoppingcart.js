

import sequelize from "../index.js"
import s from "sequelize"
const {DataTypes}=s

const Shoppingcart = sequelize.define("shoppingcarts",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    number_of_items:{
        type:DataTypes.INTEGER,
        allowNull: false

    },
    item_name:{
        type:DataTypes.STRING,
        allowNull: false
    }
   
})

export default Shoppingcart