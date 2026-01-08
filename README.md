# Podlove Frontend

## 🎯 Overview

Podlove Frontend is a modern, responsive web application built with React and Vite. It provides an intuitive dating experience with AI-powered matching, real-time chat, video podcasts, and subscription management.

---

## 🛠 Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Language**: JavaScript (JSX)
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **Routing**: React Router v6
- **HTTP Client**: Axios
- **Real-time**: Socket.io Client
- **Authentication**: Firebase Auth
- **Forms**: React Hook Form
- **UI Components**: Custom + Headless UI
- **Icons**: React Icons
- **Date Handling**: date-fns
- **Animations**: Framer Motion

---

## 📁 Project Structure

```
podLove-website/
├── public/                      # Static assets
│   ├── favicon.ico
│   └── images/
├── src/
│   ├── App.jsx                 # Root component
│   ├── App.css                 # Global styles
│   ├── main.jsx                # Application entry point
│   ├── index.css               # Global CSS & Tailwind imports
│   ├── baseUrl.js              # API base URL configuration
│   ├── firebase.js             # Firebase configuration
│   ├── assets/                 # Images, icons, fonts
│   ├── component/              # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Modal.jsx
│   │   ├── Button.jsx
│   │   └── ...
│   ├── page/                   # Page components
│   │   ├── Home.jsx
│   │   ├── Profile.jsx
│   │   ├── Matches.jsx
│   │   ├── Chat.jsx
│   │   ├── Podcast.jsx
│   │   ├── Subscription.jsx
│   │   └── ...
│   ├── redux/                  # Redux state management
│   │   ├── store.js
│   │   ├── slices/
│   │   │   ├── authSlice.js
│   │   │   ├── userSlice.js
│   │   │   ├── matchSlice.js
│   │   │   └── ...
│   │   └── api/
│   │       ├── authApi.js
│   │       ├── userApi.js
│   │       └── ...
│   ├── helpers/                # Utility functions
│   │   ├── validators.js
│   │   ├── formatters.js
│   │   └── ...
│   ├── constants/              # App constants
│   │   ├── routes.js
│   │   ├── apiEndpoints.js
│   │   └── ...
│   └── Interest/               # Interest selection components
├── .env                        # Environment variables
├── .gitignore
├── eslint.config.js            # ESLint configuration
├── index.html                  # HTML entry point
├── package.json
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── vite.config.js              # Vite configuration
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn
- Backend API running (see backend README)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd podlove/podLove-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env` file in the `podLove-website` directory:
   
   ```bash
   # API Configuration
   VITE_API_BASE_URL=http://localhost:5000/api
   
   # Firebase Configuration
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your-app.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-app.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
   VITE_FIREBASE_APP_ID=1:123456789:web:abcdef
   
   # Stripe (for frontend integration)
   VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_key
   
   # Socket.io (Real-time chat)
   VITE_SOCKET_URL=http://localhost:5000
   
   # Google Maps (Optional - for location features)
   VITE_GOOGLE_MAPS_API_KEY=your_google_maps_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
   
   The app will start on `http://localhost:5173`

---

## 📝 Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Format code (if configured)
npm run format
```

---

## 🔑 Environment Variables

### Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_API_BASE_URL` | Backend API base URL | `http://localhost:5000/api` |
| `VITE_FIREBASE_API_KEY` | Firebase API key | `AIza...` |
| `VITE_FIREBASE_PROJECT_ID` | Firebase project ID | `podlove-app` |
| `VITE_STRIPE_PUBLISHABLE_KEY` | Stripe publishable key | `pk_test_...` |

### Optional Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_SOCKET_URL` | Socket.io server URL | `http://localhost:5000` |
| `VITE_GOOGLE_MAPS_API_KEY` | Google Maps API key | - |

**Note**: All environment variables must be prefixed with `VITE_` to be accessible in the app.

---

## 🔐 Authentication Flow

1. **Sign Up / Login**
   - User signs up with email/password or social auth (Google, Facebook)
   - Firebase handles authentication
   - Backend receives Firebase token and creates user account

