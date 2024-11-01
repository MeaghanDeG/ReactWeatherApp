Weather App
-----------

A responsive weather application built with React and Vite. This project allows users to search for weather data by city, displaying current temperature, humidity, and wind speed along with corresponding weather icons and backgrounds.

Table of Contents
-----------------

Features
Technologies
Getting Started
Available Scripts
Configuration
License


Features
--------
Live Weather Search: Retrieve real-time weather information by city name.
Responsive Design: Optimized for mobile, tablet, and desktop views.
Dynamic Backgrounds and Icons: Updates backgrounds and icons based on the weather condition.
Loading Indicator: Displays a loading animation while fetching data.
Error Handling: Informs users if a location is not found.

Technologies
------------
React – Component-based library for building user interfaces.
Vite – Fast and minimalistic frontend tool for bundling.
OpenWeather API – Source for current weather data.
Font Awesome – Icon library for adding scalable vector icons.

Getting Started
---------------
-Prerequisites
Node.js (v14 or higher) and npm installed on your machine.
-Installation
1)Clone the repository:

bash

git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

2)Install dependencies:

bash

npm install

3)Set up environment variables:

Create a .env file in the root directory.
Add your OpenWeather API key:

VITE_WEATHER_API_KEY=your_openweather_api_key

4)Run the app:

bash

npm run dev

5)Open your browser and visit http://localhost:5173 to see the app.

Available Scripts
-----------------
npm run dev: Start the development server with hot module replacement (HMR).
npm run build: Create an optimized production build.
npm run preview: Locally preview a production build.
npm run lint: Run ESLint checks on the codebase.


Configuration
-------------
This project includes two official plugins for React integration:

@vitejs/plugin-react – Uses Babel for Fast Refresh, a hot-reloading feature.
@vitejs/plugin-react-swc – Uses SWC for Fast Refresh as an alternative to Babel.

To switch plugins, you can install the desired plugin and update the configuration in vite.config.js.

License
-------
This project is licensed under the MIT license
