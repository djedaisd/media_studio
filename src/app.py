# from flask import Flask, request, jsonify
# from flask_cors import CORS
# from mailjet_rest import Client

# app = Flask(__name__)
# CORS(app)  # This will enable CORS to allow requests from your React app

# # Mailjet API credentials
# API_KEY = '5cc9030e96967fbc7f8a82a5639da461'
# API_SECRET = '891141e484657e4a619735d1ae0b3a3a'
# mailjet = Client(auth=(API_KEY, API_SECRET), version='v3.1')

# @app.route('/submit', methods=['POST'])
# def submit():
#     data = request.get_json()
#     name = data.get('name')
#     number = data.get('number')
#     message = data.get('message')

#     # Email content
#     subject = "New Project Submission"
#     body = f"""
#     Phone Number: {number}
#     Name: {name}
#     Project Description: {message}
#     """

#     # Prepare Mailjet request
#     email_data = {
#         'Messages': [
#             {
#                 "From": {
#                     "Email": "sendersmtp48@gmail.com",  # Replace with your sender email
#                     "Name": "VR Client"
#                 },
#                 "To": [
#                     {
#                         "Email": "nrs120307@gmail.com",  # Email to send the message to
#                         "Name": "Recipient Name"
#                     }
#                 ],
#                 "Subject": subject,
#                 "TextPart": body,
#             }
#         ]
#     }

#     # Send email using Mailjet
#     result = mailjet.send.create(data=email_data)

#     if result.status_code == 200:
#         return jsonify({'message': 'Form submitted successfully!'}), 200
#     else:
#         return jsonify({'message': f'Failed to send email: {result.text}'}), 500

# if __name__ == '__main__':
#     app.run(debug=True)
