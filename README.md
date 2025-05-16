# XYNTRA Hackathon

A modern web application for the XYNTRA Hackathon event, featuring a dynamic countdown timer, registration system, and comprehensive event information.

## Features

- Real-time countdown timer to hackathon start/end
- Registration system with form validation
- Interactive timeline of events
- Prize pool information and domain details
- FAQ section
- Team information
- Sponsor showcase
- Contact form
- Live updates section
- Responsive navigation
- Dynamic brochure viewer
- Background animations and effects
- Scroll-to-top functionality

## Tech Stack

- React.js
- Vite
- CSS3
- Modern JavaScript (ES6+)
- Evervault Card Integration

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd XYNTRA
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at [http://localhost:5173](http://localhost:5173)

## Project Structure

```
src/
├── assets/         # Static assets like images
├── common/         # Reusable components
│   ├── aboutus/    # About section component
│   ├── bg/         # Background effects
│   ├── brochure/   # Brochure viewer
│   ├── button/     # Custom button components
│   ├── contact/    # Contact form
│   ├── domain/     # Domain information
│   ├── evervault-card/ # Card animations
│   ├── faq/        # FAQ section
│   ├── footer/     # Footer component
│   ├── hero/       # Hero section
│   ├── live/       # Live updates
│   ├── nav/        # Navigation components
│   ├── navbar/     # Main navigation bar
│   ├── prize/      # Prize information
│   ├── prize_card/ # Prize card components
│   ├── reg_timer/  # Registration timer
│   ├── Registration/ # Registration form
│   ├── sponsors/   # Sponsor showcase
│   ├── team/       # Team information
│   └── timeline/   # Event timeline
├── pages/          # Main page components
│   ├── home/       # Home page
│   └── timeline/   # Timeline page
├── App.jsx         # Main application component
├── main.jsx        # Application entry point
├── ScrollToTop.jsx # Scroll functionality
└── recmap.jsx      # Map component
```

## Component Details

### Core Components
- **Registration Timer**: Real-time countdown to hackathon start/end
- **Navigation**: Responsive navigation with mobile support
- **Hero Section**: Main landing section with event highlights
- **Timeline**: Interactive event schedule
- **Registration Form**: Participant registration with validation
- **FAQ Section**: Frequently asked questions
- **Sponsor Showcase**: Display of event sponsors
- **Team Section**: Information about organizing team
- **Contact Form**: User inquiry submission
- **Footer**: Site-wide footer with links and information

### Utility Components
- **ScrollToTop**: Smooth scrolling to top functionality
- **Background Effects**: Dynamic background animations
- **Evervault Card**: Interactive card components
- **Brochure Viewer**: PDF brochure display

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any queries or support, please reach out to the development team.

---

Built with ❤️ for XYNTRA Hackathon
