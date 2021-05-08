//accociations refers to foreign and primary keys

//TODO after database is created, go through all tables and add all keys here below
module.exports = {
    associate: models => {

        /** this is an example of a tables connections
         //users
         models.departments.hasMany(models.users, {foreignKey: "departmentId"})
         models.roles.hasMany(models.users, {foreignKey: "roleId"})
         models.statuses.hasMany(models.users, {foreignKey: "statusId"})
         models.users.belongsTo(models.departments, {foreignKey: "departmentId"});
         models.users.belongsTo(models.roles, {foreignKey: "roleId"});
         models.users.belongsTo(models.statuses, {foreignKey: "statusId"});


         **/

    }
}