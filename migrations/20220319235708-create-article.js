'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Articles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      author: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      body: {
        type: Sequelize.STRING
      },
<<<<<<< Updated upstream:migrations/20220319235708-create-article.js
=======
      comments: {
        type: Sequelize.OBJECT,
        references: {
          model: 'Comments',
          key: 'id'
        }
      },
>>>>>>> Stashed changes:models/migrations/20220319235708-create-article.js
      date: {
        type: Sequelize.DATE
      },
      hidden: {
        type: Sequelize.BOOLEAN
      },
      isFavorite: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Articles');
  }
};