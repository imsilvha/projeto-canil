import * as SQLite from 'expo-sqlite';

type DatabaseConnection = SQLite.SQLiteDatabase;

let database: DatabaseConnection | null = null;

export const getDatabase = (): DatabaseConnection => {
  if (!database) {
    database = SQLite.openDatabase('canil-publico.db');
  }
  return database;
};

export const initializeDatabase = () => {
  const db = getDatabase();
  db.exec([
    {
      sql: `CREATE TABLE IF NOT EXISTS example (
        id INTEGER PRIMARY KEY NOT NULL,
        name TEXT NOT NULL
      );`,
      args: [],
    },
  ], false, (_error) => {
    if (_error) {
      console.error('Database initialization failed:', _error);
    }
  });
};
