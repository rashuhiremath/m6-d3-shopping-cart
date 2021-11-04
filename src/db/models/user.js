import sequelize from "../index.js";
import s from "sequelize"
const {DataTypes} = s

const User = sequelize.define("users",{
    id:{
        primaryKey:true,
        type:DataTypes.INTEGER,
        autoIncrement:true,

    },
    user_name:{
        type:DataTypes.STRING,
        allowNull: false,

    }
})

export default User