2. **JWT Token Management**
   - Firebase ID token is sent to backend
   - Backend validates token and returns JWT
   - JWT stored in localStorage/sessionStorage
   - Included in all API requests via `Authorization` header

3. **Protected Routes**
   - Routes wrapped with `PrivateRoute` component
   - Redirects to login if not authenticated
   - Token refresh on expiry

**Example usage:**
```jsx
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('authToken');
  return token ? children : <Navigate to="/login" />;
};
```

---

## 🎨 Styling

### Tailwind CSS

The app uses Tailwind CSS for utility-first styling:

```jsx
<div className="flex items-center justify-center p-4 bg-blue-500 rounded-lg shadow-md">
  <h1 className="text-2xl font-bold text-white">Hello Podlove!</h1>
</div>
```

### Custom Theme

Tailwind configuration in `tailwind.config.js`:

```javascript
export default {
  theme: {
    extend: {
      colors: {
        primary: '#FF6B6B',
        secondary: '#4ECDC4',
        accent: '#FFE66D',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
}
```

### Global Styles

Global CSS in `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .btn-primary {
    @apply px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark;
  }
}
```

---

## 🗺 Routing

Routes are defined in `src/App.jsx`:

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* Protected Routes */}
        <Route path="/profile" element={
          <PrivateRoute><Profile /></PrivateRoute>
        } />
        <Route path="/matches" element={
          <PrivateRoute><Matches /></PrivateRoute>
        } />
        <Route path="/chat" element={
          <PrivateRoute><Chat /></PrivateRoute>
        } />
        <Route path="/podcast" element={
          <PrivateRoute><Podcast /></PrivateRoute>
        } />
        <Route path="/subscription" element={
          <PrivateRoute><Subscription /></PrivateRoute>
        } />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
```

---

## 🔄 State Management (Redux)

### Store Setup

```javascript
// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import userReducer from './slices/userSlice';
import matchReducer from './slices/matchSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    matches: matchReducer,
  },
});
```

### Slice Example

```javascript
// src/redux/slices/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: localStorage.getItem('authToken'),
    isAuthenticated: !!localStorage.getItem('authToken'),
  },
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      localStorage.setItem('authToken', action.payload.token);
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem('authToken');
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
```

### Usage in Components

```jsx
import { useSelector, useDispatch } from 'react-redux';
import { setCredentials, logout } from '../redux/slices/authSlice';

function ProfilePage() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return <div>Welcome, {user?.name}!</div>;
}
```

---

## 📡 API Integration

### Axios Configuration

```javascript
// src/api/axiosConfig.js
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

// Request interceptor (add auth token)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor (handle errors)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Redirect to login
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
```

### API Service Example

```javascript
// src/api/userApi.js
import api from './axiosConfig';

export const userApi = {
  getProfile: () => api.get('/users/profile'),
  updateProfile: (data) => api.put('/users/profile', data),
  uploadAvatar: (file) => {
    const formData = new FormData();
    formData.append('avatar', file);
    return api.post('/users/avatar', formData);
  },
};
```

---

## 💬 Real-time Chat (Socket.io)

### Socket Connection

```javascript
// src/socket/socketConfig.js
import { io } from 'socket.io-client';

const socket = io(import.meta.env.VITE_SOCKET_URL, {
  auth: {
    token: localStorage.getItem('authToken'),
  },
});

export default socket;
```

### Usage in Chat Component

```jsx
import { useEffect, useState } from 'react';
import socket from '../socket/socketConfig';

function ChatPage() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('newMessage', (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => socket.off('newMessage');
  }, []);

  const sendMessage = (text) => {
    socket.emit('sendMessage', { text, chatId: '123' });
  };

  return <div>{/* Chat UI */}</div>;
}
```

---

## 💳 Payment Integration (Stripe)

### Stripe Checkout

```jsx
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

