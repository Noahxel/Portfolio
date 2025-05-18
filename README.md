# Modern Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, containerized with Docker.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive
- ⚡ Fast and optimized
- 🎭 Smooth animations with Framer Motion
- 🐳 Dockerized for easy deployment

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Docker (optional, for containerized deployment)

## Getting Started

### Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

### Docker Deployment

1. Build the Docker image:
   ```bash
   docker build -t portfolio .
   ```
2. Run the container:
   ```bash
   docker run -p 80:80 portfolio
   ```

The application will be available at `http://localhost`.

## Project Structure

```
portfolio/
├── src/
│   ├── components/     # React components
│   ├── App.tsx        # Main application component
│   └── index.tsx      # Application entry point
├── public/            # Static files
├── Dockerfile        # Docker configuration
└── nginx.conf        # Nginx configuration
```

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Docker
- Nginx

## License

MIT
