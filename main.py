import os
import logging
from flask import Flask, render_template, redirect, url_for

# Set up logging for debugging
logging.basicConfig(level=logging.DEBUG)

# Create Flask app
app = Flask(__name__)
app.secret_key = os.environ.get("SESSION_SECRET", "dev-secret-key-change-in-production")

@app.route('/')
def index():
    """Redirect to mood page as the default landing page"""
    return redirect(url_for('mood'))

@app.route('/mood')
def mood():
    """Render the mood tracking page"""
    return render_template('mood.html')

@app.route('/notes')
def notes():
    """Render the notes page"""
    return render_template('notes.html')

@app.route('/planner')
def planner():
    """Render the planner page"""
    return render_template('planner.html')

@app.route('/pomodoro')
def pomodoro():
    """Render the pomodoro timer page"""
    return render_template('pomodoro.html')

@app.route('/matrix')
def matrix():
    """Render the Eisenhower matrix page"""
    return render_template('matrix.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
