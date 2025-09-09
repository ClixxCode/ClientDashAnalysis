# Metro Retaining Walls - Competitive Intelligence Dashboard

A comprehensive React-based dashboard for analyzing competitive intelligence in the retaining wall and landscaping industry.

## Features

- **Market Overview**: Key metrics, market positioning charts, and competitive radar analysis
- **Reputation Analysis**: Review comparisons, BBB status, and online reputation insights
- **Service Comparison**: Service capability matrix and strategic positioning charts
- **Growth Opportunities**: Market gap analysis, SWOT analysis, and action items

## Installation

1. Navigate to the react-dashboard directory:
   ```bash
   cd MetroRetaining/react-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Technologies Used

- **React 18**: Modern React with hooks
- **Recharts**: Interactive charts and data visualization
- **Tailwind CSS**: Utility-first CSS framework for styling
- **React Scripts**: Build tools and development server

## Project Structure

```
react-dashboard/
├── public/
│   └── index.html          # Main HTML template
├── src/
│   ├── components/
│   │   └── CompetitiveDashboard.js  # Main dashboard component
│   ├── App.js              # App component
│   ├── App.css             # App styles
│   ├── index.js            # React entry point
│   └── index.css           # Global styles
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm build`: Builds the app for production
- `npm test`: Launches the test runner
- `npm eject`: Ejects from Create React App (one-way operation)

## Dashboard Sections

### Market Overview
- Key performance metrics for top competitors
- Rating vs review volume scatter plot
- Competitive strengths radar chart

### Reputation Analysis
- Online reputation comparison charts
- Detailed review metrics and BBB status
- Key reputation insights and recommendations

### Service Comparison
- Service capability matrix across competitors
- Technical expertise vs price positioning
- Strategic market positioning analysis

### Growth Opportunities
- Market gap analysis with priority levels
- Metro Retaining Walls SWOT analysis
- Immediate action items and recommendations

## Data Sources

The dashboard includes competitive intelligence on:
- Metro Retaining Walls
- Big Bend Landscaping
- Tennant Landscape
- Meramec Hardscapes
- Baker Landscaping

## Customization

To modify the dashboard:
1. Edit `src/components/CompetitiveDashboard.js` to update data or add new features
2. Modify styling by updating Tailwind classes or adding custom CSS
3. Add new chart types using Recharts components
4. Extend the tab system by adding new tab components

## Browser Support

This dashboard supports all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
