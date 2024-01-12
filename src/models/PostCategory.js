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
        foreignKey: 'post_id',
        through: PostCategoryModel,
        otherKey: 'category_e_id',
      });
    };
  
    return PostCategoryModel;
  };
  
  module.exports = PostCategory;
  