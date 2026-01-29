# Stock Trading — Full Stack Learning Project
A full-stack stock trading web application built using **HTML, CSS, Bootstrap, React.js, Node.js, Express.js, and MongoDB**.  
This project is inspired by modern online brokerage platforms and is developed for **learning purposes**.

## Project Overview
This project allows users to simulate stock trading activities including viewing stock prices, buying/selling stocks, tracking portfolio performance, and more.
It provides a full-stack experience with a frontend, dashboard, and backend server with database integration.
The interface is clean, responsive, and user-friendly, with features similar to real-world stock trading platforms.
It’s ideal for learning modern full-stack web development, API integration, and data visualization.

## Features
- **User Authentication**: Sign up and login
- **Dashboard**: View portfolio, stock prices, market trends, and transactions
- **Stock Trading**: Buy and sell stocks
- **Portfolio Tracking**: Monitor your stock holdings and overall balance
- **Search Stocks**: Look up stock prices
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Backend API**: Handles user data, transactions, and stock information
- **Database Integration**: MongoDB stores user profiles, transactions, and portfolio data
- **Interactive Charts**: Display stock visualization using react-chartjs-2
- **Notifications**: Alerts for successful login and signup using react-toastify
- **Multi-page Routing**: Navigate between pages using react-router-dom

## Technologies Used
- **HTML** – Structure of pages
- **CSS & Bootstrap** – Styling and responsive layout
- **JavaScript** – Core language for dynamic behavior and logic in React
- **React.js** – Dynamic UI and component-based architecture
- **Node.js & Express.js** – Server-side logic and API routing
- **MongoDB** – Database for storing user data, portfolio, and transactions

### Tools & Libraries
- Passport (passport-local, passport-local-mongoose) for user authentication
- React-chartjs-2 for stock visualization
- React Router for multi-page routing
- dotenv for environment variable management

## Project Structure
```
stock-trading/
│
├── frontend/
│ ├── public/
│ │ └── images/ # Landing page images
│ ├── src/
│ │ ├── landing_pages/ # Pages like Home, About, Pricing, Support
│ │ ├── main.jsx # React entry point
│ └── package.json
│
├── dashboard/
│ ├── public/
│ │ └── images/ # Dashboard-specific images
│ ├── src/
│ │ ├── components/ # Dashboard components
│ │ ├── main.jsx # Dashboard React entry point
│ └── package.json
│
├── backend/
│ ├── controllers/ # Logic 
│ ├── models/ # MongoDB schemas and models
│ ├── routes/ # API endpoints
│ ├── middleware/ # Auth handling
│ ├── utils/ # Utility functions
│ │ └── SecretToken.js # JWT token generation & verification
│ ├── index.js # Entry point
│ └── package.json
│
└── README.md # Project documentation
```

## Learning Outcomes
By building this project, I learned:

### Frontend Skills -
- Building component-based UI with React.js
- Implementing responsive designs with Bootstrap and CSS
- Managing state and props for dynamic interfaces
- Multi-page navigation with react-router-dom
- Integrating charts and data visualization with react-chartjs-2
- Adding real-time notifications using react-toastify

### Backend Skills
- Creating APIs with Node.js and Express.js
- Database design and schema modeling with MongoDB & Mongoose
- Middleware usage for auth handling
- Authentication using Passport.js and passport-local-mongoose
- Error handling with try-catch
- Environment management with dotenv

### Full-Stack Skills
- Connecting frontend and backend via Axios API calls
- Managing user sessions with cookies
- Handling asynchronous operations in React and Node.js
- Understanding the flow of data


## Note / Disclaimer
This project is for learning purposes.
It does not involve real money, real stocks, or live trading. Any stock prices or trades simulated in this application are for practice only.

Do not use this project for real financial transactions.

