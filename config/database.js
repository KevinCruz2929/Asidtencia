const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ctsinge', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  timezone: 'America/Mexico_City', // Configuración de zona horaria para Sequelize
  dialectOptions: {
    timezone: 'local', // Configuración de zona horaria para la conexión MySQL
  },
  logging: console.log, // Para depurar, puedes usar console.log para ver las consultas SQL
});

module.exports = sequelize;
