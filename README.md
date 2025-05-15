# RegTracker - CRR3/CRD VI Regulatory Mandates Tracker

RegTracker is an interactive web application that monitors regulatory mandates issued by the European Banking Authority (EBA) under the third Capital Requirements Regulation (CRR3) and sixth Capital Requirements Directive (CRD VI).


## Features

- **Comprehensive Mandate Tracking**: Monitor all regulatory mandates given to the EBA by the European legislature.
- **Advanced Filtering**: Search and filter mandates by risk category, document type, and status.
- **Visual Analytics**: View distribution charts and statistics to understand regulatory trends.
- **Timeline Overview**: Track upcoming publication dates and plan accordingly.
- **Detailed Information**: Access comprehensive details about each mandate, including consultation papers, final reports, and Official Journal publications.

## Demo

Visit the live demo of RegTracker at: [https://praphullarayala.github.io/RegTracker/](https://praphullarayala.github.io/RegTracker/) 

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

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

