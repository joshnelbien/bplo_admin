module.exports = (sequelize, DataTypes) => {
  const ClientApplication = sequelize.define("client_application", {
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

  return ClientApplication;
};
