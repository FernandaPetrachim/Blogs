
// Resumo do código: Com este código defino um modelo de categoria que pode ser 
// usatilizado para interagir com uma tabela chamada 'categories' em um banco de dados utilizando Sequelize.

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