
# 🛠 Full Stack Feedback Tool – Render Deployment Instructions

## 📦 Backend (Node.js + Express)

### 🔗 Deploy on Render (Web Service)
1. Go to https://render.com and create a new Web Service.
2. Connect GitHub and choose this repo.
3. Set root directory to: `backend`
4. Set **Start Command**: `npm start`
5. Set Environment Variables (from `.env.example`):
   - `PORT=5000`
   - `MONGO_URI=your_mongodb_connection_string`
   - `JWT_SECRET=your_secret`

## 🌐 Frontend (React)

### 🔗 Deploy on Render (Static Site)
1. Go to https://render.com and create a new Static Site.
2. Set root directory: `frontend`
3. Set **Build Command**: `npm run build`
4. Set **Publish Directory**: `build`
5. Auto-deploy from GitHub.

---
✅ After deploy, make sure frontend is calling correct backend URL (CORS, API base).
