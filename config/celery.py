import os

from celery import Celery
from celery.schedules import crontab

# set the default Django settings module for the 'celery' program.
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')

app = Celery('config')

# Using a string here means the worker doesn't have to serialize
# the configuration object to child processes.
# - namespace='CELERY' means all celery-related configuration keys
#   should have a `CELERY_` prefix.
app.config_from_object('django.conf:settings', namespace='CELERY')

# Load task modules from all registered Django app configs.
app.autodiscover_tasks()


@app.task(bind=True)
def debug_task(self):
    print(f'Request: {self.request!r}')

app.conf.beat_schedule = {
    'add-every-10-seconds': {
        'task': 'envelopes.tasks.send_sms',
        'schedule': crontab(hour=13, minute=0, day_of_week='fri'),
        'args': ['+18649071445']
    },
}
app.conf.timezone = 'UTC'

# celery -A config worker --loglevel=INFO
# celery -A config beat -l info
