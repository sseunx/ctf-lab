// Demonstrates sending a custom debug header to a backend endpoint
// for educational and authorized testing purposes only

fetch('/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-Dev-Access': 'yes'
  },
  body: JSON.stringify({
    email: 'ctf-player@picoctf.org',
    password: 'anything'
  })
})
.then(res => res.json())
.then(data => console.log(data));
