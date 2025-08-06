# Personal Portfolio Website

## Overview

A modern, responsive personal portfolio website for M Ammar Amjad, a Frontend Developer and UI/UX Designer. The application showcases skills, education, experience, and projects through an elegant single-page interface with smooth animations, dark mode support, and functional contact forms. Built with React, TypeScript, and modern web technologies, featuring a clean design inspired by contemporary portfolio standards.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Styling**: Tailwind CSS with CSS variables for theming, complemented by shadcn/ui component library
- **State Management**: React Context for theme management, TanStack Query for server state
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized production builds
- **Component Design**: Modular section-based components (Hero, About, Skills, Education, Experience, Projects, Resume, Contact)

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API with structured error handling and request logging middleware
- **Development Setup**: Vite middleware integration for seamless development experience

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Connection**: Neon Database serverless PostgreSQL for cloud hosting
- **Schema Management**: Drizzle Kit for migrations and schema management
- **In-Memory Fallback**: MemStorage implementation for development/testing scenarios
- **Tables**: Users table for authentication, contact_messages table for form submissions

### Authentication and Authorization
- **Current State**: Basic user schema defined but not actively implemented in portfolio context
- **Session Management**: Connect-pg-simple for PostgreSQL session storage (prepared for future use)
- **Security**: Password hashing and validation schemas prepared using Zod

### Email Integration
- **Service**: Nodemailer with Gmail SMTP for contact form submissions
- **Features**: Dual contact methods (main contact form and floating chat widget)
- **Templates**: HTML email formatting with sender details and message content
- **Configuration**: Environment-based email credentials (EMAIL_USER, EMAIL_PASS)

### UI/UX Features
- **Theme System**: Light/dark mode toggle with persistent user preference
- **Animations**: Smooth scroll navigation, fade-in effects, and hover transitions
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Accessibility**: Semantic HTML, keyboard navigation, and screen reader support
- **Performance**: Optimized images, lazy loading, and minimal bundle size

### Development Tools
- **TypeScript Configuration**: Strict mode with comprehensive type checking
- **Code Quality**: ESLint and Prettier integration through Vite
- **Path Aliases**: Organized imports using @ prefix for src directory and @shared for common types
- **Error Handling**: Runtime error overlay for development debugging

## External Dependencies

### Core Framework Dependencies
- **@vitejs/plugin-react**: React integration for Vite build system
- **wouter**: Lightweight routing library for single-page navigation
- **@tanstack/react-query**: Server state management and caching

### UI Component Libraries
- **@radix-ui/***: Headless UI primitives for accessible components (dialogs, buttons, forms, etc.)
- **tailwindcss**: Utility-first CSS framework for styling
- **class-variance-authority**: Component variant management
- **clsx**: Conditional class name utility

### Database and ORM
- **drizzle-orm**: TypeScript ORM for database operations
- **drizzle-kit**: Schema management and migration tools
- **@neondatabase/serverless**: Serverless PostgreSQL client
- **connect-pg-simple**: PostgreSQL session store

### Form Handling and Validation
- **react-hook-form**: Form state management and validation
- **@hookform/resolvers**: Integration with validation libraries
- **zod**: TypeScript-first schema validation
- **drizzle-zod**: Integration between Drizzle and Zod

### Email and Communication
- **nodemailer**: Email sending functionality
- **@types/nodemailer**: TypeScript definitions for nodemailer

### Development and Build Tools
- **vite**: Fast build tool and development server
- **typescript**: Static type checking
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript bundler for production builds
- **@replit/vite-plugin-***: Replit-specific development enhancements

### Utility Libraries
- **date-fns**: Date manipulation and formatting
- **react-icons**: Icon library with multiple icon sets
- **nanoid**: Unique ID generation
- **cmdk**: Command menu functionality