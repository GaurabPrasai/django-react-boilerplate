@echo off
echo ========================================
echo Django + React Boilerplate Setup
echo ========================================
echo.

REM Check if Python is installed
python --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Python is not installed or not in PATH
    echo Please install Python 3.8 or higher from https://www.python.org/
    pause
    exit /b 1
)

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo [OK] Python and Node.js found
echo.

echo ========================================
echo Setting up Django Backend...
echo ========================================

REM Create virtual environment
echo Creating virtual environment...
python -m venv venv

REM Activate virtual environment
echo Activating virtual environment...
call venv\Scripts\activate.bat

REM Install Python dependencies
echo Installing Python packages...
pip install -r requirements.txt

REM Copy environment file
if not exist .env (
    echo Creating .env file...
    copy .env.example .env
)

REM Run migrations
echo Running database migrations...
python manage.py makemigrations
python manage.py migrate

echo.
echo ========================================
echo Setting up React Frontend...
echo ========================================

REM Navigate to frontend directory
cd frontend

REM Install npm packages
echo Installing npm packages...
call npm install

REM Copy frontend environment file
if not exist .env (
    echo Creating frontend .env file...
    copy .env.example .env
)

cd ..

echo.
echo ========================================
echo Setup Complete!
echo ========================================
echo.
echo To run the project:
echo.
echo 1. Backend (Terminal 1):
echo    venv\Scripts\activate
echo    python manage.py makemigrations api
echo    python manage.py migrate
echo    python manage.py runserver
echo.
echo 2. Frontend (Terminal 2):
echo    cd frontend
echo    npm start
echo.
echo The React app will open at: http://localhost:3000
echo The Django API will be at: http://localhost:8000/api
echo.
pause