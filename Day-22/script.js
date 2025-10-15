// localStorage demo helpers
// These functions show how to use setItem/getItem/removeItem/clear
// and how to store/retrieve JSON data.

const THEME_KEY = 'app:theme';
const COUNTER_KEY = 'app:counter';

const localStoreDemo = {
  saveTheme(theme) {
    // Store a simple string value
    localStorage.setItem(THEME_KEY, theme);
    console.log(`[saved] ${THEME_KEY} =`, theme);
  },

  getTheme() {
    // Retrieve a value; returns null if the key does not exist
    const value = localStorage.getItem(THEME_KEY);
    console.log(`[read] ${THEME_KEY} =`, value);
    return value;
  },

  removeTheme() {
    // Remove a single key
    localStorage.removeItem(THEME_KEY);
    console.log(`[removed] ${THEME_KEY}`);
  },

  saveCounter(count) {
    // Store a number using JSON so we can recover it as a number
    const serialized = JSON.stringify({ value: Number(count) || 0 });
    localStorage.setItem(COUNTER_KEY, serialized);
    console.log(`[saved] ${COUNTER_KEY} =`, serialized);
  },

  getCounter() {
    // Read and parse JSON; handle missing or invalid JSON safely
    const raw = localStorage.getItem(COUNTER_KEY);
    try {
      const parsed = raw ? JSON.parse(raw) : null;
      const value = parsed && typeof parsed.value === 'number' ? parsed.value : null;
      console.log(`[read] ${COUNTER_KEY} =`, value);
      return value;
    } catch (err) {
      console.warn(`[warn] could not parse ${COUNTER_KEY}:`, err);
      return null;
    }
  },

  clearAll() {
    // Clear everything for this origin (be careful in real apps!)
    localStorage.clear();
    console.log('[cleared] all localStorage keys for this site');
  }
};

// Expose helpers for quick testing in the console
window.localStoreDemo = localStoreDemo;

// Example run (feel free to delete):
// localStoreDemo.saveTheme('dark');
// localStoreDemo.getTheme();
// localStoreDemo.saveCounter(42);
// localStoreDemo.getCounter();

