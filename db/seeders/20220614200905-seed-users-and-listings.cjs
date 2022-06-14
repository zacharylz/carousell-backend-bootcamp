"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        firstName: "Jason",
        lastName: "Tan",
        phoneNum: "98877889",
        email: "jason.tan@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    await queryInterface.bulkInsert("Listings", [
      {
        title: "iPhone 12",
        category: "Electronics",
        condition: "Well Used",
        price: 699,
        description: "Used for 1 year and upgrading",
        shippingDetails: "Meet at Bedok MRT",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Switch with 4 Controllers",
        category: "Electronics",
        condition: "Like New",
        price: 499,
        description: "Bought for my nephew but he prefers PlayStation",
        shippingDetails: "Same day shipping",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Muji Carry-On Luggage",
        category: "Luggage",
        condition: "Well used",
        price: 49,
        description: "Prefer a bigger luggage, no space to store this at home!",
        shippingDetails: "Pickup at my block",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Listings", null, {});
    await queryInterface.bulkDelete("Users", null, {});
  },
};
