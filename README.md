# IT310 - Week 14 Task: Contact Form with Express.js

A simple Node.js + Express web server project that serves a contact form, handles form submissions, and logs data. Follows RESTful standards and MVC architecture.

## 🌐 Live Deployment

- **Vercel Live Link**: [https://week14-class-task.vercel.app/](https://week14-class-task-3bwqhgbof.vercel.app)
- **GitHub Repository**: [https://github.com/pmchohan/IT310-week14-task](https://github.com/pmchohan/IT310-week14-task)

## 📁 Folder Structure

```
project-root/
│
├── public/ # Static HTML/CSS
│ ├── index.html
│ ├── style.css
│ └── thankyou.html
│
├── controllers/
│ └── contactController.js
│
├── routes/
│ └── contactRoutes.js
│
├── models/
│ └── contactModel.js
│
├── server.js # Main Express server
├── vercel.json # Deployment config
└── package.json
```

## ✅ Features

- Express server with GET and POST routing
- MVC architecture (routes, controller, model)
- Form input validation (HTML5)
- TailwindCSS UI
- Redirect to "Thank You" page after submission
- Temporary in-memory JSON array storage
- Deployed on Vercel

## 🧠 What I Learned

- How to build and deploy a basic Node.js app
- Structuring Express apps with MVC pattern
- Using middleware and routing in Express
- Integrating Tailwind CSS for clean UI
- Handling form submissions and redirection
