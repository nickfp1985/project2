module.exports = function(sequelize, DataTypes) {
  let Message = sequelize.define("Message", {
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    username: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });

  return Message;
};
