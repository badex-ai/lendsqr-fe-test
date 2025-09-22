# Lendsqr Frontend Assessment

<div align="center">

![Lendsqr Logo](./public/logo.png)

A modern user management dashboard built with React and TypeScript for the Lendsqr technical assessment.

[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.1.1-blue.svg)](https://reactjs.org/)
[![Tests](https://img.shields.io/badge/Tests-Jest-green.svg)](https://jestjs.io/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](#license)

[Features](#features) •
[Quick Start](#quick-start) •
[Tech Stack](#tech-stack) •
[Project Structure](#project-structure) •
[Testing](#testing)

</div>

## Overview

The Lendsqr Frontend Assessment is a comprehensive user management dashboard that demonstrates modern React development practices. Built specifically for the Lendsqr technical evaluation, this application showcases proficiency in TypeScript, React ecosystem, and frontend best practices.

### Key Features

- **User Management**: View, filter, and manage user accounts with different statuses
- **User Details**: Comprehensive user profile views with detailed information
- **Status Management**: Handle user states (Active, Inactive, Pending, Blacklisted)
- **Responsive Design**: Mobile-first approach with cross-device compatibility
- **Type Safety**: Full TypeScript implementation for better code reliability
- **Form Validation**: Robust form handling with schema validation

## Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 16.0 or higher)
- **npm** (version 7.0 or higher) or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/lendsqr-fe-test.git
   cd lendsqr-fe-test
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

### Available Scripts

| Command | Description | Usage |
|---------|-------------|-------|
| `npm start` | Runs the app in development mode | For local development |
| `npm test` | Launches the test runner in interactive watch mode | For running tests |

## Tech Stack

<table>
<tr>
<td>

**Frontend**
- React 19.1.1
- TypeScript 4.9.5
- React Router DOM 7.9.1
- Sass (SCSS)

</td>
<td>

**Forms & Validation**
- React Hook Form 7.62.0
- Zod 4.1.8
- Hookform Resolvers 5.2.2

</td>
<td>

**Testing**
- Jest
- React Testing Library 16.3.0
- Jest DOM 6.8.0
- User Event 13.5.0

</td>
</tr>
</table>

### Key Dependencies

```json
{
  "react": "^19.1.1",
  "react-dom": "^19.1.1",
  "react-router-dom": "^7.9.1",
  "react-hook-form": "^7.62.0",
  "zod": "^4.1.8",
  "sass": "^1.92.1",
  "typescript": "^4.9.5"
}
```

## Project Structure

Following Microsoft's TypeScript React project structure recommendations, this project maintains a clean and scalable architecture:

```
lendsqr-fe-test/
├── public/                 # Static assets
│   ├── favicon.ico           # App favicon
│   ├── index.html            # HTML template
│   ├── logo.png              # App logo
│   └── manifest.json         # PWA manifest
│
├── src/                    # Source code
│   ├── assets/            # Static assets (fonts, icons, images)
│   │   ├── fonts/
│   │   ├── icons/
│   │   └── images/
│   │
│   ├── components/        # Reusable UI components
│   │   ├── atoms/            # Basic UI elements (buttons, inputs)
│   │   ├── molecules/        # Component combinations (search bars)
│   │   └── organisms/        # Complex components (headers, forms)
│   │
│   ├── pages/             # Route components
│   │   ├── Dashboard.tsx     # Main dashboard
│   │   ├── Home.tsx          # Landing page
│   │   ├── Login.tsx         # Authentication
│   │   ├── UserDetails.tsx   # User profile view
│   │   └── UsersPage.tsx     # User management
│   │
│   ├── context/           # React Context providers
│   │   └── userContext.tsx   # User state management
│   │
│   ├── hooks/             # Custom React hooks
│   │   └── IsMobile.tsx      # Responsive design hook
│   │
│   ├── styles/            # Global styles and utilities
│   │   ├── _mixins.scss      # Sass mixins
│   │   ├── _typography.scss  # Font definitions
│   │   ├── _variables.scss   # Design tokens
│   │   └── index.scss        # Global styles
│   │
│   ├── __tests__/         # Test files
│   │   └── test.tsx          # Component tests
│   │
│   ├── api.ts                # API utilities and endpoints
│   ├── types.ts              # TypeScript type definitions
│   ├── utils.ts              # Helper functions
│   └── App.tsx               # Root component
│
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
└── README.md                 # Project documentation
```

## 🧪 Testing

This project maintains high code quality through comprehensive testing:

### Running Tests

```bash
# Run all tests
npm test
```