import os
from twilio.rest import Client
import threading
import schedule
import time


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
#     return HttpResponse("messages sent!", 200)
#
def job():
    # account_sid = os.environ['TWILIO_ACCOUNT_SID']
    # auth_token = os.environ['TWILIO_AUTH_TOKEN']
    # client = Client(account_sid, auth_token)
    #
    # message = client.messages.create(
    #                               body='Hi, Brian. How are you?',
    #                               from_='+19382220702',
    #                               to='+18649071445'
    #                           )


    print('Hello, World');



job()
# def run_threaded(job_func):
#     job_thread = threading.Thread(target=job_func)
#     job_thread.start()
#
# schedule.every(10).seconds.do(run_threaded, job)

# while 1:
#     schedule.run_pending()
#     time.sleep(1)




















    # schedule.every().monday.at("12:00").do(job)


    # while True:
    #     schedule.run_pending()
    #     time.sleep(1)
