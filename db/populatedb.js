const pool = require("./pool");

// tables: users (firstname, lastname, (username) as id, password, membership_status)
// messages: (title, timestamp, text, created_by (using username as id))
let initTablesSql = `
CREATE TABLE IF NOT EXISTS users
 (id SERIAL PRIMARY KEY, username TEXT UNIQUE, password TEXT, membership_status BOOL, admin BOOL);
 
 CREATE TABLE IF NOT EXISTS messages
 (id SERIAL PRIMARY KEY, title TEXT, message TEXT, created_at TIMESTAMP DEFAULT(CURRENT_TIMESTAMP), created_by TEXT);
 `;

async function makeTables() {
  await pool.query(initTablesSql, []);
}

async function main() {
  await makeTables();
}

main();
