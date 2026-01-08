Crown Coils — Web App
Crown Coils is a responsive salon‑booking web application designed to provide a clean, modern, and accessible user experience. This project demonstrates full‑stack capability through a static frontend, optional Flask backend, and client‑side Firebase integration for authentication and data handling.

 What’s Included
Frontend pages: index.html, about.html, services.html, gallery.html

Styles: styles.css

JavaScript modules:  
app.js, auth.js, booking.js, gallery.js, services.js, nav.js, calender.js

Firebase setup: firebase.js

Backend (optional): backend/app.py (Flask)

Assets: images/

Key Features
Fully responsive, accessible UI for a salon website

Client‑side booking flow and interactive UI components

Firebase authentication + simple data storage (development mode)

Lightweight Flask backend for API endpoints or server‑side logic

Prerequisites
Python 3.8+ (for Flask backend)

pip for Python dependencies

Optional: Node.js  + npm for local static hosting

A Firebase project (if enabling authentication or Firestore/Realtime Database)

Frontend — Quick Start
To preview the site instantly, open index.html in your browser.

For a local server:

bash
# Python 3
python -m http.server 8000

# Or Node.js
npm i -g http-server
http-server -c-1
Visit:
http://localhost:8000

Backend — Quick Start (Flask)
Create and activate a virtual environment:

bash
python -m venv .venv

# macOS / Linux
source .venv/bin/activate

# Windows PowerShell
.venv\Scripts\Activate.ps1
Install Flask:

bash
pip install flask
Run the server:

bash
python backend/app.py
Default URL:
http://127.0.0.1:5000

⚙️ Configuration
Firebase
Update firebase.js with your project credentials:

apiKey

authDomain

projectId

etc.

Environment Variables (recommended)
bash
export FLASK_APP=backend/app.py
export FLASK_ENV=development
export SECRET_KEY="your-secret"
Windows PowerShell:

powershell
$env:SECRET_KEY = "your-secret"
🔗 Running Frontend + Backend Together
Start the Flask server

Serve the frontend from the repo root

If the frontend calls the backend, set the base URL to:
http://127.0.0.1:5000

Enable CORS on the backend if needed

Firebase Setup Notes
Enable Authentication + Firestore/Realtime Database

Update security rules before deploying

Avoid exposing secrets in client code

--Deployment Recommendations
Frontend: GitHub Pages, Netlify, Vercel

Backend: Render, Heroku, or any Python‑friendly host

Add:

requirements.txt

Procfile (if required by host)

--Development Suggestions
Add requirements.txt for backend dependencies

Add package.json if using Node tooling

Introduce linting + automated tests as the project grows

License
This project is licensed under the Apache License 2.0.