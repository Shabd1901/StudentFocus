# 🎓 StudentFocus

A simple, clean, and responsive Flask-based productivity web app designed for students.  
Version 1 focuses on clarity and usability — helping students track moods, write notes, and plan ahead.

---

## 🚀 Tech Stack

- **Python (Flask)** – lightweight web framework for routing and templating
- **Bootstrap 5** – responsive and clean UI design
- **HTML/CSS/JS** – for layout, styling, and interactivity
- **Render / Railway** – used for deployment

---

## ✨ Features

- 🧠 **Mood Tracker UI** (static, v1)  
- 📓 **Note-taking** section  
- 📅 **Basic Planner** UI  
- 🎉 **Confetti animation** on key actions  
- 📱 **Responsive layout** with sidebar navigation  
- 🧘‍♀️ Student-friendly design and smooth user experience

---

## 📁 Folder Structure

StudentFocus/
├── static/ # CSS, JS, images
│ ├── style.css
│ └── confetti.js
├── templates/ # HTML templates
│ ├── layout.html
│ ├── index.html
│ ├── mood.html
│ ├── notes.html
│ └── planner.html
├── main.py # Flask app entry point
├── requirements.txt # Python dependencies
└── README.md


---

## 🚧 Limitations (v1)

- No user login or authentication
- No data persistence (data resets on refresh)
- Shared space: all users interact with the same instance

---

## 🔮 Future Plans (v2+)

- User login / signup (Flask-Login or Firebase Auth)
- Mood tracking with charts and saved entries
- Note-saving with edit/delete options
- Planner with calendar sync and subject-wise tasks
- Dark mode toggle
- Daily motivational quotes

---

## 🛠️ Installation (Local Setup)

```bash
git clone https://github.com/Shabd1901/StudentFocus.git
cd StudentFocus
pip install -r requirements.txt
python main.py
