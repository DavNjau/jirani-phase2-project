# Jirani — Local Business Directory

**Jirani** is a React-based web app that helps local businesses register and showcase their services to nearby customers.  
It features a registration form, a dynamic business dashboard, and clean UI styling using **Bootstrap**.

---

## Features
- **Business Registration Form** — add businesses with name, category, location, contact, and description.  
- **Dashboard Display** — lists all businesses from `db.json` in styled cards.  
- **Responsive Layout** — form and info section side-by-side, followed by a dashboard grid.  
- **Header & Footer** — simple layout structure with brand title and contact icons.  
- **Custom Styling** — Bootstrap + inline/CSS styles for cards, paragraphs, and layout.

---

## Tech Stack
- **React.js**  
- **Bootstrap 5**  
- **JSON Server**  

---

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone <your_repo_url>
   cd jirani
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run JSON Server:**
   ```bash
   npx json-server --watch db.json --port 3001
   ```

4. **Start the React app:**
   ```bash
   npm start
   ```

Then visit [http://localhost:3000](http://localhost:3000) 

---

## Project Structure
```
src/
├── Components/
│   ├── Header.jsx
│   ├── RegistrationForm.jsx
│   ├── Dashboard.jsx
│   └── Footer.jsx
├── App.js
├── App.css
└── index.js
db.json
```

---

## Future Enhancements
- Add search and filter functionality  
- Include image uploads per business  
- Enable editing and deleting of entries  
- Connect to a real backend API  

---

## Author
Built by **David Njau** — empowering local growth