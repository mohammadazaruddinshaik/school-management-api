const db = require('../config/db');

const addSchool = async (schoolData) => {
  const { name, address, latitude, longitude } = schoolData;
  const query = `INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)`;

  const result = await db.execute(query, [name, address, latitude, longitude]);
  return result.insertId;
};
const getAllSchools = async () => {
  const query = `SELECT * FROM schools`;
  // This destructuring is CRUCIAL. It extracts the array of rows.
  const [rows] = await db.execute(query);
  return rows; // This now correctly returns an array.
};
module.exports = {
  addSchool,
  getAllSchools
};