module.exports = {
  "development": {
    "username": process.env.DEV_DB_USER,
    "password": process.env.DEV_DB_PASSWORD,
    "database": "chitchat",
    "host": "localhost",
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.DEV_DB_USER,
    "password": process.env.DEV_DB_PASSWORD,
    "database": "chitchat",
    "host": "localhost",
    "dialect": "mysql",
    "logging": false
  },
  "production": {
    "use_env_variable": "sulnwdk5uwjw1r2k.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    "dialect": "mysql",
    "username": "vx8hnuv4ar6qktkn",
    "password": "eqzc7jqyhdslwx68",
    "database": "u5xgsyk413mqij1e"
  }
}
