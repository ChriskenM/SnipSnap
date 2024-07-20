
#SnipSnap

## Description
This App is a full-stack web application that allows users to list their work, get latest trends and to book hairstyle appointments. It features user authentication, booking creation, and management of bookings including cancellation.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Usage Guide](#usage-guide)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features
- User registration and authentication
- Create, view, and cancel hairstyle bookings
- Responsive design for mobile and desktop use

## Technologies Used
- Frontend: React.js, Tailwind CSS
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JSON Web Tokens (JWT)

## Prerequisites
Before you begin, ensure you have the following installed:
- Node.js (v14 or later)
- npm (usually comes with Node.js)
- MongoDB

## Installation

### Step 1: Clone the repository
```
git clone https://github.com/ChriskenM/SnipSnap.git
cd client
cd Server
```

### Step 2: Install dependencies
Install backend dependencies:
```
npm install
```

## Configuration

### Step 3: Set up environment variables
Create a `.env` file in the backend directory with the following variables:
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Replace `your_mongodb_connection_string` with your actual MongoDB connection string and `your_jwt_secret` with a secure random string.

## Running the Application

### Step 4: Start the backend server
From the backend directory:
```
npm start
```

### Step 5: Start the frontend application
Open a new terminal, navigate to the frontend directory, and run:
```
npm start
```

The application should now be running on `http://localhost:3000`

## Usage Guide

1. **Registration/Login**:
   - Navigate to the registration page and create an account.
   - Log in with your credentials.

2. **Creating a Booking**:
   - Click on "Create Booking" in the navigation menu.
   - Fill out the booking form with hairstyle name, type, date/time, and optional music preference.
   - Submit the form to create your booking.

3. **Viewing Bookings**:
   - After logging in, your bookings will be displayed on the dashboard.
   - You can view details of each booking including status.

4. **Cancelling a Booking**:
   - In the bookings list, find the booking you wish to cancel.
   - Click the "Cancel Booking" button next to the booking.
   - Confirm the cancellation when prompted.

## API Endpoints

- POST `/api/auth/register` - Register a new user
- POST `/api/auth/login` - Login user
- POST `/api/booking` - Create a new booking
- GET `/api/booking/user` - Get all bookings for the logged-in user
- PUT `/api/booking/:id/cancel` - Cancel a specific booking

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.




```
├─ .gitignore
├─ client
│  ├─ .gitignore
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ postcss.config.js
│  ├─ public
│  │  ├─ img
│  │  │  ├─ braids.jpg
│  │  │  └─ makeup.jpg
│  │  ├─ index.html
│  │  ├─ index.js
│  │  └─ styles.css
│  ├─ README.md
│  ├─ src
│  │  ├─ App.js
│  │  ├─ App.test.js
│  │  ├─ componets
│  │  │  ├─ Card.js
│  │  │  ├─ Layout.js
│  │  │  └─ Navbar.js
│  │  ├─ index.css
│  │  ├─ index.html
│  │  ├─ index.js
│  │  ├─ pages
│  │  │  ├─ About.js
│  │  │  ├─ Booking.js
│  │  │  └─ Home.js
│  │  ├─ reportWebVitals.js
│  │  ├─ setupTests.js
│  │  └─ styles.css
│  ├─ tailwind-default.config.js
│  └─ tailwind.config.js
├─ README.md
└─ Server
   ├─ package-lock.json
   ├─ package.json
   └─ server.js

```