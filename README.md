# Pomodoro Timer App

A modern, feature-rich Pomodoro timer application built with React and Tailwind CSS. This productivity tool helps users manage their time effectively using the Pomodoro Technique with customizable work sessions, breaks, and settings.

![React](https://img.shields.io/badge/React-19.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.18-38B2AC)
![JavaScript](https://img.shields.io/badge/JavaScript-ES202+-F7DF1E)

## 🚀 Features

- **⏱️ Time Management**: Classic Pomodoro timer with customizable session durations
- **🎨 Modern UI**: Beautiful gradient design with glassmorphism effects
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **⚙️ Customizable Settings**: Adjust work, short break, and long break durations
- **🎭 Theme Options**: Multiple color schemes (Blue, Red, Purple)
- **🔤 Typography Choices**: Three professional font options (Kumbh Sans, Roboto Slab, Space Mono)
- **📊 Visual Progress**: Circular progress indicator showing time remaining
- **🔄 Session States**: Start, Pause, and Restart functionality
- **✨ Smooth Animations**: Fluid transitions and micro-interactions

## 🛠️ Technology Stack

- **Frontend Framework**: React 19.2.0 with modern hooks
- **Build Tool**: Vite 7.2.4 for lightning-fast development
- **Styling**: Tailwind CSS 4.1.18 with custom design system
- **Language**: JavaScript (ES2022+)
- **Code Quality**: ESLint with React plugins

## 📦 Installation

### Prerequisites
- Node.js 18.0.0 or higher
- npm or yarn package manager

### Clone and Install
```bash
# Clone the repository
git clone <repository-url>
cd 29-pomodoro-app

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

## 🎯 Usage

### Basic Timer Operation
1. **Start Timer**: Click the "START" button to begin your Pomodoro session
2. **Pause/Resume**: Click "PAUSE" to temporarily stop the timer
3. **Restart**: Click "RESTART" to reset the current session

### Settings Customization
1. Click the settings icon (⚙️) to open the settings panel
2. **Time Settings**: Adjust durations for:
   - Pomodoro sessions (default: 25 minutes)
   - Short breaks (default: 5 minutes)
   - Long breaks (default: 15 minutes)
3. **Appearance**: 
   - Choose color themes (Blue, Red, Purple)
   - Select typography (Kumbh Sans, Roboto Slab, Space Mono)
4. Click outside the settings panel to apply changes

### Pomodoro Technique
- Work for 25 minutes, then take a 5-minute short break
- After 4 Pomodoro sessions, take a 15-30 minute long break
- Customize durations based on your workflow preferences

## 🏗️ Project Structure

```
src/
├── components/
│   ├── App.jsx                 # Main application component
│   ├── ClockTime.jsx          # Timer display and controls
│   ├── HeaderOptions.jsx      # Session type selector
│   ├── SetOptions.jsx         # Settings context provider
│   ├── SettingsOptions.jsx    # Settings modal
│   └── InputArrows.jsx        # Time adjustment controls
├── assets/
│   ├── fonts/                 # Custom font files
│   └── images/                # Icon assets
└── index.css                  # Global styles and custom theme
```

## 🎨 Design System

### Custom Theme
The application uses a sophisticated design system with:
- **Color Palette**: Carefully selected blues, greys, and accent colors
- **Typography**: Three variable fonts with optimal readability
- **Responsive Spacing**: Fluid clamp() values for all screen sizes
- **Glassmorphism**: Modern depth effects with shadows and gradients

### Breakpoints
- **Mobile**: Default styles up to tablet
- **Tablet**: Medium screens with adjusted spacing
- **Desktop**: Large screens with enhanced typography

## 🔧 Development

### Available Scripts
```bash
# Development server with hot reload
npm run dev

# Production build
npm run build

# Code quality checks
npm run lint

# Preview production build
npm run preview
```

### Code Style
- ES6+ JavaScript with React hooks
- Component-based architecture
- Tailwind utility-first CSS approach
- ESLint configuration for code consistency

### State Management
- React Context API for global settings
- Local state with useState and useEffect hooks
- Ref hooks for DOM manipulation and intervals

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The build artifacts are stored in the `dist/` directory and are ready for deployment to any static hosting service.

### Environment Setup
The application is configured for static hosting and requires:
- No server-side processing
- No environment variables
- No backend dependencies

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow the established code patterns in `AGENTS.md`
- Use descriptive variable and function names
- Ensure responsive design for new components
- Test on multiple screen sizes before submitting

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Francesco Cirillo** - Creator of the Pomodoro Technique
- **React Team** - For the excellent React framework
- **Tailwind CSS Team** - For the utility-first CSS framework
- **Vite Team** - For the fast build tool

## 🔗 Resources

- [Pomodoro Technique Guide](https://francescocirillo.com/pages/pomodoro-technique)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Vite Documentation](https://vitejs.dev/)

---

Built with ❤️ for productive focus sessions