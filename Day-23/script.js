const quoteEl = document.getElementById('quote');
const newQuoteBtn = document.getElementById('new-quote');

async function getQuote() {
  if (!quoteEl) return;
  try {
    quoteEl.textContent = 'Loading...';
    newQuoteBtn && (newQuoteBtn.disabled = true);

    const response = await fetch('https://api.quotable.io/random', { cache: 'no-store' });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const data = await response.json();
    const content = typeof data.content === 'string' ? data.content : '';
    const author = typeof data.author === 'string' ? data.author : 'Unknown';
    quoteEl.textContent = content && author ? `"${content}" — ${author}` : 'No quote available right now.';
  } catch (error) {
    quoteEl.textContent = 'Failed to load quote. Try again!';
    console.error(error);
  } finally {
    newQuoteBtn && (newQuoteBtn.disabled = false);
  }
}

newQuoteBtn && newQuoteBtn.addEventListener('click', getQuote);

// Initial load
getQuote();


