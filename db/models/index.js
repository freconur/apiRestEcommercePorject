const { User, UserSchema } = require('./user.model');
const { Customer, CustomerSchema} = require('./customer.model')
const { Product, ProductSchema} = require('./product.model')
const { Marca, MarcaSchema} = require('./marca.model')
const { Genero, GeneroSchema} = require('./genero.model')
const { Color, ColorSchema} = require('./color.model')
const { Category, CategorySchema} = require('./category.model')
const { Order, OrderSchema} = require('./order.model')
const { OrderProduct, OrderProductSchema} = require('./order-product.model')
const { Cart, CartSchema } = require('./carts.model')
const { CartProduct, CartProductSchema } = require('./carts-product.model')

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  Marca.init(MarcaSchema, Marca.config(sequelize));
  Genero.init(GeneroSchema, Genero.config(sequelize));
  Color.init(ColorSchema, Color.config(sequelize));
  Order.init(OrderSchema, Order.config(sequelize));
  Cart.init(CartSchema, Cart.config(sequelize));
  OrderProduct.init(OrderProductSchema, OrderProduct.config(sequelize));
  CartProduct.init(CartProductSchema, CartProduct.config(sequelize));

  User.associate(sequelize.models)
  Customer.associate(sequelize.models)
  Product.associate(sequelize.models)
  Category.associate(sequelize.models)
  Marca.associate(sequelize.models)
  Genero.associate(sequelize.models)
  Color.associate(sequelize.models)
  Order.associate(sequelize.models)
  Cart.associate(sequelize.models)
}

module.exports = setupModels;