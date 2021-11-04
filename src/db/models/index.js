import Product from "./product.js";
import Review from "./reviews.js"
import User from "./user.js"
import Category from "./category.js"
import Categoryproduct from "./categoryProduct.js";

Product.hasMany(Review,{onDelete:"CASCADE"})
Review.belongsTo(Product,{onDelete:"CASCADE"})

Product.belongsToMany(Category,{
    through:{model:Categoryproduct,unique:false}
})
Category.belongsToMany(Product,{
    through:{model:Categoryproduct,unique:false}
})

Review.hasMany(User,{onDelete:"CASCADE"})
User.belongsTo(Review,{onDelete:"CASCADE"})



export default {Product,Review,User,Category,Categoryproduct}