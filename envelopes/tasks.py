from celery import Celery
from celery.schedules import crontab

import os
from twilio.rest import Client

import sys
sys.path.append('accounts')
from accounts.models import Profile
from .models import Envelope, Receipt

import random
from django.db.models import Sum


app = Celery('tasks', broker='redis://:p98f35853fc053b0f48009ea7dbda8d74b75f989d74709f76f9dfd3b9f7104af2@ec2-54-224-86-61.compute-1.amazonaws.com:12229')

@app.task

def send_sms(phone_number):

    for User in Profile.objects.all():
        for x in Receipt.objects.all():
            spent = Receipt.objects.all().aggregate(Sum('total_amount'))
            total_spent = round(spent.get('total_amount__sum'), 2)
            break
        for x in Envelope.objects.all():
            if(x.money > 0):
                sum = Envelope.objects.all().aggregate(Sum('money'))
                total_saved = round(sum.get('money__sum'), 2)
                break


        username = User.user
        phone_number = User.phone_number
        Usermessage = User.message

        good_message_1 = "Becoming rich is hard. Staying broke is hard. Choose your hard. \n – Eric Worre \n Hey, %s. You spent %s this week. You saved %s this week. \n" % (username, total_spent, total_saved)
        good_message_2 = "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver. \n – Ayn Rand \n Hey, %s. You spent %s this week. You saved %s this week. \n" % (username, total_spent, total_saved)
        good_message_3 = "You don’t have to see the whole staircase, just take the first step. \n – Martin Luther King, Jr \n Hey, %s. You spent %s this week. You saved %s this week. \n" % (username, total_spent, total_saved)
        bad_message_1 = "If we command our wealth, we shall be rich and free. If our wealth commands us, we are poor indeed. \n – Edmund Burke \n Hey, %s. You spent %s this week. Did not save any money this week.\n" % (username, total_spent)
        bad_message_2 = "Too many people spend money they haven’t earned, to buy things they don’t want, to impress people that they don’t like. \n – Will Rogers \n Hey, %s. You spent %s this week. Did not save any money this week.\n" % (username, total_spent)
        bad_message_3 = "Just keep swimming. \n – Dory (from Finding Nemo) \n Hey, %s. You spent %s this week. Did not save any money this week. \n" % (username, total_spent)

        if(total_saved > 0):
            message = random.choice([good_message_1, good_message_2, good_message_3])
        elif(total_saved <= 0):
            message = random.choice([bad_message_1, bad_message_2, bad_message_3])

        account_sid = os.environ['TWILIO_ACCOUNT_SID']
        auth_token = os.environ['TWILIO_AUTH_TOKEN']
        client = Client(account_sid, auth_token)

        if User.phone_number:
            client.messages.create(
             body=message + Usermessage,
             from_='+19382220702',
             to=phone_number
             )
