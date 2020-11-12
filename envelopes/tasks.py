from celery import Celery
from celery.schedules import crontab

app = Celery('tasks', broker='redis://:p98f35853fc053b0f48009ea7dbda8d74b75f989d74709f76f9dfd3b9f7104af2@ec2-54-224-86-61.compute-1.amazonaws.com:12229')

@app.task

def hello(name):
    return 'Hello' + name
