# User Management REST API

A simple RESTful API for managing users built with Node.js and Express.js, featuring in-memory data storage, comprehensive middleware, and proper error handling.

## Assignment Overview

This project fulfills the requirements for building a RESTful API using Node.js and Express, covering:
- REST API routing and HTTP methods
- Middleware implementation (logging & validation)
- Error handling with appropriate status codes
- In-memory data storage

## Features

- **CRUD Operations**: Create, Read, Update, Delete users
- **Input Validation**: Middleware to validate required fields
- **Request Logging**: Comprehensive logging of all API requests
- **Error Handling**: Meaningful error messages with proper HTTP status codes
- **In-Memory Storage**: Simple array-based data persistence

## Project Structure

```
assign-node/
│
├── app.js                     # Main application entry point
├── data/
│   └── users.js              # In-memory user data array
├── controllers/
│   └── userController.js     # Business logic for user operations
├── middlewares/
│   ├── logger.js             # Request logging middleware
│   └── validateUser.js       # Input validation middleware
├── routes/
│   └── userRoutes.js         # API route definitions
├── package.json              # Project dependencies and scripts
└── README.md                 # Project documentation
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation Steps

1. **Clone or download the project**
   ```bash
   cd assign-node
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   npm start
   ```
   
   Or for development with auto-restart:
   ```bash
   npm run dev
   ```

4. **Server will start on port 4000**
   ```
    Server running on port 4000
   ```

## API Documentation

### Base URL
```
http://localhost:4000/api
```

### User Object Structure
```json
{
  "id": "1",
  "firstName": "Anshika",
  "lastName": "Agarwal",
  "hobby": "Teaching"
}
```

### API Endpoints

| Method | Endpoint | Description | Status Codes |
|--------|----------|-------------|--------------|
| GET | `/users` | Fetch all users | 200 |
| GET | `/users/:id` | Fetch user by ID | 200, 404 |
| POST | `/users` | Create new user | 201, 400 |
| PUT | `/users/:id` | Update user by ID | 200, 400, 404 |
| DELETE | `/users/:id` | Delete user by ID | 200, 404 |

### Request Examples

#### 1. Get All Users
```http
GET http://localhost:4000/api/users
```

#### 2. Get User by ID
```http
GET http://localhost:4000/api/users/1
```

#### 3. Create New User
```http
POST http://localhost:4000/api/users
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "hobby": "Gaming"
}
```

#### 4. Update User
```http
PUT http://localhost:4000/api/users/1
Content-Type: application/json

{
  "hobby": "Reading"
}
```

#### 5. Delete User
```http
DELETE http://localhost:4000/api/users/1
```

## Middleware Features

### 1. Request Logger (`middlewares/logger.js`)
- Logs all incoming requests with method, URL, and response status
- Format: `METHOD URL -> STATUS_CODE`
- Example: `POST /api/users -> 201`

### 2. Input Validation (`middlewares/validateUser.js`)
- Validates required fields for POST and PUT operations
- Required fields: `firstName`, `lastName`, `hobby`
- Returns 400 status with error message for missing fields

## Error Handling

The API implements comprehensive error handling:

### Status Codes
- **200**: Success (GET, PUT, DELETE)
- **201**: Created successfully (POST)
- **400**: Bad request (validation errors)
- **404**: Resource not found
- **500**: Internal server error

### Error Response Format
```json
{
  "error": "Descriptive error message"
}
```

### Common Error Scenarios
1. **Missing Required Fields (400)**
   ```json
   {
     "error": "firstName, lastName, and hobby are required"
   }
   ```

2. **User Not Found (404)**
   ```json
   {
     "error": "User not found"
   }
   ```

3. **Invalid Route (404)**
   ```json
   {
     "error": "Route not found"
   }
   ```

## 🗃️ Data Storage

- **Type**: In-memory array storage
- **Location**: `data/users.js`
- **Persistence**: Data resets on server restart
- **Initial Data**: Contains 2 sample users (Anshika & Ravi)

## Testing

### Using Postman or Thunder Client

Test the following scenarios to verify all functionality:

1. **Success Cases**:
   - GET all users (200)
   - GET specific user (200)
   - POST new user with valid data (201)
   - PUT update user (200)
   - DELETE user (200)

2. **Error Cases**:
   - GET non-existent user (404)
   - POST with missing fields (400)
   - PUT non-existent user (404)
   - DELETE non-existent user (404)

### Sample Test Data
```json
{
  "firstName": "Test",
  "lastName": "User",
  "hobby": "Testing"
}
```


### Code Comments
- All files include clear comments explaining functionality
- Controllers document each CRUD operation
- Middleware functions explain their purpose and behavior

### Practices Implemented
- MVC-like architecture with separated concerns
- Consistent error handling across all endpoints
- Proper HTTP status code usage
- Input validation for data integrity
- Request logging for debugging and monitoring

## Requirements Fulfilled

- ✅ **Node.js Project Setup**
- ✅ **REST API Routes**
- ✅ **Middleware Implementation**
  - ✅ Request logging
  - ✅ Input validation
- ✅ **Error Handling**
- ✅ **In-Memory Data Source**
- ✅ **Code Comments**

## 🔧 Scripts

- `npm start`: Start the server in production mode
- `npm run dev`: Start the server with nodemon for development

## 📦 Dependencies

- **express**: Web framework for Node.js
- **nodemon** (dev): Auto-restart server on file changes

## 🚦 Getting Started Quickly

1. Install dependencies: `npm install`
2. Start server: `npm start`
3. Test with GET: `http://localhost:4000/api/users`
4. Use Postman for comprehensive testing

---

**Author**: Anmol Shukla
