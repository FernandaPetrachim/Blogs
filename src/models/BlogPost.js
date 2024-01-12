// Resumo do código: COm este código consigo criar um modelo Sequelize para representar 
// postagens de um blog no banco de dados, com associação a usuários e algumas configurações 
const BlogPost = (sequelize, DataTypes) => {
    const defineBlogPostModel = sequelize.define('BlogPost', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: {
          foreignKey: true,
        type: DataTypes.INTEGER,
      },
      updated: DataTypes.DATE,
      published: DataTypes.DATE,
    },
    {
        underscored: true,
        timestamps: false,
      tableName: 'blog_posts',
    });
  
    defineBlogPostModel.associate = (models1) => {
        defineBlogPostModel.belongsTo(models1.User, {
          as: 'user',
        foreignKey: 'userId',
      });
    };
  
    return defineBlogPostModel;
  };
  
  module.exports = BlogPost;