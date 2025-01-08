const pool = require("./pool");

async function registerUser(username, password) {
  const query =
    "INSERT INTO users (username, password, membership_status, admin) VALUES ($1, $2, $3, $4);";
  const values = [username, password, 0, 0];
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

async function changeAdmin(username, admin_status) {
  const query = "UPDATE users SET admin = $2 WHERE username = $1;";
  const values = [username, admin_status];
  await pool.query(query, values);
}

module.exports = {
  registerUser,
  findUser,
  getAllMessages,
  postMessage,
  deleteMessage,
  changeMembership,
  changeAdmin,
};
