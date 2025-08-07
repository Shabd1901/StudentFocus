# Student Productivity Hub

## Overview

The Student Productivity Hub is a comprehensive Flask-based web application designed to help students manage their academic life through five core features: mood tracking with calendar integration, note-taking with date-specific entries, task planning with custom categories, Pomodoro timer for productivity sessions, and an Eisenhower Matrix for task prioritization. The application provides a responsive interface with light/dark theme toggle and a sidebar navigation system that allows students to monitor their emotional well-being, organize their thoughts, track productivity sessions, and plan their academic tasks in one centralized location.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application uses a template-based architecture with Jinja2 templating:
- **Base Template Pattern**: A single `base.html` template provides consistent layout, navigation, and styling across all pages
- **Component Structure**: Individual page templates extend the base template for mood tracking, notes, planner, Pomodoro timer, and Eisenhower Matrix functionality
- **Responsive Design**: Bootstrap framework with custom CSS provides mobile-first responsive design
- **Theme System**: Implements both light and dark themes with user toggle capability using Bootstrap's theme system
- **Interactive Calendar**: Custom calendar component for mood tracking with color-coded date indicators
- **Modal System**: Bootstrap modals for session notes, day details, and task management interfaces

### Backend Architecture
The backend follows a simple Flask application pattern:
- **Route-Based Navigation**: Clean URL routing with dedicated endpoints for mood tracking, notes, planner, Pomodoro timer, and priority matrix
- **Session Management**: Flask sessions configured with environment-based secret key for security
- **Static Asset Serving**: Organized static files structure for CSS, JavaScript, and other assets
- **Development Configuration**: Debug mode enabled with flexible host/port configuration
- **Client-Side Storage**: LocalStorage-based data persistence for mood entries, notes, tasks, Pomodoro sessions, and user preferences

### User Interface Design
The application implements a sidebar navigation pattern:
- **Fixed Sidebar**: Persistent navigation menu with visual indicators for active pages
- **Icon-Based Navigation**: Font Awesome icons provide visual cues for each application section
- **Card-Based Content**: Bootstrap cards organize content into logical, visually distinct sections
- **Interactive Elements**: Buttons and form controls designed for student productivity workflows

### Client-Side Functionality
JavaScript functionality focuses on user engagement and productivity:
- **Confetti Celebrations**: Motivational visual feedback system using canvas-confetti for achievement recognition
- **Dynamic Content**: Client-side interactions for mood selection, note management, task planning, timer controls, and matrix task organization
- **Pomodoro Timer**: Full-featured timer with work/break cycles, session tracking, and productivity notes
- **Calendar Integration**: Interactive calendar showing mood history and daily activity summaries
- **Drag-and-Drop**: Task movement between priority quadrants in the Eisenhower Matrix
- **Real-Time Updates**: Live timer displays, dynamic statistics, and immediate UI feedback
- **Local Data Management**: Comprehensive localStorage system for offline functionality
- **Theme Persistence**: User theme preference storage and automatic application

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
- **Local Storage**: Comprehensive client-side data persistence for mood entries, notes, tasks, Pomodoro sessions, custom categories, and user preferences
- **Date API**: JavaScript date handling for task due dates, mood calendar, session timestamps, and scheduling features
- **Audio Context**: Web Audio API for timer sound notifications and productivity alerts
- **Drag and Drop**: HTML5 drag-and-drop API for task movement between matrix quadrants
- **Modal API**: Bootstrap modal system for session notes, day details, and category management

## Recent Updates (August 2025)

### Major Feature Additions
1. **Light/Dark Theme Toggle**: User can switch between light and dark themes with preference persistence
2. **Pomodoro Timer System**: Complete productivity timer with 25/5/30 minute presets, custom durations, auto-cycling between work and break periods
3. **Eisenhower Priority Matrix**: Four-quadrant task categorization system with drag-and-drop functionality
4. **Calendar Integration**: Interactive mood calendar with color-coded date indicators and daily activity summaries
5. **Enhanced Task Management**: Custom category creation, task editing capabilities, and improved organization
6. **Date-Specific Notes**: Ability to add and organize notes by specific dates
7. **Session Tracking**: Detailed Pomodoro session history with productivity ratings and descriptions

### Enhanced User Experience
- **Continuous Pomodoro Cycles**: Timer automatically transitions between work and break periods
- **Session Note Popups**: Post-session reflection prompts for productivity tracking
- **Calendar Day Details**: Click any date to view mood entries, Pomodoro sessions, notes, and tasks
- **Custom Categories**: Users can create and manage their own task categories
- **Task Editing**: Full edit capability for existing tasks
- **Theme Persistence**: User theme choice remembered across sessions
- **Visual Feedback**: Enhanced confetti celebrations and success messages
- **Keyboard Shortcuts**: Spacebar to start/pause Pomodoro timer

### Data Management
- **Mood Entries**: Stored with date, mood level, notes, and timestamps
- **Pomodoro Sessions**: Duration, type (focus/break), descriptions, ratings, and timestamps
- **Enhanced Notes**: Date-specific storage with improved organization
- **Task Categories**: User-defined categories with persistence
- **Matrix Tasks**: Separate storage for priority-categorized tasks with drag-and-drop updates