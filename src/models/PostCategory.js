// as chaves o significado de cada ass : Alias: 'categories_e_post'.
// Chave estrangeira: 'post__e_id'.Tabela de junção: PostCategoryModel.Outra chave estrangeira: 'category_e_id'.
// Resumo do código: Este código eu faço a junçao de uma relação de muitos para muitos entre as 
//tabelas 'blog_e_posts' e 'categories' usando uma tabela de junção chamada 'posts_e_categories'.
// Conteúdo do dia 01: ORM - Interface da aplicação com o banco de dados-Model

const PostCategory = (sequelize, DataTypes) => {
    const PostCategoryModel = sequelize.define(
      'PostCategory',
      {
        postId: {
            primaryKey: true,
          type: DataTypes.INTEGER,
          references: {
              key: 'id',
            model: 'blog_e_posts',
          },
        },
        categoryId: {
            primaryKey: true,
          type: DataTypes.INTEGER,
          references: {
              key: 'id',
            model: 'categories',
          },
        },
      },
      {
        timestamps: false,
        underscored: true,
        tableName: 'posts_e_categories',
      }
    );
  
    PostCategoryModel.associate = (models) => {
      models.Category.belongsToMany(models.BlogPost, {
        as: 'blog_posts_e_category',
        foreignKey: 'category_e_id',
        through: PostCategoryModel,
        otherKey: 'post_e_id',
      });
      models.BlogPost.belongsToMany(models.Category, {
        as: 'categories_e_post',
        foreignKey: 'post_e_id',
        through: PostCategoryModel,
        otherKey: 'category_e_id',
      });
    };
  
    return PostCategoryModel;
  };

  module.exports = PostCategory;
  