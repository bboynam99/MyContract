'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserCurrencyAddress = sequelize.define('UserCurrencyAddress', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    address: {
      type: DataTypes.STRING
    },

    cipher: {
      type: DataTypes.STRING
    },
    balance: {
      type: DataTypes.FLOAT
    },

    uniqueId: {
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {});
  UserCurrencyAddress.associate = function(models) {

    // // associations can be defined here
    UserCurrencyAddress.belongsTo(models.Client, {
      foreignKey: 'client_id',
      allowNull: true,
      onDelete: 'CASCADE',
    });

  };
  return UserCurrencyAddress;
};
