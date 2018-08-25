module.exports = function(sequelize, DataTypes) {

  let Post = sequelize.define("Post", {
    username: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
  return Post;
};
