
# MERN Authentication Boilerplate

This is a **MERN (MongoDB, Express, React, Node.js) authentication app**, designed as a boilerplate for applications that require user authentication. It includes essential features like **sign-in, sign-up, user profile updates, and image uploads**. Redux is used for state management, and the app is hosted on **Render**.

## 🚀 Features

- 🔐 User Authentication (Sign Up, Sign In , Sign Out)
- 👤 Update User Profile (Username, Email, Password)
- 🖼️ Upload & Update Profile Picture
- ❌ Delete User Account
- 🔄 Redux for State Management
- 🌍 Hosted on **Render**

---

## 🛠️ Tech Stack

- **Frontend:** React.js (with Redux for state management)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **State Management:** Redux Toolkit
- **File Uploads:** Firebase Storage
- **Hosting:** Render

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
cd frontend
npm run dev
```

The app should now be running at [**http://localhost:5173**](http://localhost:5173) 🚀

---

## 🖥️ API Endpoints

| Method     | Endpoint               | Description           |
| ---------- | ---------------------- | --------------------- |
| **POST**   | `/api/auth/signup`     | Register a new user   |
| **POST**   | `/api/auth/signin`     | Login user            |
| **POST**   | `/api/auth/google`     | Google Authentication |
| **PUT**    | `/api/user/update/:id` | Update user details   |
| **DELETE** | `/api/user/delete/:id` | Delete user           |
| **SIGNOUT** | `/api/auth/signout`   | User Sign Out         |

## 🚀 Deployment

The app is hosted on **Render**. You can check it out here: 🔗https://mern-auth-n05i.onrender.com/

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



