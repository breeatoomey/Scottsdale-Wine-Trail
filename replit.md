# Overview

The Scottsdale Wine Trail is a web application that promotes Arizona's premier wine destination in downtown Scottsdale. The app showcases seven award-winning wineries within walking distance of each other, providing visitors with information about each winery, trail maps, events, and a wine passport system. Built as a modern full-stack application, it serves as both an informational hub and interactive guide for wine enthusiasts exploring Scottsdale's entertainment district.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing with dedicated pages for home, wineries, events, contact, and trail features
- **UI Components**: Shadcn/ui component library with Radix UI primitives for consistent, accessible design
- **Styling**: Tailwind CSS with custom wine-themed color palette and responsive design
- **State Management**: TanStack Query for server state management and caching
- **Forms**: React Hook Form with Zod validation for type-safe form handling

## Backend Architecture
- **Runtime**: Node.js with Express.js server framework
- **Language**: TypeScript with ES modules
- **Storage**: In-memory storage implementation with interface for future database integration
- **API Design**: RESTful endpoints with `/api` prefix for all application routes
- **Session Management**: Express sessions with PostgreSQL session store support

## Data Storage Solutions
- **Current**: In-memory storage using Map data structures for development
- **Configured**: Drizzle ORM with PostgreSQL dialect ready for production database
- **Schema**: Defined user and contact tables with proper typing and validation
- **Migrations**: Drizzle Kit configured for database schema management

## Authentication and Authorization
- **Session-based**: Express sessions configured for user authentication
- **Security**: CORS handling and request validation middleware
- **User Management**: Basic user creation and retrieval functionality implemented

## Development and Build
- **Development**: Vite dev server with HMR and React Fast Refresh
- **Production Build**: Vite for frontend bundling, esbuild for backend compilation
- **TypeScript**: Strict type checking across client, server, and shared code
- **Path Aliases**: Configured for clean imports across the application

# External Dependencies

## Database and ORM
- **Neon Database**: PostgreSQL serverless database provider (@neondatabase/serverless)
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL dialect
- **Session Store**: connect-pg-simple for PostgreSQL session storage

## UI and Styling
- **Radix UI**: Comprehensive suite of accessible React components
- **Tailwind CSS**: Utility-first CSS framework with custom wine trail theming
- **Lucide React**: Icon library for consistent iconography
- **Font Awesome**: Additional icons via CDN

## Form Handling and Validation
- **React Hook Form**: Performant form library with TypeScript support
- **Zod**: Schema validation library integrated with Drizzle for type safety
- **Hookform Resolvers**: Zod integration for React Hook Form

## State Management and API
- **TanStack Query**: Server state management with caching and background updates
- **Date-fns**: Date manipulation and formatting utilities

## Development Tools
- **Vite**: Fast build tool with plugin ecosystem
- **ESBuild**: Fast JavaScript bundler for production builds
- **TypeScript**: Static type checking and enhanced developer experience
- **Replit Integration**: Development environment plugins for Replit platform

## Third-party Integrations
- **Google Fonts**: Typography via CDN (Playfair Display, Inter, Cormorant Garamond)
- **Unsplash**: Image hosting for winery and event photography
- **Social Media**: Prepared for Facebook, Instagram, and Twitter integration