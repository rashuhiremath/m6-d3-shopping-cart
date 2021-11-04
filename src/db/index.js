import {Sequelize} from "sequelize"


const {PGUSER,PGDATABASE,PGHOST,PGPORT,PGPASSWORD} = process.env

const sequelize = new Sequelize(PGDATABASE,PGUSER, PGPASSWORD,{
    host:PGHOST,
    port:PGPORT,
    dialect: "postgres",
})
console.log("here is sequelize instance created")

 export const buildConnection = async ()=>{
    try {
        await sequelize.authenticate({logging: false})
        console.log("Can be established");
        
    } catch (error) {
        console.log(error)
    }
}

export const connectDb = async() =>{
    try {

        console.log("tables are connected")
        await sequelize.sync()
        
    } catch (error) {
        console.log(error)
        
    }

}

export default sequelize;