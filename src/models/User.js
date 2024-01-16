//Exercicío 2 definindo  um modelo de usuário com algumas configurações específicas
//Com configurações pedidas pela atividade
const UserTable = (sequelize, DataTypes) => {
    const UserModels = sequelize.define('User', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      displayName: DataTypes.STRING,
    }, 
    {
      email: DataTypes.STRING,
    },
    {
      password: DataTypes.STRING,
    }, {
      image: DataTypes.STRING,
    },
    {
      tableName: 'users',
      underscored: true,
      timestamps: false,
    });
  
    UserModels.associate = (models) => {
      UserModels.hasMany(models.BlogPost, {
          as: 'blogPosts',
        foreignKey: 'userId',
      });
    };
  
    return UserModels;
  };
  
  module.exports = UserTable;
  