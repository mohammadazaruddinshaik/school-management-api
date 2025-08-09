const express = require('express');
const router = express.Router();
const schoolController = require('../controllers/schoolController');

// Add a new school
router.post('/addSchool', schoolController.addSchool);

// List all schools
router.get('/listSchools', schoolController.listSchools);

module.exports = router;