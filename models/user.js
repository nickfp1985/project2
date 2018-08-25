module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // Giving the User model a name of type STRING
    username: DataTypes.STRING,
    password: DataTypes.STRING
  });

  User.associate = function(models) {
    // Associating Author with Posts
    // When an User is deleted, also delete any associated Posts
    User.hasMany(models.Message, {
      onDelete: "cascade"
    });
  };

  return User;
};
