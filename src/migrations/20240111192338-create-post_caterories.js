'use strict';
// realizado com material de apoio da aula 01: ORM - Interface da aplicação com o banco de dados

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts_categories', {
      categoryId: {
        field: 'category_id',
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          key: 'id',
          model: 'categories'
        }
      },
      postId: {
        field: 'post_id',
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          key: 'id',
          model: 'categories'
        }
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('posts_categories');
  }
};
