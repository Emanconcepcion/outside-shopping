// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

Product.belongsTo(Category, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});
Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false,
  },
  as: "tag_products",
});
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false,
  },
  as: "product_tags",
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
