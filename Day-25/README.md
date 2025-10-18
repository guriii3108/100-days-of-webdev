# Day 25 — Weather App with Smooth Background Transitions 🌦️

## Overview
Today I built a beautiful weather app that fetches real-time weather data and displays it with stunning background images that transition smoothly between different cities. This project marks the end of **Phase 1** of my 100-day web development journey!

## Features ✨
- **Real-time Weather Data**: Fetches current weather from wttr.in API
- **Dynamic Background Images**: Unsplash images that match weather conditions and locations
- **Smooth Fade Transitions**: Buttery-smooth 1.5s transitions between background images
- **Responsive Design**: Clean, modern UI with glassmorphism effects
- **Error Handling**: Graceful fallbacks for API failures and image loading issues
- **Loading States**: Visual feedback during data fetching and image transitions

## Technologies Used 🛠️
- **HTML5**: Semantic structure and accessibility
- **CSS3**: Modern styling with backdrop-filter, transitions, and glassmorphism
- **Vanilla JavaScript**: Async/await, DOM manipulation, and API integration
- **External APIs**: 
  - wttr.in for weather data
  - Unsplash for dynamic background images

## How It Works 🔧
1. **User Input**: Enter a city name in the input field
2. **API Call**: Fetches weather data from wttr.in
3. **Image Generation**: Creates a dynamic Unsplash URL based on weather condition and city
4. **Smooth Transition**: Preloads new image and fades between old and new backgrounds
5. **Display**: Shows weather information with matching background

## Key Learning Points 📚
- **Async/Await**: Modern JavaScript for handling API calls
- **CSS Transitions**: Creating smooth animations with cubic-bezier easing
- **Image Preloading**: Preventing flicker during background transitions
- **Error Handling**: Robust fallbacks for network issues
- **DOM Manipulation**: Dynamic content updates and state management
- **API Integration**: Working with external weather and image services

## File Structure 📁
```
Day-25/
├── index.html          # Main HTML structure
├── style.css           # All styling and animations
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## How to Run 🚀
1. Open `index.html` in your web browser
2. Enter a city name (e.g., "Tokyo", "Paris", "New York")
3. Click "Get Weather" and watch the smooth background transition!
4. Try different cities to see various weather conditions and backgrounds

## Future Enhancements 💡
- Add 5-day weather forecast
- Include weather icons and animations
- Add geolocation for automatic city detection
- Implement weather data caching
- Add temperature unit conversion (Celsius/Fahrenheit)
- Include humidity, wind speed, and other weather details

## Phase 1 Reflection 🎯
After 25 days of web development, I've learned:
- HTML structure and semantic markup
- CSS styling, layouts, and animations
- JavaScript fundamentals and DOM manipulation
- API integration and async programming
- Responsive design principles
- Modern CSS features (flexbox, grid, backdrop-filter)
- Error handling and user experience considerations

**Ready for Phase 2!** 🚀

---
*Day 25/100 of my web development journey*
