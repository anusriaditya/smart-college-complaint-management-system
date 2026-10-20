# Saveetha Pulse (Team Pentagon)
### Smart College Complaint Management System with 3D Saveetha Main Block & 3-Color Priority Light Hub

A unique, fully interactive, and visually striking web prototype built tailored specifically for **Saveetha College** by **Team Pentagon**.

---

## 🌟 Key Features

### 1. Interactive 3D Model of Saveetha Main Block & 3-Color Light Hub
- **3D Digital Twin**: Built with Three.js rendering the iconic Saveetha Main Block architectural structure:
  - **Ground Floor**: Grand Portico Pillars, Administration & Auditorium
  - **1st Floor**: CSE Labs, High Performance Computing & Biotech Wing
  - **2nd Floor**: Smart Classrooms 201-215 & IoT Embedded Systems Lab
  - **3rd Floor**: AI & Robotics Innovation Incubator & Seminar Hall
  - **Terrace & Pinnacle**: Rooftop Chiller Plants & Emergency Telecom Mast
- **Interactive 3-Color Priority Light Tower**:
  - 🟢 **Green Light (Normal / Low Priority, 0-39)**: Few or minor issues, fast resolution.
  - 🟡 **Yellow Light (Moderate / Medium Priority, 40-69)**: Accumulating common issues requiring attention soon.
  - 🔴 **Red Light (Critical / High Priority, 70-100)**: Urgent common infrastructure or safety failures needing immediate admin dispatch.
  - **Live Filter**: Clicking any tower light instantly filters the complaint feed.
  - **Dynamic Urgency Calculation**: Upvoting complaints or submitting high-urgency issues immediately pushes the beacon light between Green, Yellow, and Red!

### 2. Authentication & Role Switcher
- Clean modal with **Student**, **Faculty**, and **Admin** tabs.
- **1-Click Demo Logins**:
  - `Student`: Aravind Krishna (B.Tech CSE 3rd Year • Reg: 2024SEC0412)
  - `Faculty`: Dr. R. Karthik (Associate Professor & HOD In-Charge)
  - `Admin`: M. Sundaram (Chief Estate Officer & Campus Controller)
- Instant top-bar role switcher to test permissions seamlessly.

### 3. Advanced Complaint Submission (3 Unique Modes)
- **Personal Complaint**: Strictly private, visible only to the filer and estate administration (e.g. hostel lockers, fees).
- **Anonymous Complaint**: Student identity completely scrubbed (`#ANON-PENTAGON-931` Zero-Log protocol) for sensitive issues (ragging, harassment).
- **Common / Public Complaint**: Visible to all campus students. Driven by a dynamic **Priority Score Algorithm**:
  $$\text{Priority Score} = \text{Base Severity} + (\text{Upvotes} \times 5.5) + (\text{Views} \times 0.2) + \text{Urgency Keyword Matches}$$
  - Detects keywords like *fire*, *spark*, *short circuit*, *flood*, *broken glass*, *danger*, *exam*.

### 4. Student & Admin Command Center
- **Student Dashboard**: Filter by floor and category, upvote common complaints, track ticket lifecycle with audit timeline.
- **Admin Command Center**:
  - Master triage grid categorized by Personal, Anonymous, and Common.
  - Automated Priority Score badges with scoring breakdown.
  - 1-Click Fast Maintenance Dispatch to Saveetha Main Block (assigns teams like Electrical, Plumbing, HVAC, Network, Vigilance).
  - Mark resolved with celebratory confetti and real-time urgency cooldown.

---

## 🛠️ Technology Stack
- **Framework**: React 18, Vite
- **Styling**: Tailwind CSS, Glassmorphism UI
- **3D Graphics**: Three.js (WebGL, Dynamic Volumetric Beacons, Orbit Controls)
- **Icons**: Lucide React
- **Audio Feedback**: Web Audio API Synthesizer (crisp upvote and dispatch chimes)
- **Animations & Effects**: Canvas Confetti, Custom Keyframes

---

## 🚀 Running Locally
```bash
npm install
npm run dev
```
The prototype runs at `http://localhost:3000`.
