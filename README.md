🏀 Basketball Practice

Basketball Practice is a training-focused web application designed to help players track and improve their shooting performance over time.
Inspired by Stephen Curry’s masterclass, the app focuses on repetition, consistency, and progress tracking.

✨ Features

🔐 User authentication (signup / login)

📊 Track shooting sessions with detailed stats:

Field Goals

3 Pointers

Layup Left / Right

Free Throws

🗓️ Add sessions for any date (not only today)

📈 Visual statistics dashboard (weekly / monthly / yearly)

🔄 Compare latest session with previous one (Recap)

🧠 Training guide & mindset section

⚙️ Settings & account management

📱 Mobile-first UI (React, Tailwind)

🧠 Training Concept

Each session is based on:

5 consecutive shots per spot

Layups (left & right)

Free throws

The app calculates shooting percentages and helps you visualize progress over time.
Perfect for solo workouts or pre-practice routines.

🛠 Tech Stack
Frontend

React

React Router

Zustand (state management)

Tailwind CSS

ECharts (data visualization)

React Toastify (notifications)

Backend

Node.js

Express

MongoDB (Mongoose)

JWT Authentication

Validator (data validation)

📂 Project Structure (simplified)
src/
├── components/     # Reusable UI components
├── pages/          # Application pages (Session, Stats, Recap, etc.)
├── store/          # Zustand stores
├── utils/          # Helpers & stats logic
├── layouts/        # App / Auth layouts
└── assets/         # Images & icons

🚀 Getting Started
Prerequisites

Node.js

MongoDB (local or cloud)

Installation
git clone https://github.com/your-username/basketball-practice.git
cd basketball-practice
npm install

Run the app
npm run dev


Make sure your backend server and MongoDB are running.

🔐 Environment Variables

Create a .env file in the backend with:

MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret

📱 Roadmap

 React Native mobile version

 Theme customization

 Export stats (CSV / PDF)

 Advanced analytics

 Offline mode

🛡 Privacy

Basketball Practice respects user privacy.
All training data is private and tied to the user account.
No tracking, no ads, no data selling.

📬 Contact

For questions or feedback:
📧 contact@placeholder.com