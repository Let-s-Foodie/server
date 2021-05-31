"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "dishes",
      [
        {
          name: "Brunch Burger",
          image:
            "https://res.cloudinary.com/joonyc/image/upload/v1622220385/burger_1_negokc.jpg",
          category: "burger",
          sellerId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Crunchy French Toast",
          image:
            "https://res.cloudinary.com/joonyc/image/upload/v1622220385/frenchtoast_1_t3entg.jpg",
          category: "french toast",
          sellerId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Beefy Ribs",
          image:
            "https://res.cloudinary.com/joonyc/image/upload/v1622220385/barbeque_1_jye0dr.jpg",
          category: "barbeque",
          sellerId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Coconut Strudel",
          image:
            "https://res.cloudinary.com/joonyc/image/upload/v1622220385/strudel_1_ruyq1x.png",
          category: "strudel",
          sellerId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Strawberry Tres Leches",
          image:
            "https://res.cloudinary.com/joonyc/image/upload/v1622220385/icecream_1_ix573c.png",
          category: "icecream",
          sellerId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("dishes", null, {});
  },
};
