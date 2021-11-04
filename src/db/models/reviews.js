

import sequelize from "../index.js"
import s from "sequelize"
const {DataTypes}=s

const Review = sequelize.define("reviews",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    text:{
        type:DataTypes.TEXT,
        allowNull: false

    },
   
})

export default Review