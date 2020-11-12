# import os
# import random
import requests
# from twilio.rest import Client
#
# import sys
# from accounts.models import Profile
# sys.path.append('accounts')
from .models import Envelope, Receipt
# #
#
#
# def send_sms(request):
#     account_sid = os.environ['TWILIO_ACCOUNT_SID']
#     auth_token = os.environ['TWILIO_AUTH_TOKEN']
#     client = Client(account_sid, auth_token)
#
#     message = client.messages.create(
#                                   body='Hi there!',
#                                   from_='+19382220702',
#                                   to='+18649071445'
#                               )
#
#
def job():
# #
    for y in Receipt.objects.all():
        # print(y.image.url)

        url = 'https://api.taggun.io/api/receipt/v1/simple/url'

        headers = {'apikey': 'e91827b01c5e11ebafc7c5a18819396c'}
        payload = {
        "url": y.image.url,
        "headers": {},
        "refresh": False,
        "incognito": False,
        "ipAddress": "32.4.2.223"
        }

        response = requests.post(url, data=payload, headers=headers)

        print(response.content)
#             if(sum_of_receipts < envelope_total):
#                 print(random.choice([good_message_1, good_message_2, good_message_3]))
#             elif(sum_of_receipts > envelope_total):
#                 print(random.choice([bad_message_1, bad_message_2, bad_message_3]))
#
#
job()
