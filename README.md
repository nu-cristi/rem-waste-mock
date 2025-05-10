# Skip Hire Selection Interface

A modern, responsive React TypeScript application for selecting skip sizes for hire, with a focus on clear pricing information and user experience.

## Project Overview

This interface was designed to make skip hire selection straightforward and informative, with careful attention to user experience and accessibility.

## Key Features

### 1. Smart Layout and Information Hierarchy

- **Card-Based Interface**

  - Individual cards for each skip option provide clear visual separation
  - Consistent 320px width maintains visual harmony across screen sizes
  - Hover effects and smooth transitions enhance interactivity

- **Visual Priority**
  - Skip size and total price are prominently displayed
  - Warning labels (e.g., "Not Allowed On Road") use high-contrast colors
  - Secondary details like hire periods are visible but subdued

### 2. Price Information Design

- **Clear Pricing Strategy**

  - Large, prominent total price display
  - Info icon indicates additional pricing details
  - Price breakdown includes:
    - Base price
    - VAT calculation
    - Optional transport fees
    - Per tonne costs (where applicable)

- **Interactive Price Details**
  - Tooltip appears above the price to avoid obscuring other content
  - Single active tooltip prevents information overload
  - Smooth animations for opening/closing
  - Clear visual connection to the price button

### 3. Responsive and Accessible Design

- **Adaptive Layout**

  - Grid automatically adjusts to viewport width
  - Mobile-optimized card sizes and spacing
  - Maintains functionality across devices

- **Accessibility Features**
  - Strong color contrast for readability
  - Clear interactive states (hover, focus, active)
  - Semantic HTML structure
  - Screen reader-friendly price information

### 4. Technical Implementation

- Built with React and TypeScript for type safety
- CSS Modules for style encapsulation
- Efficient DOM updates for smooth interactions
- Progressive enhancement approach
- Minimal external dependencies

## Getting Started

To run this project locally:

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!