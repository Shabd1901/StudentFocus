# Student Productivity Hub

## Overview

The Student Productivity Hub is a Flask-based web application designed to help students manage their academic life through three core features: mood tracking, note-taking, and task planning. The application provides a clean, dark-themed interface with a sidebar navigation system that allows students to monitor their emotional well-being, organize their thoughts, and plan their academic tasks in one centralized location.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application uses a template-based architecture with Jinja2 templating:
- **Base Template Pattern**: A single `base.html` template provides consistent layout, navigation, and styling across all pages
- **Component Structure**: Individual page templates extend the base template for mood tracking, notes, and planner functionality
- **Responsive Design**: Bootstrap framework with custom CSS provides mobile-first responsive design
- **Dark Theme**: Implements Replit's dark theme variant of Bootstrap for consistent visual experience

### Backend Architecture
The backend follows a simple Flask application pattern:
- **Route-Based Navigation**: Clean URL routing with dedicated endpoints for each feature area
- **Session Management**: Flask sessions configured with environment-based secret key for security
- **Static Asset Serving**: Organized static files structure for CSS, JavaScript, and other assets
- **Development Configuration**: Debug mode enabled with flexible host/port configuration

### User Interface Design
The application implements a sidebar navigation pattern:
- **Fixed Sidebar**: Persistent navigation menu with visual indicators for active pages
- **Icon-Based Navigation**: Font Awesome icons provide visual cues for each application section
- **Card-Based Content**: Bootstrap cards organize content into logical, visually distinct sections
- **Interactive Elements**: Buttons and form controls designed for student productivity workflows

### Client-Side Functionality
JavaScript functionality focuses on user engagement:
- **Confetti Celebrations**: Motivational visual feedback system using canvas-confetti for achievement recognition
- **Dynamic Content**: Client-side interactions for mood selection, note management, and task planning
- **Fallback Systems**: Graceful degradation when external libraries are unavailable

## External Dependencies

### Frontend Libraries
- **Bootstrap CSS**: Replit's dark theme variant for consistent UI components and responsive grid system
- **Font Awesome**: Icon library providing visual elements for navigation and interactive components
- **Canvas Confetti**: Client-side celebration effects library for motivational user feedback

### Backend Framework
- **Flask**: Lightweight Python web framework providing routing, templating, and session management
- **Jinja2**: Template engine integrated with Flask for dynamic HTML generation

### Development Environment
- **Python Runtime**: Server-side application runtime with Flask development server
- **Static File Serving**: Flask's built-in static file serving for CSS, JavaScript, and asset delivery

### Browser APIs
- **Local Storage**: Implicit dependency for client-side data persistence in note-taking and task management features
- **Date API**: JavaScript date handling for task due date management and scheduling features