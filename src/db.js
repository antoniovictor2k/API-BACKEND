const { Sequelize } = require('sequelize');

const dbSequelize = new Sequelize('antonio', 'root', 'vi93462001', {
    host: 'localhost',
    dialect:'mssql'
  });

module.exports=dbSequelize;