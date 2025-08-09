# School Management System 🏫

A Node.js API system for managing school data with location-based services, built with Express.js and MySQL.

## 📋 Task Overview

**Objective:** Implement a set of APIs using Node.js, Express.js framework, and MySQL to manage school data. The system allows users to add new schools and retrieve a list of schools sorted by proximity to a user-specified location.

## ✨ Features

- **Add School API**: Add new schools with location data
- **List Schools API**: Retrieve schools sorted by proximity to user location
- **Input Validation**: Comprehensive validation for all fields
- **Distance Calculation**: Geographical distance sorting between coordinates
- **MySQL Integration**: Robust database operations

## 🛠 Technology Stack

- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Hosting**: Render
- **API Testing**: Postman

## 📁 Project Structure

```
PROJECT/
├── node_modules/
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── schoolController.js
│   ├── models/
│   │   └── schoolModel.js
│   └── routes/
│       └── schoolRoutes.js
├── .env
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── server.js
```

## 🗄 Database Setup

### Schools Table Schema

```sql
CREATE TABLE schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL
);
```

**Fields:**
- `id` - Primary Key (Auto Increment)
- `name` - VARCHAR (School name)
- `address` - VARCHAR (School address)  
- `latitude` - FLOAT (Geographical latitude)
- `longitude` - FLOAT (Geographical longitude)

## 🌐 API Endpoints

### Development URLs
- **Base URL (Local):** `http://localhost:3000`
- **Base URL (Production):** `https://school-management-api-64zg.onrender.com`

### 1. Add School API

**Endpoint:** 
- **Local:** `http://localhost:3000/addSchool`
- **Production:** `https://school-management-api-64zg.onrender.com/addSchool`

**Method:** `POST`  
**Content-Type:** `application/json`

**Payload:**
```json
{
    "name": "Hyderabad Public School",
    "address": "Hyderabad, Telangana, India 500078",
    "latitude": 17.4399,
    "longitude": 78.4983
}
```

**Functionality:**
- Validates input data (non-empty fields, correct data types)
- Adds new school to the schools table
- Returns success message with generated ID

**Response:**
```json
{
    "message": "School added successfully",
    "id": 9
}
```

### 2. List Schools API

**Endpoint:** 
- **Local:** `http://localhost:3000/listSchools`
- **Production:** `https://school-management-api-64zg.onrender.com/listSchools`

**Method:** `GET`  
**Parameters:** `latitude` and `longitude` (query parameters)

**Example Request:**
```
# Local Development
GET http://localhost:3000/listSchools?latitude=17.4399&longitude=78.4983

# Production
GET https://school-management-api-64zg.onrender.com/listSchools?latitude=17.4399&longitude=78.4983
```

**Functionality:**
- Fetches all schools from database
- Calculates geographical distance between user's coordinates and each school
- Sorts schools by proximity (nearest first)
- Returns sorted list with distance information

**Response:**
```json
[
    {
        "id": 1,
        "name": "Hyderabad Public School",
        "address": "Hyderabad, Telangana, India 500078",
        "latitude": 17.439899444580078,
        "longitude": 78.49829864501953,
        "distance": 0
    },
    {
        "id": 2,
        "name": "Dhirubhai Ambani International School",
        "address": "Bandra-Kurla Complex, Bandra East, Mumbai, Maharashtra 400098",
        "latitude": 19.066999847412109,
        "longitude": 72.86669921875,
        "distance": 621.33
    }
]
```

## 🚀 Installation & Setup

1. **Clone Repository**
   ```bash
   git clone https://github.com/mohammadazaruddinshaik/school-management-api.git
   cd school-management-system
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Database Configuration**
   ```sql
   CREATE DATABASE schoolsdb;
   USE schoolsdb;
   -- Run the schools table schema above
   ```

4. **Environment Setup**
   ```env
   DB_HOST=localhost
   DB_USER=your_username
   DB_PASSWORD=your_password
   DB_NAME=schoolsdb
   PORT=3000
   ```

5. **Start Application**
   ```bash
   npm start
   ```

   **Application will run on:** `http://localhost:3000`

## 🎯 Validation Rules

### Add School API Validation:
- **name**: Required, non-empty string
- **address**: Required, non-empty string
- **latitude**: Required, valid float (-90 to 90)
- **longitude**: Required, valid float (-180 to 180)

### List Schools API Validation:
- **latitude**: Required query parameter, valid float
- **longitude**: Required query parameter, valid float

## 📊 Sorting Mechanism

The system calculates geographical distance using the Haversine formula:
- Takes user's latitude and longitude as reference point
- Calculates distance to each school's coordinates
- Sorts results in ascending order (nearest first)
- Distance returned in kilometers

## 🌐 Hosting & Deployment

**Live API Base URL:** `https://school-management-api-64zg.onrender.com`

**Deployment Platform:** Render
- Automatic deployments from GitHub
- Environment variables configured in dashboard
- MySQL database hosted separately

## 📬 Postman Collection

A comprehensive Postman collection is available with:
- **Add School Examples**: Multiple test cases with different school data
- **List Schools Examples**: Various coordinate combinations
- **Expected Responses**: Documented response formats
- **Error Cases**: Invalid input handling examples

**Collection Features:**
- Pre-configured environment variables
- Test assertions for response validation
- Example requests for both APIs
- Documentation for stakeholder testing

## 🔍 API Testing Examples

### Adding Multiple Schools:
1. Hyderabad Public School (Hyderabad)
2. Dhirubhai Ambani International School (Mumbai)
3. Bombay Scottish School (Mumbai)
4. Oakridge International School (Hyderabad)

### Distance Calculation Testing:
- Test from Hyderabad coordinates
- Test from Mumbai coordinates
- Verify sorting accuracy

---

**Backend URL:** https://school-management-api-64zg.onrender.com

For API testing, import the Postman collection and use the live backend URL for all requests.
