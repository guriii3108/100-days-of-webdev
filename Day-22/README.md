What is localStorage?
  ▶ A built‑in browser API for storing data locally, inside the user’s browser.
  ▶ The data stays even after closing or refreshing the page.
  ▶ It’s part of the Web Storage API, alongside sessionStorage.
  ▶ Data is stored as key–value pairs (both strings).
  
==========================================================
Key Methods
Method	                       |    Purpose           |    Example
localStorage.setItem(key,value)|Store a value         |localStorage.setItem ('theme', 'dark')|
localStorage.getItem(key)      |Retrieve a value	    |localStorage.getItem('theme') |
localStorage.removeItem(key)   |Delete a single key   |localStorage.removeItem('theme')|
localStorage.clear()	         |Delete all stored data|localStorage.clear()|


==========================================================
JSON (JavaScript Object Notation)

localStorage only stores strings.

To store objects or arrays, we use JSON conversion:
Method	            |      Purpose	                  |   Example
JSON.stringify()    |	Converts object → string	      |JSON.stringify({name:"Alex"})
JSON.parse()	      | Converts string → object	      |JSON.parse(data)

==========================================================
Common Use Cases:
  
Use Case	Example
  ▶ Dark/Light theme toggle	Store theme preference
  ▶ To‑Do app	Save tasks locally
  ▶ Form autosave	Retain draft input data
  ▶ Authentication mock	Save mock user login state