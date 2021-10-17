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
    "username": "root" || process.env.RDS_USERNAME,
    "password": "root" || process.env.RDS_PASSWORD,
    "database": "database_production" || process.env.RDS_DB_NAME,
    "host": "127.0.0.1" || process.env.RDS_HOSTNAME,
    "dialect": "mysql"
  }
}

module.exports = dbconfigs
