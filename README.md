# EduReso 📚

A free educational web portal for CBSE students in **Classes 9–12**, providing curated video lectures and downloadable PDF notes for Mathematics.

## 🌟 Features

- 📹 **Video Lectures** — Embedded YouTube lessons organized by class and topic
- 📄 **PDF Notes** — Direct links to chapter-wise study materials
- 👤 **User Profiles** — Personalized profile with class info and progress tracking
- 🔐 **Auth System** — Register/Login with server-side validation and bcrypt password hashing
- 📱 **Fully Responsive** — Works seamlessly on mobile, tablet, and desktop

## 🗂️ Project Structure

```
Educational portal/
├── HomePage.html          # Landing page with class selection
├── Login.html             # User login page
├── Register.html          # User registration page
├── Profile.html           # User profile editor
├── Class9.html            # Class 9 topics
├── Class10.html           # Class 10 topics
├── Class11.html           # Class 11 topics
├── Class12.html           # Class 12 topics
├── c9t1.html – c9t5.html  # Class 9 topic pages
├── c10t1.html – c10t5.html # Class 10 topic pages
├── c11t1.html – c11t5.html # Class 11 topic pages
├── c12t1.html – c12t5.html # Class 12 topic pages
├── shared.css             # Global design system (variables, nav, footer)
├── HomePage.css           # Home page styles
├── ClassPages.css         # Class listing page styles
├── ct.css                 # Topic page styles
├── stylelog.css           # Login page styles
├── stylereg.css           # Register page styles
├── profile.css            # Profile page styles
├── Server.js              # Express + MongoDB backend
├── Register.js            # Client-side registration helper
└── profile.js             # Profile form validation
```

## 📘 Topics Covered

| Class | Topics |
|-------|--------|
| 9  | Number Systems, Polynomials, Coordinate Geometry, Linear Equations, Euclid's Geometry |
| 10 | Real Numbers, Polynomials, Pair of Linear Equations, Quadratic Equations, Arithmetic Progressions |
| 11 | Sets & Functions, Trigonometric Functions, Complex Numbers, Linear Inequalities, Permutations & Combinations |
| 12 | Relations & Functions, Inverse Trigonometry, Matrices, Determinants, Continuity & Differentiability |

## 🚀 Getting Started

### Option A — Open Directly (Frontend Only)
Just open `HomePage.html` in any browser. All static pages work without a server.

### Option B — Run with Backend
Requires **Node.js** and **MongoDB**.

```bash
# Install dependencies
npm install

# Start MongoDB (must be running locally)
# Then start the server:
node Server.js
```

Visit: `http://localhost:3020`

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (via Mongoose)
- **Security:** bcrypt password hashing
- **Icons:** Boxicons

## 🐛 Bug Fixes (v2.0)

- ✅ Fixed `width: 42` → `width: 420px` in login/register CSS
- ✅ Fixed `font-family: "poppings"` typo → proper font via shared.css
- ✅ Fixed `Register.js` `querySelector("email")` → `getElementById("reg-email")`
- ✅ Fixed broken nav links (`CLass10.html` → `Class10.html`)
- ✅ Fixed `ct.css` `width: 900%; padding: 60%` → proper responsive layout
- ✅ Fixed `margin-top: 20px 0 15px` (invalid shorthand) in register CSS
- ✅ Fixed `Server.js` — passwords now securely hashed with bcrypt
- ✅ Fixed missing `default-avatar.png` — replaced with inline SVG fallback
- ✅ Fixed topic page sub-menu broken structure

## 📄 License

MIT License — Free to use and modify.

---

*Made with ❤️ by Arnav Kumar*
