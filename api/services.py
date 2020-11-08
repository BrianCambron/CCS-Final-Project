from django.http import HttpResponse
import os
from twilio.rest import Client



def send_sms(request):
    account_sid = os.environ['TWILIO_ACCOUNT_SID']
    auth_token = os.environ['TWILIO_AUTH_TOKEN']
    client = Client(account_sid, auth_token)

    message = client.messages.create(
                                  body='Hi there!',
                                  from_='+19382220702',
                                  to='+18649071445'
                              )

    return HttpResponse("messages sent!", 200)
