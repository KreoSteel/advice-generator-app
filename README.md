# 🎯 Advice Generator App

A modern, responsive web application that fetches random advice from an external API and allows users to save, view, and manage their favorite pieces of advice. Built with React and featuring a sleek dark theme with real-time updates.

![Advice Generator App](https://img.shields.io/badge/React-18+-blue.svg)
![Vite](https://img.shields.io/badge/Vite-5+-green.svg)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

## ✨ Features

### Core Functionality
- **🎲 Random Advice Generation**: Fetches inspirational advice from the Advice Slip API
- **💾 Save Advice**: Store your favorite advice pieces to a local database
- **📋 Advice Management**: View all saved advice in an organized list
- **🗑️ Delete Functionality**: Remove advice items you no longer want to keep
- **⚡ Real-time Updates**: List automatically updates when advice is added or deleted (no manual refresh needed)

### Design & User Experience
- **🌙 Modern Dark Theme**: Sleek black background with purple accent colors
- **🎨 Beautiful Typography**: Inter and Playfair Display fonts for optimal readability
- **📱 Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **✨ Smooth Animations**: Hover effects, transitions, and interactive feedback
- **♿ Accessibility**: High contrast colors and keyboard navigation support

### Technical Features
- **🔄 State Management**: Efficient state synchronization between components
- **🚀 Fast Loading**: Optimized with Vite for quick development and builds
- **🎯 Modern CSS**: Glass-morphism effects, backdrop blur, and layered shadows
- **📡 API Integration**: Robust error handling and async operations

## 🛠️ Technology Stack

### Frontend
- **React 19+** - Modern React with hooks for state management
- **Vite 6+** - Next-generation frontend build tool
- **JavaScript (ES6+)** - Modern JavaScript features
- **CSS3** - Advanced styling with custom properties and modern layouts

### Libraries & Tools
- **Axios** - HTTP client for API requests
- **React Icons** - Beautiful icon library (HiOutlineTrash)
- **Google Fonts** - Inter and Playfair Display typography
- **ESLint** - Code linting and quality assurance

### APIs
- **Advice Slip API** - External API for random advice generation
- **JSON Server** - Local REST API for advice storage (development)

## 🚀 Setup Instructions

### Prerequisites
- **Node.js** (version 18.0 or higher)
- **npm** (version 8.0 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd advice-generator-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up the local database**
   ```bash
   # Install JSON Server globally (if not already installed)
   npm install -g json-server

   # Start the local API server (in a separate terminal)
   json-server --watch db.json --port 3000
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 API Information

### External API
- **Advice Slip API**: `https://api.adviceslip.com/advice`
  - Provides random advice quotes
  - No authentication required
  - Returns JSON with advice text and ID

### Local API Endpoints
The app uses JSON Server for local data persistence:

- `GET /advices` - Fetch all saved advice
- `POST /advices` - Save new advice
- `DELETE /advices/:id` - Delete specific advice

**Database Structure** (`db.json`):
```json
{
  "advices": [
    {
      "id": 1,
      "advice": "Your advice text here"
    }
  ]
}
```

## 🎨 Design Features

### Color Scheme
- **Primary Background**: Pure black (`#000000`)
- **Accent Colors**: Purple gradient (`#8e2de2` to `#4a00e0`)
- **Text Colors**: White (`#ffffff`) and light gray (`#e0e0e0`)
- **Interactive Elements**: Purple highlights and hover effects

### Typography
- **Primary Font**: Inter - Modern, highly readable sans-serif used throughout the app
- **Advice Text**: Inter with italic quotation marks for enhanced readability
- **Font Weights**: 300, 400, 500, 600, 700, 800
- **Optimizations**: Kerning, ligatures, and optimized letter spacing

### Visual Effects
- **Glass-morphism**: Backdrop blur effects on containers
- **Layered Shadows**: Multiple shadow layers for depth
- **Smooth Transitions**: 0.3s cubic-bezier animations
- **Responsive Hover States**: Interactive feedback on all clickable elements

## 📁 Project Structure

```
src/
├── components/
│   ├── Advice/
│   │   ├── Advice.jsx          # Main advice display and generation
│   │   └── Advice.css          # Advice component styling
│   ├── List/
│   │   ├── List.jsx            # Saved advice list display
│   │   └── List.css            # List component styling
│   └── Button/
│       ├── Button.jsx          # Reusable button component
│       └── Button.css          # Modern button styling
├── services/
│   └── adviceServices.js       # API service functions
├── App.jsx                     # Main application component
├── App.css                     # App-level styling
├── main.jsx                    # Application entry point
└── index.css                   # Global styles and typography
```

### Component Architecture
- **App.jsx**: Root component managing global state
- **Advice.jsx**: Handles advice fetching and saving
- **List.jsx**: Displays and manages saved advice
- **Button.jsx**: Reusable UI component with modern styling
- **adviceServices.js**: Centralized API communication

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Advice Slip API](https://adviceslip.com/) for providing the advice data
- [Inter Font](https://rsms.me/inter/) for the beautiful typography
- [React Icons](https://react-icons.github.io/react-icons/) for the icon library
- [Vite](https://vitejs.dev/) for the excellent development experience

---

**Built with ❤️ using React and modern web technologies**
