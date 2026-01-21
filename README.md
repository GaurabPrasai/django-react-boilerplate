# Django + React Boilerplate

A modern full-stack web application boilerplate with Django REST Framework backend and React frontend.

## Features

### Backend (Django)

- Django 4.2+ with REST Framework
- CORS headers configured for React
- Sample CRUD API with Items model
- Admin panel setup
- Environment variable configuration
- PostgreSQL ready (SQLite by default)

### Frontend (React)

- React 18 with Hooks
- React Router for navigation
- Axios for API calls
- Sample CRUD operations
- Responsive design
- Modern UI components

## Prerequisites

- Python 3.8+
- Node.js 14+
- npm or yarn

## Project Structure

```
django-react-boilerplate/
├── backend/
│   ├── settings.py
│   └── urls.py
├── api/
│   ├── models.py
│   ├── serializers.py
│   ├── views.py
│   ├── urls.py
│   └── admin.py
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   └── Items.js
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   └── package.json
├── requirements.txt
├── .env.example
└── README.md
```

## Setup Instructions

### Backend Setup

1. **Create and activate virtual environment:**

   ```bash
   python -m venv venv

   # On Windows:
   venv\Scripts\activate

   # On macOS/Linux:
   source venv/bin/activate
   ```

2. **Install dependencies:**

   ```bash
   pip install -r requirements.txt
   ```

3. **Configure environment variables:**

   ```bash
   cp .env.example .env
   # Edit .env file with your settings
   ```

4. **Run migrations:**

   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

5. **Create superuser (optional):**

   ```bash
   python manage.py createsuperuser
   ```

6. **Start the development server:**

   ```bash
   python manage.py runserver
   ```

   The API will be available at `http://localhost:8000/api/`

### Frontend Setup

1. **Navigate to frontend directory:**

   ```bash
   cd frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure environment variables:**

   ```bash
   cp .env.example .env
   # Edit .env if needed (default points to localhost:8000)
   ```

4. **Start the development server:**

   ```bash
   npm start
   ```

   The React app will open at `http://localhost:3000/`

## API Endpoints

- `GET /api/health/` - Health check endpoint
- `GET /api/items/` - List all items
- `POST /api/items/` - Create a new item
- `GET /api/items/{id}/` - Get a specific item
- `PUT /api/items/{id}/` - Update an item
- `DELETE /api/items/{id}/` - Delete an item

## Development Workflow

1. Start the Django backend server (port 8000)
2. Start the React frontend server (port 3000)
3. React will proxy API requests to Django automatically
4. Make changes and see them hot-reload

## Testing

### Backend

```bash
python manage.py test
```

### Frontend

```bash
cd frontend
npm test
```

## Building for Production

### Backend

```bash
python manage.py collectstatic
# Configure your production server (Gunicorn, nginx, etc.)
```

### Frontend

```bash
cd frontend
npm run build
```

The optimized production build will be in `frontend/build/`

## Deployment Tips

1. **Environment Variables:** Use environment variables for sensitive data
2. **Database:** Switch to PostgreSQL for production
3. **Static Files:** Configure proper static file serving
4. **CORS:** Update CORS settings for your production domain
5. **Security:** Set `DEBUG=False` and configure `ALLOWED_HOSTS`

## Common Issues

### CORS Errors

- Make sure Django CORS settings include your React development server
- Check that the proxy setting in `package.json` is correct

### API Connection Failed

- Verify Django server is running on port 8000
- Check that API_URL in React .env matches your backend

### Database Errors

- Run migrations: `python manage.py migrate`
- Check database configuration in settings.py

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - feel free to use this boilerplate for your projects!

## Resources

- [Django Documentation](https://docs.djangoproject.com/)
- [Django REST Framework](https://www.django-rest-framework.org/)
- [React Documentation](https://react.dev/)
- [React Router](https://reactrouter.com/)
