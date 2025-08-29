# BrightMinds Hub

## Overview

BrightMinds Hub is a collaborative platform designed for students to share ideas, notes, and work together on projects and community services. The application focuses on relay-style collaboration where students can pass ideas like a relay baton, fostering innovation through teamwork. The platform serves as a centralized hub for academic collaboration and knowledge sharing among student communities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application uses a server-side rendered approach with Flask templates and Bootstrap 5 for responsive design. The frontend architecture consists of:

- **Template Engine**: Jinja2 templates served by Flask
- **CSS Framework**: Bootstrap 5 for responsive components and grid system
- **Custom Styling**: CSS with gradient backgrounds and modern animations
- **JavaScript**: Vanilla JavaScript for interactive features like smooth scrolling and modal dialogs
- **Typography**: Google Fonts (Poppins) for modern font styling
- **Icons**: Font Awesome for consistent iconography

### Backend Architecture
The backend is built using Flask with a minimal routing structure:

- **Web Framework**: Flask with environment-based configuration
- **Session Management**: Flask sessions with configurable secret key
- **Route Structure**: RESTful routes for home, new posts, login, and registration
- **Development Server**: Flask development server with hot reloading
- **Static Assets**: Standard Flask static file serving

### Design Patterns
- **Single Page Application Feel**: All routes currently render the same template with client-side navigation
- **Component-Based Styling**: CSS organized by sections (header, hero, navigation, etc.)
- **Progressive Enhancement**: Basic HTML structure enhanced with JavaScript interactions

### Current Limitations
- No database integration implemented yet
- All routes serve the same template (index.html)
- No authentication or user management system
- No API endpoints for data operations
- No form handling or data persistence

## External Dependencies

### Frontend Dependencies
- **Bootstrap 5**: CSS framework loaded via CDN for responsive design
- **Font Awesome 6.4.0**: Icon library via CDN for UI icons
- **Google Fonts**: Poppins font family for typography
- **Unsplash**: External image hosting for hero section imagery

### Backend Dependencies
- **Flask**: Python web framework for server-side rendering
- **Python Standard Library**: os module for environment variable access

### Development Dependencies
- **Flask Development Server**: Built-in server for local development with auto-reload

### Planned Integrations
The application architecture suggests future integration points for:
- Database system (likely SQL-based given the academic collaboration context)
- User authentication system
- File upload and sharing capabilities
- Real-time collaboration features
- Email notifications for relay project handoffs