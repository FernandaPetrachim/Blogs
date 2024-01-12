const Category1 = (sequelize, DataTypes) => {
    const CategorieModel = sequelize.define('Category', {
      id: {
          type: DataTypes.INTEGER,
        primaryKey: true,
      },
      name: DataTypes.STRING,
    },
    {
        tableName: 'categories',
    });
    return CategorieModel;
  };

  module.exports = Category1;