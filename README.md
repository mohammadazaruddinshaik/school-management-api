# Node.js School Management API

## Overview
This project implements a set of RESTful APIs for managing school data using **Node.js**, **Express.js**, and **MySQL**. The system enables users to:

- Add new schools with details such as name, address, and geographical coordinates.
- Retrieve a list of schools sorted by their proximity to a user-specified location.

## Features

- **Add School API** (`POST /addSchool`):  
  Allows adding a new school to the database with validation on input fields.

- **List Schools API** (`GET /listSchools`):  
  Retrieves all schools sorted by their geographical distance from the user's location.

## Technology Stack

- Node.js
- Express.js
- MySQL
- Deployment on Render
- Postman for API testing

---

## Database Setup

Create a `schools` table in MySQL with the following schema:

| Field     | Type     | Description            |
| --------- | -------- | ---------------------- |
| id        | INT      | Primary Key, Auto Increment |
| name      | VARCHAR  | School name            |
| address   | VARCHAR  | School address         |
| latitude  | FLOAT    | Latitude coordinate    |
| longitude | FLOAT    | Longitude coordinate   |

---

## API Endpoints

### 1. Add School

- **Endpoint:** `/addSchool`
- **Method:** `POST`
- **Payload:**
  ```json
  {
    "name": "School Name",
    "address": "School Address",
    "latitude": 12.34567,
    "longitude": 76.54321
  }
