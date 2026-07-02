# 🚀 JobFlow AI — Smart AI Job Board Platform

JobFlow AI is a modern AI-powered job board built with Next.js.  
It connects **candidates and recruiters** through a clean, role-based experience with smart UI/UX and scalable architecture.

---

## 🌐 Live Demo

👉 https://your-vercel-link.vercel.app

---

## 📸 Preview

(Add screenshots here if possible)

- Home Page
- Jobs Listing Page
- Job Details Page
- Login / Signup Modal

---

## ✨ Key Features

### 👨‍💼 Candidate Features
- Browse jobs from top companies
- Search jobs instantly
- Filter by job type (Remote / Hybrid / On-site)
- Save favorite jobs (LocalStorage)
- Apply for jobs via modal UI

### 🧑‍💼 Recruiter Features
- Role-based dashboard system
- Recruiter UI state handling
- Post Job button (UI ready)
- Separate recruiter experience flow

---

## 🔐 Authentication (Frontend Logic)

- Login / Signup modal system
- Role selection (Candidate / Recruiter)
- Session stored using LocalStorage
- Dynamic UI rendering based on role

---

## 💡 UX / UI Highlights

- Modern dark theme UI
- Smooth animations (Framer Motion)
- Responsive design for all devices
- Interactive job cards
- Clean modal-based interactions
- Accessible form components

---

## 🧠 Tech Stack

- Next.js 14 (App Router)
- React.js
- TypeScript
- Tailwind CSS
- Framer Motion
- Radix UI
- Lucide Icons
- Sonner (toasts)

---

## ⚙️ CI/CD Pipeline

- GitHub Actions for automation
- Vercel deployment integration
- Auto build on every push to main branch

---

## 🚀 Deployment Flow

```text
GitHub Push → GitHub Actions → Build → Vercel Deploy → Live App
## 📂 Project Structure

/app              → App Router pages
/components       → Reusable UI components
/components/ui    → Radix + shadcn UI components
/lib              → Utility functions
/public           → Static assets

## 🔮 Future Improvements

- Add backend authentication (NextAuth / Clerk)
- Integrate database (PostgreSQL / Neon)
- Enable recruiter job posting (CRUD system)
- AI-powered job recommendations
- Resume upload and parsing system
- Email notifications for job alerts
