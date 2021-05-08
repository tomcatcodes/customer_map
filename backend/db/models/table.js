//TODO this is a sample table that needs to be populated after the database is created
/** this is an example table


 const Sequelize = require('sequelize');
 const _users = require("./users");
 const DataTypes = require("sequelize").DataTypes;

 module.exports = function(sequelize, DataTypes) {

    const users = _users(sequelize, DataTypes);

    return sequelize.define('approverList', {
        user_getsapproved: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: users
                //key: 'user_id'
            }
        },
        user_approver: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: users
                //key: 'user_id'
            }
        }
    }, {
        sequelize,
        tableName: 'approverList',
        schema: 'dbo',
        timestamps: false,
        underscored: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: false
    });
};

 This is another example

 const Sequelize = require('sequelize');
 const _issueCategory = require("./issueCategory");
 const DataTypes = require("sequelize").DataTypes;

 module.exports = function(sequelize, DataTypes) {

  const issueCategory = _issueCategory(sequelize, DataTypes);

  return sequelize.define('issueType', {
    issueType_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    issueType_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    issueType_description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    issueCategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: issueCategory
      }
    }
  }, {
    sequelize,
    tableName: 'issueType',
    schema: 'dbo',
    timestamps: true,
    underscored: true,
    createdAt: false,
    updatedAt: false,
    deletedAt: false,
  });
};


 **/