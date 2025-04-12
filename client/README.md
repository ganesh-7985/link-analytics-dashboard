# Link Analytics Dashboard 

A full-stack URL shortener with analytics capabilities. Users can create shortened links and track their performance through an intuitive dashboard.

##  Features

- **Authentication System**
  - JWT-based authentication
  - Secure password handling
  - Protected routes

- **Link Management**
  - Create shortened URLs
  - Custom alias support
  - Expiration date setting
  - QR code generation

- **Analytics Dashboard**
  - Click tracking
  - Device analytics
  - Geographic data
  - Time-based statistics
  - Interactive charts

- **Real-time Updates**
  - Asynchronous click logging
  - Live analytics updates
  - Loading states

##  Tech Stack

### Frontend
- React.js
- Chart.js for analytics visualization
- Tailwind CSS for styling
- Axios for API requests
- React Router for navigation

### Backend
- Node.js
- Express.js
- MongoDB
- JWT for authentication
- Bcrypt for password hashing


##  Installation

1. **Clone the repository**
```bash
git clone https://github.com/ganesh-7985/link-analytic-dashboard
cd link-analytics
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file and add your configurations
cp .env.example .env

# Start the server
npm run dev

# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start the application
npm start

```
## server(.env)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/link-analytics
JWT_SECRET=your_super_secret_key_here
```
## client(.env)
```
REACT_APP_API_URL=http://localhost:5000/api
```
## API Endpoints

### Authentication
- `POST /api/auth/login` – User login

### Links
- `POST /api/links` – Create new short link  
- `GET /api/links` – Get all links  
- `GET /api/links/:shortCode` – Redirect to original URL  

###  Analytics
- `GET /api/analytics/:linkId` – Get link analytics  
- `POST /api/analytics/:linkId` – Log click event  

---

## 📊 Dashboard Features

### Link Management
- Create shortened URLs  
- Set custom aliases  
- Configure expiration dates  

###  Analytics Views
- Click statistics  
- Device breakdown  
- Timeline views  
- Geographic distribution  