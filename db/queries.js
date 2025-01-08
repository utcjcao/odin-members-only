const pool = require("./pool");

async function registerUser(firstName, lastName, username, password) {
  const query =
    "INSERT INTO users (firstName, lastName, username, password, membership_status) VALUES ($1, $2, $3, $4, $5);";
  const values = [firstName, lastName, username, password, 0];
  try {
    await pool.query(query, values);
  } catch (error) {
    return error.msg;
  }
  return "success";
}

async function findUser(username) {
  const query = "SELECT * FROM users WHERE username = $1";
  const values = [username];
  const { rows } = await pool.query(query, values);
  return rows;
}

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages", []);
  return rows;
}

async function postMessage(title, message, created_by) {
  const query =
    "INSERT INTO messages (title, message, created_by) VALUES ($1, $2, $3);";
  const values = [title, message, created_by];
  await pool.query(query, values);
}

async function deleteMessage(id) {
  const query = "DELETE FROM messages WHERE id = $1;";
  const values = [id];
  await pool.query(query, values);
}

async function changeMembership(username, membership_status) {
  const query = "UPDATE users SET membership_status = $2 WHERE username = $1;";
  const values = [username, membership_status];
  await pool.query(query, values);
}

module.exports = {
  registerUser,
  findUser,
  getAllMessages,
  postMessage,
  deleteMessage,
  changeMembership,
};
