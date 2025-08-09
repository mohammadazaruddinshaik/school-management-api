const db = require('../config/db');

const addSchool = async (schoolData) => {
  const { name, address, latitude, longitude } = schoolData;
  const query = `INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)`;

  const result = await db.execute(query, [name, address, latitude, longitude]);
  return result.insertId;
};


const getAllSchools = async () => {
  try {
    const query = 'SELECT id, name, address, latitude, longitude FROM schools';
    
    const result = await db.execute(query);


    const rows = result?.[0] ?? [];
    

    return rows;
    
  } catch (error) {
    console.error('Error fetching schools from database:', error);
    return [];
  }
};
module.exports = {
  addSchool,
  getAllSchools
};