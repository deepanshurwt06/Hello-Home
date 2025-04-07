
# HEllo HOME

HelloHome is a modern, full-stack real estate listing web application where users can browse, search, and post property listings. Built with a mobile-first responsive design, it's optimized for a great user experience across all devices.

---

## 🚀 Features

- 🔐 User authentication (Sign up, Log in, Log out)
- 🏠 Add, edit, delete listings
- 👤 Update User Profile (Username, Email, Password)
- 🔍 Search and filter listings
- 📱 Responsive mobile-friendly design
- ⚡ Infinite scroll / "Show More" functionality
- 📷 Image upload for listings
- 🎨 Custom logo and favicon

---

## 🔧 Tech Stack

**Frontend:**
- React
- Tailwind CSS
- React Router

**Backend:**
- Node.js
- Express.js
- MongoDB (with Mongoose)

**Authentication:**
- Firebase Authentication

**Hosting & Deployment:**
- GitHub Pages / Vercel (frontend)
- Render / Railway / Heroku (backend)

---




## 🔧 Installation & Setup

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/YOUR_GITHUB_USERNAME/mern-auth.git
cd mern-auth
```

### 2️⃣ Install Dependencies

#### **Backend in root folder**

```sh
npm install
```

#### **Frontend in client folder**

```sh
cd client
npm install
```

### 3️⃣ Set Up Environment Variables

Create a **.env** file in the root folder directory and add:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Create a **.env** file in the `client` directory and add:

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
```

For Firebase image upload, add your Firebase config to `client/firebase.js`:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
export const app = initializeApp(firebaseConfig);
```

### 4️⃣ Run the App

#### **Start Backend**

```sh
npm run dev
```

#### **Start Frontend**

```sh
cd client
npm run dev
```

The app should now be running at [**http://localhost:5173**](http://localhost:5173) 🚀

---



## 🚀 Deployment

The app is hosted on **Render**. You can check it out here: 🔗https://mern-auth-n05i.onrender.com/

---

📌 To Do
Add messaging/chat between buyers & sellers

Add map integration

Improve SEO and metadata

Deploy fullstack app

---

## 🤝 Contributing

Feel free to fork this repo, open issues, and submit pull requests! 🚀

📂 **GitHub Repo:https://github.com/deepanshurwt06/mern-auth 👨‍💻 **GitHub Profile: https://github.com/deepanshurwt06

---

## 📜 License

This project is open-source and available under the **MIT License**.

---

## 🎉 Acknowledgments

Thanks for checking out this project! If you find it useful, give it a ⭐ on GitHub! 😃



