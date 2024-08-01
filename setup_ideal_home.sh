#!/bin/bash

# Create project directories
mkdir -p ideal_home_website/app/templates
mkdir -p ideal_home_website/app/static/css
mkdir -p ideal_home_website/app/static/js
mkdir -p ideal_home_website/app/static/images
mkdir ideal_home_website/migrations
mkdir ideal_home_website/venv

# Create project files
touch ideal_home_website/app/__init__.py
touch ideal_home_website/app/models.py
touch ideal_home_website/app/routes.py
touch ideal_home_website/app/forms.py
touch ideal_home_website/config.py
touch ideal_home_website/wsgi.py
touch ideal_home_website/Procfile
touch ideal_home_website/requirements.txt
touch ideal_home_website/runtime.txt

# Create HTML templates
cat <<EOL > ideal_home_website/app/templates/index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home - Ideal Home</title>
    <link rel="stylesheet" href="{{ url_for('static', filename='css/styles.css') }}">
</head>
<body>
    <header>
        <h1>Welcome to Ideal Home</h1>
        <nav>
            <a href="{{ url_for('routes.index') }}">Home</a>
            <a href="{{ url_for('routes.edit_profile') }}">Profile</a>
            <a href="{{ url_for('routes.logout') }}">Logout</a>
        </nav>
    </header>
    <main>
        <h2>Home Page</h2>
        <p>Welcome to your Ideal Home dashboard!</p>
    </main>
</body>
</html>
EOL

cat <<EOL > ideal_home_website/app/templates/login.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - Ideal Home</title>
    <link rel="stylesheet" href="{{ url_for('static', filename='css/styles.css') }}">
</head>
<body>
    <header>
        <h1>Login to Ideal Home</h1>
    </header>
    <main>
        <form method="POST" action="{{ url_for('routes.login') }}">
            {{ form.hidden_tag() }}
            <div>
                {{ form.username.label }}
                {{ form.username() }}
            </div>
            <div>
                {{ form.password.label }}
                {{ form.password() }}
            </div>
            <div>
                {{ form.remember_me() }}
                {{ form.remember_me.label }}
            </div>
            <div>
                {{ form.submit() }}
            </div>
        </form>
        <p>Don't have an account? <a href="{{ url_for('routes.register') }}">Register here</a>.</p>
    </main>
</body>
</html>
EOL

cat <<EOL > ideal_home_website/app/templates/register.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register - Ideal Home</title>
    <link rel="stylesheet" href="{{ url_for('static', filename='css/styles.css') }}">
</head>
<body>
    <header>
        <h1>Register for Ideal Home</h1>
    </header>
    <main>
        <form method="POST" action="{{ url_for('routes.register') }}">
            {{ form.hidden_tag() }}
            <div>
                {{ form.username.label }}
                {{ form.username() }}
            </div>
            <div>
                {{ form.email.label }}
                {{ form.email() }}
            </div>
            <div>
                {{ form.password.label }}
                {{ form.password() }}
            </div>
            <div>
                {{ form.password2.label }}
                {{ form.password2() }}
            </div>
            <div>
                {{ form.submit() }}
            </div>
        </form>
        <p>Already have an account? <a href="{{ url_for('routes.login') }}">Login here</a>.</p>
    </main>
</body>
</html>
EOL

cat <<EOL > ideal_home_website/app/templates/user.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ user.username }} - Ideal Home</title>
    <link rel="stylesheet" href="{{ url_for('static', filename='css/styles.css') }}">
</head>
<body>
    <header>
        <h1>{{ user.username }}'s Profile</h1>
        <nav>
            <a href="{{ url_for('routes.index') }}">Home</a>
            <a href="{{ url_for('routes.edit_profile') }}">Edit Profile</a>
            <a href="{{ url_for('routes.logout') }}">Logout</a>
        </nav>
    </header>
    <main>
        <p><strong>Username:</strong> {{ user.username }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
        <p><strong>About Me:</strong> {{ user.about_me }}</p>
        <p><strong>Last Seen:</strong> {{ user.last_seen }}</p>
    </main>
</body>
</html>
EOL

cat <<EOL > ideal_home_website/app/templates/edit_profile.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit Profile - Ideal Home</title>
    <link rel="stylesheet" href="{{ url_for('static', filename='css/styles.css') }}">
</head>
<body>
    <header>
        <h1>Edit Your Profile</h1>
    </header>
    <main>
        <form method="POST" action="{{ url_for('routes.edit_profile') }}">
            {{ form.hidden_tag() }}
            <div>
                {{ form.username.label }}
                {{ form.username() }}
            </div>
            <div>
                {{ form.about_me.label }}
                {{ form.about_me() }}
            </div>
            <div>
                {{ form.submit() }}
            </div>
        </form>
    </main>
</body>
</html>
EOL

# Create CSS and JS files
cat <<EOL > ideal_home_website/app/static/css/styles.css
/* app/static/css/styles.css */

body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

header {
    background-color: #333;
    color: #fff;
    padding: 1em 0;
    text-align: center;
}

nav a {
    color: #fff;
    margin: 0 1em;
    text-decoration: none;
}

nav a:hover {
    text-decoration: underline;
}

main {
    padding: 2em;
}

form {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 2em;
    max-width: 500px;
    margin: 0 auto;
}

form div {
    margin-bottom: 1em;
}

label {
    display: block;
    margin-bottom: 0.5em;
}

input[type="text"], input[type="password"], textarea {
    width: 100%;
    padding: 0.5em;
    border: 1px solid #ddd;
    border-radius: 5px;
}

input[type="submit"] {
    background-color: #333;
    color: #fff;
    border: none;
    padding: 0.75em;
    border-radius: 5px;
    cursor: pointer;
}

input[type="submit"]:hover {
    background-color: #555;
}

p {
    margin: 0.5em 0;
}

.error {
    color: red;
    font-size: 0.875em;
}
EOL

cat <<EOL > ideal_home_website/app/static/js/script.js
// app/static/js/script.js

document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript is working!');
});
EOL

# Create other project files
cat <<EOL > ideal_home_website/config.py
import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'you-will-never-guess'
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or 'sqlite:///ideal_home.db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
EOL

cat <<EOL > ideal_home_website/wsgi.py
from app import create_app

app = create_app()
EOL

cat <<EOL > ideal_home_website/Procfile
web: gunicorn wsgi:app
EOL

cat <<EOL > ideal_home_website/requirements.txt
Flask
Flask-SQLAlchemy
Flask-Migrate
Flask-Login
Flask-WTF
gunicorn
EOL

cat <<EOL > ideal_home_website/runtime.txt
python-3.11.0
EOL

echo "Setup complete! Navigate to 'ideal_home_website' and activate your virtual environment to get started."

