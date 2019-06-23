module.exports = function(sequelize, DataTypes) {
  const Projects = sequelize.define('Projects', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    info: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    imgpath: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    giturl: {
      type: DataTypes.STRING,
      allowNull: false
    },
    heroku: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Projects;
}