import sequelize from "../index.js"
import s from "sequelize"
const {DataTypes}=s;

const Categoryproduct = sequelize.define("Categoryproduct",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    }
    

},
{ timestamps: false })

export default Categoryproduct