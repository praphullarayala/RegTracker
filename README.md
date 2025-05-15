# RegTracker - CRR3/CRD VI Regulatory Mandates Tracker

RegTracker is an interactive web application that monitors regulatory mandates issued by the European Banking Authority (EBA) under the third Capital Requirements Regulation (CRR3) and sixth Capital Requirements Directive (CRD VI).


## Features

- **Comprehensive Mandate Tracking**: Monitor all regulatory mandates given to the EBA by the European legislature.
- **Advanced Filtering**: Search and filter mandates by risk category, document type, and status.
- **Visual Analytics**: View distribution charts and statistics to understand regulatory trends.
- **Timeline Overview**: Track upcoming publication dates and plan accordingly.
- **Detailed Information**: Access comprehensive details about each mandate, including consultation papers, final reports, and Official Journal publications.

## Demo

Visit the live demo of RegTracker at: [https://github.com/praphullarayala/RegTracker](https://github.com/praphullarayala/RegTracker) 

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:praphullarayala/RegTracker.git
   cd RegTracker
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Project Structure

```
regtracker/
├── public/              # Public assets
├── src/                 # Source files
│   ├── App.js           # Main application component
│   ├── index.js         # Entry point
│   └── index.css        # Global styles including Tailwind CSS
├── .gitignore           # Git ignore file
├── package.json         # Project dependencies and scripts
├── postcss.config.js    # PostCSS configuration
└── tailwind.config.js   # Tailwind CSS configuration
```

## Built With

- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Lucide React](https://lucide.dev/) - Beautiful & consistent icon set

## Understanding Regulatory Mandates

### What is a mandate?

A mandate is a specific authority or assignment given to one of the European Supervisory Authorities to perform a designated task, such as reporting, providing guidance, or creating market standards.

### Legislative Process

The legislative process for RTS (Regulatory Technical Standards) and ITS (Implementing Technical Standards) consists of four phases:

1. The EBA publishes a consultation paper to gather market feedback
2. The EBA issues a final draft report
3. The European Commission either adopts it (with possible amendments) or rejects it
4. The adopted regulation is published in the Official Journal (OJ) of the European Union

Guidelines and reports are published by the EBA without having to follow all these stages.

### Status Indicators

- 🟢 **Green**: On-time publications
- 🟠 **Orange**: Delayed publications
- 🔴 **Red**: Overdue and unpublished documents

## Deployment

This app can be deployed to various platforms:

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository into Vercel
3. Vercel will automatically detect React and configure the build settings
4. Deploy and enjoy your live app

### Netlify

1. Push your code to GitHub
2. Import the repository into Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `build`
4. Deploy and enjoy your live app

### GitHub Pages

1. Install the gh-pages package:
   ```bash
   npm install --save-dev gh-pages
   ```
2. Add these lines to your package.json:
   ```json
   "homepage": "https://praphullarayala.github.io/RegTracker",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

