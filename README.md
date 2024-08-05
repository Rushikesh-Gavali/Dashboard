# Dashboard Application

A modern dashboard application built with React, featuring dynamic charts, responsive design, and a dark mode toggle. This project showcases various components including charts, metrics cards, and a sidebar, all styled with Tailwind CSS.


## Features

- **Responsive Design**: The application is fully responsive, adjusting its layout and functionality based on the screen size.
- **Dynamic Charts**: Includes Bar and Pie charts for displaying sales and profit data.
- **Dark Mode**: Toggle between light and dark themes for better user experience.
- **Sidebar**: A collapsible sidebar with navigation options.
- **Header**: A header with search functionality and user controls.

## Technologies Used

- **React**: For building the user interface.
- **Recharts**: For rendering charts.
- **Tailwind CSS**: For styling and responsive design.
- **React Context**: For managing theme and sidebar state.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Rushikesh-Gavali/Dashboard.git
    ```

2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

## Running the Application

 **Start the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

## Components

### ActivityChart

Displays a bar chart of sales data. Users can switch between weekly and daily views using a dropdown.

**Props:**
- `data`: Array of data for the chart.
- `onTabChange`: Function to handle tab changes.
- `activeTab`: Current active tab for the chart.

### CustomPieChart

Displays a pie chart with dynamic colors and percentage labels.

**Props:**
- `data`: Array of data for the pie chart.
- `colors`: Array of colors for the chart segments.

### Card

A reusable component for displaying metrics with icons and background colors.

**Props:**
- `icon`: Icon component.
- `backgroundColor`: Background color for the card.
- `iconColor`: Color for the icon.
- `title`: Title of the card.
- `value`: Value to be displayed.

### Dashboard

The main dashboard component integrating various charts and cards. Manages the active tab state for the ActivityChart and displays recent orders and customer feedback.

### Header

A responsive header with search functionality and dark mode toggle.

### Sidebar

A collapsible sidebar with navigation icons.

## Usage

- **Dark Mode**: Toggle between light and dark themes using the moon/sun icon in the header.
- **Sidebar**: Open and close the sidebar using the hamburger menu in the header.
- **Charts**: View different metrics by selecting the appropriate options in the charts.