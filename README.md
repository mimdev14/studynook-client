# StudyNook – Library Study Room Booking

Live site: https://studynook-client-zeta.vercel.app

StudyNook is a full-stack platform where students and library users can list and book private study rooms, with automatic double-booking prevention and secure authentication.

- 🔐 Secure JWT authentication via HTTP-only cookies, with email/password and Google OAuth login
- 🏫 Browse, search by name, and filter available rooms by amenities
- 📅 Book rooms with a live cost calculator and automatic time-conflict prevention
- 🛠️ List and manage your own study rooms with full edit and delete control
- 📖 Track, view, and cancel your bookings from a personal dashboard
- 🌐 Responsive design across mobile, tablet, and desktop
- 🚫 Custom 404 page and reload-safe routing on every page

## Tech Stack
- **Frontend:** Next.js, React, Tailwind CSS
- **Auth:** Better Auth (email/password + Google OAuth)
- **Backend:** Node.js, Express (see [server repo](https://github.com/mimdev14/studyNook_server.git))
- **Database:** MongoDB

## Getting Started
```bash
npm install
npm run dev
```
Create a `.env` file based on `.env.example` before running.
