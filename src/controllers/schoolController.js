const School = require('../models/schoolModel');


exports.addSchool = async (req, res) => {
  try {
    const { name, address, latitude, longitude } = req.body;

    if (!name || !address || latitude === undefined || longitude === undefined) {
      return res.status(400).json({ error: 'All fields (name, address, latitude, longitude) are required' });
    }

    const lat = parseFloat(latitude);
    const lng = parseFloat(longitude);

    if (isNaN(lat) || isNaN(lng)) {
      return res.status(400).json({ error: 'Latitude and longitude must be valid numbers' });
    }

    const insertId = await School.addSchool({
      name: String(name).trim(),
      address: String(address).trim(),
      latitude: lat,
      longitude: lng
    });

    res.status(201).json({ message: 'School added successfully', id: insertId });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error', details: error.message });
  }
};

function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

exports.listSchools = async (req, res) => {
  try {
    const userLat = parseFloat(req.query.latitude);
    const userLon = parseFloat(req.query.longitude);

    if (isNaN(userLat) || isNaN(userLon)) {
      return res.status(400).json({ error: 'Valid latitude and longitude query parameters are required.' });
    }

    const allSchools = await School.getAllSchools();

    const schoolsWithDistance = allSchools.map(school => {
      const distance = getDistance(userLat, userLon, school.latitude, school.longitude);
      return { ...school, distance: parseFloat(distance.toFixed(2)) };
    });

    const sortedSchools = schoolsWithDistance.sort((a, b) => a.distance - b.distance);

    res.status(200).json(sortedSchools);

  } catch (error) {
    console.error('Controller Error:', error);
    res.status(500).json({ error: 'An internal server error occurred while fetching schools.' });
  }
};