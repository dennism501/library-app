import { Knex } from "knex";

interface IKnexConfig {
  [key: string]: Knex.Config
}


//Change the filename path to your file location
const configs: IKnexConfig = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "D:/Express Apps/library-app/src/database/dev.sqlite3",
    },
    debug: true,
    useNullAsDefault: true,
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};

export default configs
