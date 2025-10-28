# 📧 Email Remainder System

![React](https://img.shields.io/badge/Frontend-React-blue?logo=react)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green?logo=node.js)
![Express](https://img.shields.io/badge/API-Express-lightgrey?logo=express)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-green?logo=mongodb)
![Nodemailer](https://img.shields.io/badge/Email-Nodemailer-yellow?logo=gmail)
![License](https://img.shields.io/badge/License-MIT-blue)

> A full-stack Email Remainder System that allows users to schedule and send reminder emails automatically using **React**, **Node.js**, **Express**, **Nodemailer**, and **MongoDB Atlas**.

---

## 🚀 Features

- ✉️ Schedule and send email reminders automatically  
- 🕒 Date & time-based scheduling using **node-schedule**  
- 📦 Persistent storage via **MongoDB Atlas**  
- ⚙️ REST API built with **Express.js**  
- 🌐 Frontend built with **React + Axios**  
- 🔔 Email delivery handled through **Nodemailer (SendGrid / SMTP)**  

---

## 🧩 Tech Stack

| Layer | Technology |
|-------|-------------|
| Frontend | React, Axios |
| Backend | Node.js, Express |
| Database | MongoDB Atlas |
| Email Service | Nodemailer / SendGrid |
| Scheduler | Node Schedule |
| Deployment | Render (Backend , Frontend) |

---

## 📁 Folder Structure

```
email-remainder-system/
│
├── backend/
│   ├── server.js
│   ├── .env
│   ├── models/
│   └── package.json
│
├── MailRemainder/
│   ├── src/
│   │   ├── App.js
│   │   ├── components/
|   |   ├──assts/
│   │   ├── pages/
│   │   └── utils/
│   ├── public/
│   └── package.json
│
└── README.md
```

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Rahul-Sundarraj/email-remainder-system.git
cd email-remainder-system
```

### 2️⃣ Backend Setup
```bash
cd MailRemainderBackend
npm install
```

Create a `.env` file in the `backend` folder:
```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
EMAIL_USER=apikey
EMAIL_PASS=your_sendgrid_or_smtp_key
```

Start the backend:
```bash
npm start
```
or for development:
```bash
npm run dev
```

### 3️⃣ Frontend Setup
```bash
cd ../
npm install
npm run dev
```

---

## 🔗 API Endpoints

| Method | Endpoint | Description |
|--------|-----------|-------------|
| POST | `/createremainder` | Create a new reminder |
| GET | `/mails` | Get all reminders |
| PUT | `/editremainder/:id` | Update an existing reminder |
| DELETE | `/deleteremainder/:id` | Delete a reminder |

---

## 🧠 How It Works

1. User creates a reminder with title, message, email, date, and time  
2. The data is stored in **MongoDB Atlas**  
3. **Node Schedule** monitors upcoming reminders  
4. When time is reached, **Nodemailer** sends the email automatically  

---

## 🌍 Deployment

- **Frontend** → [Render] (https://email-remainder-1.onrender.com/)
- **Backend** → [Render](https://email-remainder.onrender.com/)  

Make sure to update your frontend Axios base URL:
```js
const api = axios.create({
  baseURL: "https://email-remainder.onrender.com/"
});

```

---

## 🧑‍💻 Author

**Rahul**  
📫  sundarrajrahul@gmail.com
🖥️ GitHub: [Rahul-Sundarraj](https://github.com/Rahul-Sundarraj/Email-Remainder)

---

## 🪪 License
This project is licensed under the **MIT License** – feel free to use and modify it.

---

### ⭐ Don’t forget to star this repo if you found it helpful!
### ! Don't miss use this ..
