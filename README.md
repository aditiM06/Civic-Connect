# CivicConnect

**AI-powered civic issue reporting and tracking platform**

CivicConnect is a modern civic technology platform that helps citizens report local infrastructure issues, track their progress, and support community-driven problem solving. The platform is designed to make civic reporting faster, more transparent, and more intelligent through AI-assisted categorization, severity estimation, and priority scoring.

The goal of CivicConnect is not just to collect complaints. It aims to create a transparent bridge between citizens, communities, and local authorities.

---

## Project Vision

Many civic issues such as potholes, garbage accumulation, broken street lights, water leakage, open manholes, and damaged roads often go unreported or unresolved due to fragmented reporting systems.

CivicConnect solves this by providing a centralized platform where:

* Citizens can report issues quickly.
* AI can assist in categorizing and prioritizing reports.
* Communities can verify and support real issues.
* Authorities can track, manage, and resolve complaints efficiently.

---

## Key Features

### Citizen Issue Reporting

Citizens can report civic issues with:

* Issue title
* Category
* Description
* Location
* Image upload
* AI-assisted report generation

The reporting flow is designed to be fast, simple, and mobile-friendly.

---

### AI Issue Assistant

CivicConnect is designed to use AI as an assistant, not as the final decision-maker.

Planned AI capabilities include:

* Issue category suggestion
* Severity estimation
* Description generation
* Duplicate issue detection
* Priority score recommendation

Final decisions remain with human authorities.

---

### Citizen Dashboard

Citizens can view:

* Their reported issues
* Upvoted issues
* Commented issues
* Status updates
* Resolved complaints
* Recent activity

---

### Nearby Issues Map

The platform includes a visual issue map where users can explore civic problems reported around them.

Current frontend includes a map-style interface with:

* Issue pins
* Severity indicators
* Status filters
* Category filters
* Visible issue list

A real interactive map using Leaflet or Google Maps will be integrated later.

---

### Issue Tracking

Each issue follows a transparent status flow:

```text
Reported → Verified → Assigned → In Progress → Resolved → Closed
```

Citizens can track the lifecycle of their reports through detailed issue pages.

---

### Demo User Access

The project includes demo user access so recruiters, evaluators, and hackathon judges can explore the product without creating real credentials.

This helps demonstrate the full user flow clearly during reviews and interviews.

---

## Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS
* React Router
* Font Awesome

### Backend

Planned backend stack:

* Node.js
* Express.js
* MySQL
* JWT Authentication
* bcrypt
* Multer for file uploads

### AI Integration

Planned AI integration:

* Gemini API for text-based AI assistance
* Future computer vision model for image-based issue detection

### Deployment

Planned deployment:

* Frontend: Vercel
* Backend: Render
* Database: Railway / PlanetScale / MySQL-compatible hosting

---

## Current Frontend Pages

### Public Pages

* Landing Page
* Login / Signup Page
* Demo User Entry

### Citizen Pages

* Citizen Dashboard
* Report Issue
* My Issues
* Issue Details
* Nearby Issues Map
* Profile Page

### Planned Admin Pages

* Admin Dashboard
* Manage Reports
* Issue Verification
* Status Management
* Analytics Dashboard

---

## Project Structure

```text
civicConnect/
├── backend/
└── frontend/
    └── src/
        ├── components/
        │   └── layout/
        │       ├── Sidebar.jsx
        │       └── CitizenLayout.jsx
        │
        ├── data/
        │   └── sidebarLinks.js
        │
        ├── pages/
        │   ├── public/
        │   │   ├── LandingPage.jsx
        │   │   └── AuthPage.jsx
        │   │
        │   └── citizen/
        │       ├── CitizenDashboard.jsx
        │       ├── Report.jsx
        │       ├── MyIssues.jsx
        │       ├── IssueDetails.jsx
        │       ├── NearbyIssues.jsx
        │       └── Profile.jsx
        │
        ├── App.jsx
        └── main.jsx
```

---

## Core User Flow

```text
Landing Page
    ↓
Login / Signup / Demo User
    ↓
Citizen Dashboard
    ↓
Report Issue
    ↓
AI Assistance
    ↓
Issue Submitted
    ↓
Community / Authority Review
    ↓
Status Tracking
    ↓
Resolution
```

---

## Why This Project Matters

CivicConnect demonstrates how technology can improve local governance by making civic issue reporting more accessible, transparent, and data-driven.

Instead of relying only on manual complaint handling, the system uses AI to reduce workload, identify urgent issues, and support better decision-making.

---

## Resume Value

This project demonstrates practical full-stack development skills, including:

* React application architecture
* Responsive UI development
* Protected dashboard-style routing
* Role-based product thinking
* Civic-tech problem solving
* AI-assisted workflows
* Planned REST API integration
* Planned authentication and authorization
* Planned database-backed issue tracking
* Planned file upload system
* Deployment-ready project structure

---

## Future Enhancements

* Real backend authentication
* Admin dashboard
* Real issue database
* Image upload support
* Gemini API integration
* Real map integration using Leaflet
* Community verification system
* Comments and upvotes
* Notifications
* Priority scoring engine
* Duplicate report detection
* Multilingual support
* SMS updates
* Authority-side analytics

---

## Project Status

The frontend foundation is currently in progress.

Completed so far:

* Landing page
* Login/signup UI
* Demo user navigation
* Citizen dashboard
* Report issue page
* My issues page
* Issue details page
* Nearby issues map UI
* Citizen profile page
* Collapsible sidebar layout

Next major step:

* Backend API development

---

## Development Philosophy

CivicConnect is being built with a clear goal: quality over quantity.

The project is intended to be a strong, explainable, resume-worthy full-stack application rather than a collection of disconnected features.

AI is used as a development accelerator and product feature, but every major architectural decision, API, database table, and user flow should remain understandable and explainable.

---

## Author

**Aditi Mule**

Computer Science student building real-world, resume-worthy full-stack projects with a focus on practical problem solving, clean architecture, and AI-assisted development.
