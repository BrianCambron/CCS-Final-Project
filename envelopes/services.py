import os
import random
import requests
from twilio.rest import Client

import sys
from accounts.models import Profile
sys.path.append('accounts')
from .models import Envelope



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


def job():

    for y in Profile.objects.all():
    #     for x in Envelope.objects.all():
        username = y.user
    #         envelope_name = x.name
    #         envelope_total = str(x.money)
    #         phone_number = y.phone_number
    #
        good_message_1 = "Becoming rich is hard. Staying broke is hard. Choose your hard. \n – Eric Worre \n Hey, %s. You save amount of money" % (username)
        good_message_2 = "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver. \n – Ayn Rand \n Hey, %s. You save amount of money" % (username)
        good_message_3 = "You don’t have to see the whole staircase, just take the first step. \n – Martin Luther King, Jr \n Hey, %s. You save amount of money" % (username)
        bad_message_1 = "If we command our wealth, we shall be rich and free. If our wealth commands us, we are poor indeed. \n – Edmund Burke \n Hey, %s. Did not save any money this week" % (username)
        bad_message_2 = "Too many people spend money they haven’t earned, to buy things they don’t want, to impress people that they don’t like. \n – Will Rogers \n Hey, %s. Did not save any money this week" % (username)
        bad_message_3 = "Just keep swimming. \n – Dory (from Finding Nemo) \n Hey, %s. Did not save any money this week" % (username)

        # account_sid = os.environ['TWILIO_ACCOUNT_SID']
        # auth_token = os.environ['TWILIO_AUTH_TOKEN']
        # client = Client(account_sid, auth_token)
        #
        # if y.phone_number:
        #     client.messages.create(
        #                              body=good_message_2,
        #                              from_='+19382220702',
        #                              to=y.phone_number
        #                           )
            # if(sum_of_receipts < envelope_total):
            #     print(random.choice([good_message_1, good_message_2, good_message_3]))
            # elif(sum_of_receipts > envelope_total):
            #     print(random.choice([bad_message_1, bad_message_2, bad_message_3]))

#
job()
