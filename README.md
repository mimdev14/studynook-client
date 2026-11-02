# ClassRoom — Flexible Space Rental Platform

**Book the space. Make it happen.**
![Home Page](./screenshots/home.png)

ClassRoom is a full-stack space rental platform designed to make professional and creative spaces accessible to everyone. It aims to help content creators, educators, students, freelancers, and professionals find and rent suitable spaces according to their needs and preferred duration.

Whether someone needs a podcast studio for an hour, a classroom for an online session, an office for a meeting, or a venue for a small seminar, ClassRoom aims to make finding and booking that space simple and flexible.

> **Project Status:** Demo Project | Existing Booking Platform with an Expanded Product Vision

**Live Demo:** [StudyNook](https://studynook-client-zeta.vercel.app/)

## The Problem

Finding an affordable and suitable physical space for short-term activities can be difficult. Many people need professional environments but cannot afford permanent studios, offices, or classrooms.

Traditional rental arrangements often involve longer commitments, while many modern activities only require a space for a few hours.

ClassRoom aims to address this gap through flexible, time-based space rentals.

## Core Features

The current implementation includes:

- 🔐 **Secure Authentication:** Email/password and Google OAuth authentication using Better Auth.
- 🏢 **Room Discovery:** Browse, search by name, and filter available rooms by amenities.
- 📅 **Flexible Booking:** Book rooms with a live cost calculator.
- 🚫 **Double-Booking Prevention:** Automatic time-conflict validation to prevent overlapping reservations.
- 🛠️ **Room Management:** List, edit, and delete your own study rooms.
- 📖 **Booking Dashboard:** View, manage, and cancel personal bookings.
- 📱 **Responsive Design:** Optimized for mobile, tablet, and desktop.
- 🌐 **Custom Routing:** Custom 404 page and reload-safe routing.

## Future Vision

ClassRoom is evolving beyond traditional study room booking into a flexible space rental marketplace.

Planned space categories include:

- 🎙️ **Podcast & Recording Studios:** Spaces for podcasting, YouTube videos, interviews, voiceovers, and content creation.
- 🎓 **Teaching & Learning Rooms:** Spaces for online classes, tutoring, course recording, and group learning.
- 💻 **Office & Meeting Rooms:** Temporary workspaces, private offices, and business meeting facilities.
- 🏫 **Seminar & Event Spaces:** Venues for workshops, presentations, training sessions, and small events.

## Planned Features

- **Hourly & Flexible Pricing:** Rent spaces by the hour, half-day, or full-day instead of committing to monthly rentals.
- **Equipment Selection:** Choose optional facilities such as microphones, cameras, lighting, projectors, whiteboards, and recording equipment.
- **Custom Booking:** Select a date, starting time, ending time, and number of attendees.
- **Dynamic Price Calculation:** Calculate rental costs based on duration and selected facilities.
- **Space Owner Dashboard:** Manage listings, availability, pricing, and incoming reservations.
- **Advanced Search & Filters:** Discover spaces based on category, location, capacity, price, and facilities.
- **Online Payments:** Secure payment processing for confirmed bookings.
- **Booking Management:** Track upcoming, completed, and cancelled reservations.

## Tech Stack

| Category               | Technologies                 |
| ---------------------- | ---------------------------- |
| Frontend               | Next.js, React               |
| Styling                | Tailwind CSS                 |
| Authentication         | Better Auth                  |
| Backend                | Node.js, Express.js          |
| Database               | MongoDB                      |
| Authentication Methods | Email/Password, Google OAuth |

## Project Architecture

ClassRoom uses a separate frontend and backend architecture.

- **Client Repository:** Current frontend application.
- **Server Repository:** [StudyNook Server](https://github.com/mimdev14/studyNook_server)

## Getting Started

Follow these steps to run the frontend locally.

### Prerequisites

- Node.js
- npm
- Access to the backend API
- MongoDB configuration for the backend

### Installation

1. Clone the frontend repository.
2. Navigate to the project directory.
3. Install dependencies:
```
npm install
```

4. Create a `.env` file using `.env.example` as a reference and configure the required environment variables.
5. Start the development server:
```
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Backend Setup

The backend is maintained separately.

Visit the [StudyNook Server Repository](https://github.com/mimdev14/studyNook_server) for backend installation and configuration instructions.

## Project Vision

ClassRoom is a demonstration of how technology can make physical spaces more accessible and useful.

The long-term goal is to build a platform where people can access the right environment for learning, teaching, working, and creating — without unnecessary long-term rental commitments.

**ClassRoom — Space for every idea.**

---

*Built as a full-stack development project. Features described under Future Vision and Planned Features are part of the proposed product roadmap and may not yet be implemented.*