function SubscriptionPage() {
  const handleCheckout = async (plan) => {
    const response = await api.post('/subscriptions/checkout', { plan });
    const stripe = await stripePromise;
    await stripe.redirectToCheckout({
      sessionId: response.data.sessionId,
    });
  };

  return (
    <button onClick={() => handleCheckout('SEEKER')}>
      Subscribe to Seeker Plan
    </button>
  );
}
```

---

## 🧪 Testing

### Manual Testing

```bash
# Start development server
npm run dev

# Test authentication
# 1. Go to /signup
# 2. Create account
# 3. Verify redirect to profile

# Test matching
# 1. Complete profile
# 2. Go to /matches
# 3. Click "Find Matches"
# 4. Verify matches appear

# Test chat
# 1. Go to /chat
# 2. Select conversation
# 3. Send message
# 4. Verify real-time delivery
```

### Browser Testing

- **Chrome**: Primary development browser
- **Firefox**: Secondary testing
- **Safari**: iOS compatibility
- **Edge**: Windows compatibility

---

## 📱 Responsive Design

### Breakpoints (Tailwind)

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      'sm': '640px',   // Mobile
      'md': '768px',   // Tablet
      'lg': '1024px',  // Desktop
      'xl': '1280px',  // Large desktop
      '2xl': '1536px', // Extra large
    },
  },
}
```

### Mobile-First Approach

```jsx
<div className="w-full sm:w-1/2 lg:w-1/3">
  {/* Full width on mobile, half on tablet, third on desktop */}
</div>
```

---

## 🚀 Production Deployment

### Build for Production

```bash
npm run build
```

Output in `dist/` directory.

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod

# Set environment variables
vercel env add VITE_API_BASE_URL
vercel env add VITE_FIREBASE_API_KEY
# ... add all other env vars
```

### Deploy to Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Login
netlify login

# Build and deploy
npm run build
netlify deploy --prod --dir=dist

# Set environment variables in Netlify dashboard
```

### Deploy to AWS S3 + CloudFront

```bash
# Build
npm run build

# Upload to S3
aws s3 sync dist/ s3://podlove-frontend

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

---

## 🔧 Performance Optimization

### Code Splitting

```jsx
import { lazy, Suspense } from 'react';

const Matches = lazy(() => import('./page/Matches'));
const Chat = lazy(() => import('./page/Chat'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/matches" element={<Matches />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Suspense>
  );
}
```

### Image Optimization

```jsx
import { useState } from 'react';

function Avatar({ src, alt }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <div className="skeleton" />}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={loaded ? 'visible' : 'hidden'}
      />
    </>
  );
}
```

### Bundle Size Analysis

```bash
# Install analyzer
npm install -D rollup-plugin-visualizer

# Build with analysis
npm run build

# Open report
open stats.html
```

---

## 🐛 Troubleshooting

### Common Issues

**1. API requests fail (CORS)**
```javascript
// Ensure backend allows your frontend origin
// Backend: app.use(cors({ origin: 'http://localhost:5173' }))
```

**2. Environment variables not working**
```bash
# Must be prefixed with VITE_
VITE_API_BASE_URL=http://localhost:5000/api  # ✅ Correct
API_BASE_URL=http://localhost:5000/api       # ❌ Wrong
```

**3. Build fails**
```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

**4. Socket.io connection fails**
```javascript
// Check Socket.io server URL
console.log('Socket URL:', import.meta.env.VITE_SOCKET_URL);

// Check server CORS settings
// Backend: io(server, { cors: { origin: 'http://localhost:5173' } })
```

---

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Redux Toolkit](https://redux-toolkit.js.org)
- [Firebase Auth](https://firebase.google.com/docs/auth)

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Use functional components with hooks
- Follow React best practices
- Use Tailwind for styling (avoid inline styles)
- Write descriptive component names
- Add PropTypes or TypeScript types
- Keep components small and reusable

---

## 📄 License

This project is proprietary and confidential.

---

## 📞 Support

- **Email**: frontend@podlove.com
- **Slack**: #frontend-support
- **Issues**: [GitHub Issues](https://github.com/your-org/podlove/issues)

---

**Last Updated**: December 30, 2025  
**Version**: 2.0.0