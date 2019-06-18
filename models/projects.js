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
      type: DataTypes.STRING,
      allowNull: false
    },
    imgpath: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Projects;
}