module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("test", {
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    test: {
      type: DataTypes.STRING,
    },
    tests: {
      type: DataTypes.STRING,
    }
  });

  return User;
};
