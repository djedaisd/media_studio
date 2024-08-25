from flask import Flask, request, render_template
from mailjet_rest import Client
from flask_cors import CORS
import os

app = Flask(__name__)

# Настройка CORS
CORS(app, resources={r"/submit": {"origins": "*"}})

# Ваши API ключи Mailjet
API_KEY = '5cc9030e96967fbc7f8a82a5639da461'
API_SECRET = '891141e484657e4a619735d1ae0b3a3a'
mailjet = Client(auth=(API_KEY, API_SECRET), version='v3.1')

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
    data = request.get_json()
    number = data.get('number')
    name = data.get('name')
    message = data.get('message')

    subject = "New Project Submission"
    body = f"""
    Phone Number: {number}
    Name: {name}
    Project Description: {message}
    """

    email_data = {
        'Messages': [
            {
                "From": {
                    "Email": "sendersmtp48@gmail.com",
                    "Name": "MEDIASTUDIO CLIENT"
                },
                "To": [
                    {
                        "Email": "nrs120307@gmail.com",
                        "Name": "Yerdaulet"
                    }
                ],
                "Subject": subject,
                "TextPart": body,
            }
        ]
    }

    result = mailjet.send.create(data=email_data)

    if result.status_code == 200:
        return {"status": "success"}, 200
    else:
        print(f"Error: {result.text}")  # Логирование ошибки
        return {"status": "failure", "message": result.text}, 500

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
