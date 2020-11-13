from celery import Celery
from celery.schedules import crontab

import os
from twilio.rest import Client

import sys
sys.path.append('accounts')
from accounts.models import Profile

app = Celery('tasks', broker='redis://:p98f35853fc053b0f48009ea7dbda8d74b75f989d74709f76f9dfd3b9f7104af2@ec2-54-224-86-61.compute-1.amazonaws.com:12229')

@app.task

# def send_sms(phone_number):
#
#     for y in Profile.objects.all():
#         username = y.user
#
#         good_message_1 = "Becoming rich is hard. Staying broke is hard. Choose your hard. \n – Eric Worre \n Hey, %s. You save amount of money" % (username)
#         good_message_2 = "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver. \n – Ayn Rand \n Hey, %s. You save amount of money" % (username)
#         good_message_3 = "You don’t have to see the whole staircase, just take the first step. \n – Martin Luther King, Jr \n Hey, %s. You save amount of money" % (username)
#         bad_message_1 = "If we command our wealth, we shall be rich and free. If our wealth commands us, we are poor indeed. \n – Edmund Burke \n Hey, %s. Did not save any money this week" % (username)
#         bad_message_2 = "Too many people spend money they haven’t earned, to buy things they don’t want, to impress people that they don’t like. \n – Will Rogers \n Hey, %s. Did not save any money this week" % (username)
#         bad_message_3 = "Just keep swimming. \n – Dory (from Finding Nemo) \n Hey, %s. Did not save any money this week" % (username)
#
#         account_sid = os.environ['TWILIO_ACCOUNT_SID']
#         auth_token = os.environ['TWILIO_AUTH_TOKEN']
#         client = Client(account_sid, auth_token)
#
#         if y.phone_number:
#             client.messages.create(
#              body=good_message_3,
#              from_='+19382220702',
#              to=phone_number
#              )
