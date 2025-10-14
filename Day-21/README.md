## Day 21 — Contact Form (HTML, CSS, JavaScript)

A simple, accessible contact form built with semantic HTML, modern CSS, and vanilla JavaScript. The form performs basic client-side validation and displays inline feedback without page reloads.

### Features
- **Required fields**: Name, Email, Message
- **Client-side validation**:
  - Checks for non-empty inputs
  - Basic email check (must include `@`)
- **Inline feedback**: Success and error messages appear below the form
- **No page reload**: Uses `preventDefault()` and resets the form on success

### Tech Stack
- **HTML5** for structure
- **CSS3** for styling
- **Vanilla JavaScript** for form handling and validation

### File Structure
```
Day-21/
  ├─ index.html     # Markup for the contact form
  ├─ style.css      # Form layout and styles
  └─ script.js      # Validation logic and feedback handling
```

### How to Run
- Open `index.html` directly in your browser.
- Fill in the fields and click "Send Message" to see validation and feedback.

### What the JS Does
- Prevents default form submission to avoid reloads
- Reads and trims values from `#username`, `#email`, `#message`
- Validates empty fields and simple email format
- Renders feedback in `#feedback` with appropriate color
- Resets the form on success

### Customization Tips
- **Validation**: Replace the simple `email.includes("@")` with a more robust regex if needed.
- **Styling**: Update colors, spacing, and fonts in `style.css` (e.g., `button`, `input`, `textarea`, `.feedback`).
- **Accessibility**: Labels are already associated via `for`/`id`. Consider adding `aria-live` to the feedback element for improved screen reader announcements.

### Notes
- This is a front-end demo; no messages are actually sent to a server.
- For production, integrate a backend endpoint and handle server-side validation as well.
