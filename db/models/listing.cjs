"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Listing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { as: "Buyer" });
      this.belongsTo(models.User, { as: "Seller" });
    }
  }
  Listing.init(
    {
      title: DataTypes.STRING,
      category: DataTypes.STRING,
      condition: DataTypes.STRING,
      price: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      shippingDetails: DataTypes.TEXT,
      BuyerId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
      },
      SellerId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Listing",
    }
  );
  return Listing;
};
