from mailjet_rest import Client
import json

def handler(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            name = data.get('name')
            number = data.get('number')
            message = data.get('message')

            # Mailjet API credentials
            API_KEY = '5cc9030e96967fbc7f8a82a5639da461'
            API_SECRET = '891141e484657e4a619735d1ae0b3a3a'
            mailjet = Client(auth=(API_KEY, API_SECRET), version='v3.1')

            # Email content
            subject = "New Project Submission"
            body = f"""
            Phone Number: {number}
            Name: {name}
            Project Description: {message}
            """

            # Prepare Mailjet request
            email_data = {
                'Messages': [
                    {
                        "From": {
                            "Email": "sendersmtp48@gmail.com",  # Replace with your sender email
                            "Name": "VR Client"
                        },
                        "To": [
                            {
                                "Email": "nrs120307@gmail.com",  # Email to send the message to
                                "Name": "Recipient Name"
                            }
                        ],
                        "Subject": subject,
                        "TextPart": body,
                    }
                ]
            }

            # Send email using Mailjet
            result = mailjet.send.create(data=email_data)

            if result.status_code == 200:
                return {
                    'statusCode': 200,
                    'body': json.dumps({'message': 'Form submitted successfully!'})
                }
            else:
                return {
                    'statusCode': 500,
                    'body': json.dumps({'message': f'Failed to send email: {result.text}'})
                }

        except Exception as e:
            return {
                'statusCode': 500,
                'body': json.dumps({'message': f'An error occurred: {str(e)}'})
            }

    else:
        return {
            'statusCode': 405,
            'body': json.dumps({'message': 'Method not allowed'})
        }
