# Portfolio Website

A modern portfolio website built with React, featuring dark/light mode and smooth animations.

## Running the Project Locally

1. Make sure you have Node.js installed (v20 or later)

2. Install the dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5000
```

The application runs both the frontend and backend on port 5000. The server is configured to handle both API requests and serve the React application.

## Important Notes

- The development server will start automatically after running `npm run dev`
- Both frontend and backend run on the same port (5000)
- No additional configuration is needed
- The application uses a unified server setup for both API and frontend

## Troubleshooting

If you encounter any issues:

1. Make sure port 5000 is not in use by another application
2. Check if all dependencies are installed correctly
3. Ensure Node.js version 20 or later is installed
4. Try clearing your browser cache if you see stale content

## Features

- 🌓 Dark/Light mode toggle
- 🎨 Modern UI with animations
- 📱 Fully responsive design
- 🚀 Fast and optimized performance
- 📧 Contact form integration

## Project Structure

- `/client` - Frontend React application
- `/server` - Backend Express server
- `/shared` - Shared types and schemas

## Technologies Used

- React
- TypeScript
- Express
- Tailwind CSS
- Framer Motion
- Wouter (for routing)
- EmailJS (for contact form)