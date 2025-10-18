const cityInput = document.getElementById("cityInput");
const getWeatherBtn = document.getElementById("getWeather");
const cityNameEl = document.getElementById("cityName");
const tempEl = document.getElementById("temp");
const conditionEl = document.getElementById("condition");

const bg1 = document.getElementById("bg1");
const bg2 = document.getElementById("bg2");
let isTransitioning = false;

// Function to handle smooth background transition
function transitionBackground(newImageUrl) {
  if (isTransitioning) return;
  isTransitioning = true;
  
  // Disable button during transition
  getWeatherBtn.disabled = true;
  getWeatherBtn.textContent = "Loading...";

  const img = new Image();
  img.onload = () => {
    // Set the new image on the next layer
    bg2.style.backgroundImage = `url('${newImageUrl}')`;
    
    // Start the fade transition
    bg2.style.opacity = "1";
    bg1.style.opacity = "0";

    // After transition completes, swap the layers
    setTimeout(() => {
      bg1.style.backgroundImage = bg2.style.backgroundImage;
      bg1.style.opacity = "1";
      bg2.style.opacity = "0";
      bg2.style.backgroundImage = "";
      isTransitioning = false;
      
      // Re-enable button
      getWeatherBtn.disabled = false;
      getWeatherBtn.textContent = "Get Weather";
    }, 1500); // Match the CSS transition duration
  };

  img.onerror = () => {
    console.warn("Failed to load background image:", newImageUrl);
    isTransitioning = false;
    getWeatherBtn.disabled = false;
    getWeatherBtn.textContent = "Get Weather";
  };

  img.src = newImageUrl;
}

async function getWeather() {
  const city = cityInput.value.trim();
  if (city === "") {
    cityNameEl.textContent = "Please enter a city name.";
    tempEl.textContent = "";
    conditionEl.textContent = "";
    return;
  }

  cityNameEl.textContent = "Loading...";
  tempEl.textContent = "";
  conditionEl.textContent = "";

  try {
    const res = await fetch(`https://wttr.in/${city}?format=j1`);
    if (!res.ok) throw new Error("Unable to fetch weather data.");
    const data = await res.json();

    const area = data.nearest_area?.[0]?.areaName?.[0]?.value || city;
    const tempC = data.current_condition?.[0]?.temp_C;
    const condition = data.current_condition?.[0]?.weatherDesc?.[0]?.value;

    cityNameEl.textContent = `${area}`;
    tempEl.textContent = `🌡️ ${tempC}°C`;
    conditionEl.textContent = `${condition}`;

    // Create a more specific image URL for better results
    const searchTerms = [condition, area, "weather", "landscape"].filter(Boolean);
    const imageUrl = `https://source.unsplash.com/1920x1080/?${searchTerms.join(',')}`;
    
    // Trigger the smooth background transition
    transitionBackground(imageUrl);

  } catch (error) {
    cityNameEl.textContent = "Error fetching data";
    tempEl.textContent = "";
    conditionEl.textContent = error.message;

    // Reset to default background with transition
    transitionBackground("linear-gradient(120deg, #89f7fe, #66a6ff)");
  }
}

getWeatherBtn.addEventListener("click", getWeather);
