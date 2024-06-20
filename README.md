# FlyNow - Flight Booking Website

Welcome to FlyNow, a flight booking website built with the MERN stack (MongoDB, Express.js, React, Node.js). With FlyNow, you can seamlessly book flights and manage your bookings with ease. Our platform also features integrated payment gateway functionality, enabling secure and real-time payments for a smooth and efficient transaction experience.

Deployed project link : https://flynow-five.vercel.app/

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## Installation

To run this project locally, follow these steps:

### Frontend

1. Clone the repository:
   ```bash
   git clone https://github.com/digvijaysingh3023/Airline-Management.git
   ```
2. Navigate to the project directory:
   ```bash
   cd client
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

The frontend application should now be running on `http://localhost:3000`.

### Backend

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the backend server:
   ```bash
   npm start
   ```

The backend server should now be running on `http://localhost:8080`.

## Usage
Note : It may not work as expected locally since the api key and secret are required for razorpay and mongodb url for database connection.

## Technologies Used

- **Frontend**:
  - **React**: A JavaScript library for building user interfaces.
  - **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
  - **JavaScript (ES6+)**: The programming language used to build the application.

- **Backend**:
  - **Node.js**: A JavaScript runtime for server-side development.
  - **Express**: A web application framework for Node.js.
  - **MongoDB**: A NoSQL database for storing flight data.
  - **Razorpay**: For Payment gateway integration.


## Contributing

We welcome contributions to improve this project. To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request on GitHub.
