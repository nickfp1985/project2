module.exports = function(sequelize, DataTypes) {

  let Message = sequelize.define("Message", {
    username: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
  return Message;
};
