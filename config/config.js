const dbconfigs = {
  "development": {
    "username": "root",
    "password": "root",
    "database": "expresstodo",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },

  "awsConfig ": {
    "username": process.env.RDS_USERNAME || "root",
    "password": process.env.RDS_PASSWORD || "root",
    "database": process.env.RDS_DB_NAME || "expresstodo"  ,
    "host": process.env.RDS_HOSTNAME || "127.0.0.1",
    "dialect": "mysql"
  }
}

module.exports = dbconfigs
