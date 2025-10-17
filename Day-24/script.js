(() => {
  const quoteElement = document.getElementById('quote');
  const authorElement = document.getElementById('author');
  const fetchButton = document.getElementById('quote-btn');
  const copyButton = document.getElementById('copy-btn');

  if (!quoteElement || !authorElement || !fetchButton || !copyButton) {
    return; // DOM not ready or elements missing
  }

  async function fetchRandomQuote() {
    quoteElement.dataset.state = 'loading';
    authorElement.textContent = '';
    fetchButton.disabled = true;
    quoteElement.textContent = 'Fetching new quote…';
    try {
      const response = await fetch('https://api.quotable.io/random');
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      const content = typeof data.content === 'string' ? data.content.trim() : '';
      const author = typeof data.author === 'string' ? data.author.trim() : 'Unknown';

      if (!content) throw new Error('Empty response');

      quoteElement.textContent = `"${content}"`;
      authorElement.textContent = `— ${author}`;
      quoteElement.dataset.state = 'loaded';
    } catch (error) {
      quoteElement.textContent = 'Oops! Failed to fetch quote.';
      authorElement.textContent = '';
      quoteElement.dataset.state = 'error';
      console.error('Error fetching quote:', error);
    } finally {
      fetchButton.disabled = false;
    }
  }

  async function copyQuoteToClipboard() {
    const textToCopy = [quoteElement.textContent, authorElement.textContent]
      .filter(Boolean)
      .join(' ')
      .trim();
    if (!textToCopy) return;
    try {
      await navigator.clipboard.writeText(textToCopy);
      copyButton.textContent = 'Copied!';
      setTimeout(() => { copyButton.textContent = 'Copy'; }, 1200);
    } catch {
      copyButton.textContent = 'Copy failed';
      setTimeout(() => { copyButton.textContent = 'Copy'; }, 1200);
    }
  }

  fetchButton.addEventListener('click', fetchRandomQuote);
  copyButton.addEventListener('click', copyQuoteToClipboard);

  // Load an initial quote
  fetchRandomQuote();
})();

